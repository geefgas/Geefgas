const $ = (sel) => document.querySelector(sel);

let BANK = [];
let session = null;

async function loadBank(){
  const res = await fetch('assets/vragen.json', {cache:'no-store'});
  BANK = await res.json();
  $('#bankCount').textContent = BANK.length.toString();
}

function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
}

function buildSession(){
  const cat = $('#cat').value;
  const mode = $('#mode').value;
  let count = parseInt($('#count').value || '25', 10);
  if(isNaN(count) || count < 5) count = 5;

  let pool = BANK.filter(q => cat === 'ALL' ? true : q.categorie === cat);

  // Exam-ish: mix if ALL, else keep category
  if(mode === 'EXAM' && cat === 'ALL'){
    // simple mixing by tags
    // prefer priority tags: voorrang, snelheid, borden, manoeuvres, gevaar
    const tags = ['voorrang','snelheid','borden','manoeuvre','gevaar','verlichting','parkeren','milieu','techniek'];
    let mixed = [];
    for(const t of tags){
      mixed.push(...pool.filter(q => (q.tags||[]).includes(t)));
    }
    // add remaining
    mixed.push(...pool.filter(q => !mixed.includes(q)));
    pool = mixed;
  } else {
    pool = shuffle(pool.slice());
  }

  const picked = pool.slice(0, Math.min(count, pool.length));
  session = {
    cat, mode,
    i: 0,
    items: picked,
    answers: [], // {id, pick, correct}
    score: 0
  };
  renderQuestion();
  $('#startPanel').style.display = 'none';
  $('#quizPanel').style.display = 'block';
  $('#resultPanel').style.display = 'none';
}

function renderQuestion(){
  const total = session.items.length;
  const q = session.items[session.i];
  $('#qNum').textContent = (session.i+1).toString();
  $('#qTotal').textContent = total.toString();
  $('#qText').textContent = q.vraag;

  // progress
  const pct = Math.round((session.i/total)*100);
  $('#progBar').style.width = pct + '%';

  // clear options
  const wrap = $('#options');
  wrap.innerHTML = '';
  q.opties.forEach((opt, idx) => {
    const label = document.createElement('label');
    label.className = 'opt';
    label.innerHTML = `
      <input type="radio" name="opt" value="${idx}" />
      <div><b>${String.fromCharCode(65+idx)}.</b> ${opt}</div>
    `;
    wrap.appendChild(label);
  });

  $('#feedback').innerHTML = '';
  $('#nextBtn').disabled = true;
  $('#submitBtn').disabled = false;
}

function grade(){
  const q = session.items[session.i];
  const picked = document.querySelector('input[name="opt"]:checked');
  if(!picked) return;

  const pick = parseInt(picked.value, 10);
  const correct = (pick === q.antwoordIndex);

  // mark options
  document.querySelectorAll('.opt').forEach((el) => {
    const val = parseInt(el.querySelector('input').value, 10);
    if(val === q.antwoordIndex) el.classList.add('correct');
    if(val === pick && !correct) el.classList.add('wrong');
    el.querySelector('input').disabled = true;
  });

  session.answers.push({id:q.id, pick, correct});
  if(correct) session.score += 1;

  const pill = correct ? '<span class="pillOk">✅ Goed</span>' : '<span class="pillBad">❌ Fout</span>';
  $('#feedback').innerHTML = `
    <div class="card" style="margin-top:12px;">
      <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
        ${pill}
        <div class="small">Correct antwoord: <b>${String.fromCharCode(65+q.antwoordIndex)}</b></div>
      </div>
      <hr/>
      <div>${q.uitleg}</div>
    </div>
  `;

  $('#submitBtn').disabled = true;
  $('#nextBtn').disabled = false;
}

function next(){
  session.i += 1;
  if(session.i >= session.items.length){
    showResults();
    return;
  }
  renderQuestion();
}

function showResults(){
  const total = session.items.length;
  const score = session.score;
  const pct = Math.round((score/total)*100);
  $('#resScore').textContent = `${score} / ${total}`;
  $('#resPct').textContent = `${pct}%`;
  $('#progBar').style.width = '100%';

  // simple pass rule (placeholder): 80%
  const pass = pct >= 80;
  $('#resPass').innerHTML = pass ? '<span class="pillOk">✅ Ruim voldoende</span>' : '<span class="pillBad">❌ Nog even oefenen</span>';

  // list wrong
  const wrong = session.answers.filter(a => !a.correct);
  const list = $('#wrongList');
  list.innerHTML = '';
  if(wrong.length === 0){
    list.innerHTML = '<div class="small">Top! Alles goed.</div>';
  } else {
    wrong.slice(0,20).forEach(w => {
      const q = session.items.find(x => x.id === w.id);
      const el = document.createElement('div');
      el.className = 'card';
      el.style.marginTop = '10px';
      el.innerHTML = `<b>Vraag:</b> ${q.vraag}<hr/><div class="small">Jij: <b>${String.fromCharCode(65+w.pick)}</b> • Correct: <b>${String.fromCharCode(65+q.antwoordIndex)}</b></div><div style="margin-top:10px;">${q.uitleg}</div>`;
      list.appendChild(el);
    });
  }

  $('#quizPanel').style.display = 'none';
  $('#resultPanel').style.display = 'block';
}

function reset(){
  session = null;
  $('#startPanel').style.display = 'block';
  $('#quizPanel').style.display = 'none';
  $('#resultPanel').style.display = 'none';
}

$('#startBtn').addEventListener('click', buildSession);
$('#submitBtn').addEventListener('click', grade);
$('#nextBtn').addEventListener('click', next);
$('#resetBtn').addEventListener('click', reset);

loadBank();