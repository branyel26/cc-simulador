// Simulador CC (ISC2) - Lógica de examen (feedback inmediato)
// Desarrollado por branyel26 - github.com/branyel26

// ═══════════════════════════════════════════════════════════════════════════════
// SISTEMA DE INTEGRIDAD - NO MODIFICAR ESTA SECCIÓN
// El quiz requiere los créditos del autor para funcionar correctamente
// ═══════════════════════════════════════════════════════════════════════════════
const _0x={
  _a:[89,110,74,104,98,110,108,108,98,68,73,50],
  _b:[90,50,108,48,97,72,86,105,76,109,78,118,98,83,57,105,99,109,70,117,101,87,86,115,77,106,89,61],
  _c:[98,71,108,117,97,50,86,107,97,87,52,117,89,50,57,116,76,50,108,117,76,50,74,121,89,87,53,53,90,87,119,61],
  _d:[97,88,78,106,77,105,53,118,99,109,99,61],
  _k:2891
};
const _d=s=>atob(s);const _e=a=>a.map(c=>String.fromCharCode(c)).join('');
const _cV={a:_d(_e(_0x._a)),h:_d(_e(_0x._b)),l:_d(_e(_0x._c)),i:_d(_e(_0x._d))};
const _hC=()=>{let s=0;for(let i=0;i<_cV.a.length;i++)s+=_cV.a.charCodeAt(i)*(i+1);for(let i=0;i<_cV.h.length;i++)s+=_cV.h.charCodeAt(i);return s;};
const _vH=_hC();
let _qF=true;
function _vC(){
  if(!_qF)return false;
  const c=document.getElementById('credits-bar');
  if(!c)return false; // No marcar como permanente si DOM no está listo
  const s=getComputedStyle(c);
  if(s.display==='none'||s.visibility==='hidden'||parseFloat(s.opacity)<0.5||c.offsetHeight<10||c.offsetWidth<50){_qF=false;return false;}
  const links=c.querySelectorAll('a[data-c]');
  if(links.length<3){_qF=false;return false;}
  let found={g:0,l:0,i:0};
  links.forEach(a=>{
    const h=(a.getAttribute('href')||'').toLowerCase();
    const v=a.offsetWidth>0&&a.offsetHeight>0;
    if(v&&h.includes(_cV.a))found.g++;
    if(v&&h.includes('branyel'))found.l++;
    if(v&&h.includes('isc2'))found.i++;
  });
  if(found.g<1||found.l<1||found.i<1){_qF=false;return false;}
  if(_hC()!==_vH){_qF=false;return false;}
  return true;
}
const _sW=()=>{
  _qF=false;
  try{localStorage.clear();sessionStorage.clear();}catch(e){}
  document.body.innerHTML='<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0f141b;color:#e8eef6;font-family:sans-serif;flex-direction:column;gap:1rem;user-select:none"><div style="text-align:center"><h2>⚠️ Contenido protegido</h2><p>Este simulador requiere los créditos del autor</p><p style="opacity:0.6;font-size:0.85rem;margin-top:1rem">Desarrollado por: github.com/'+_cV.a+'</p><p style="opacity:0.4;font-size:0.75rem">linkedin.com/in/branyel</p></div></div>';
  document.documentElement.style.cssText='pointer-events:none!important;';
  setTimeout(()=>location.reload(),15000);
};
const _cK=()=>_qF&&_vC();
let _cI=0;
const _iV=setInterval(()=>{
  if(document.readyState==='complete'){
    if(!_cK()){_cI++;if(_cI>=3){clearInterval(_iV);_sW();}}
    else{_cI=0;}
  }
},3000);
// ═══════════════════════════════════════════════════════════════════════════════

const DOMAIN_LABELS = {
  D1: "Dominio 1: Principios de Seguridad",
  D2: "Dominio 2: BC, DR & IR",
  D3: "Dominio 3: Control de Acceso",
  D4: "Dominio 4: Network Security",
  D5: "Dominio 5: Operaciones de Seguridad"
};

const DOMAIN_RECOMMENDATIONS = {
  D1: [
    "Refuerza CIA y clasificación de controles (administrativos, técnicos, físicos).",
    "Gestiona riesgos: identificación, análisis/evaluación, tratamiento (avoid/mitigate/transfer/accept).",
    "Criptografía base: symmetric vs asymmetric, hashing, TLS."
  ],
  D2: [
    "Ciclo de Incident Response: preparación, detección/análisis, contención, erradicación, recuperación, lecciones aprendidas.",
    "BCP vs DRP, y métricas BIA/RTO/RPO.",
    "En cada fase, prioriza el objetivo correcto (contener vs recolectar evidencia, etc.)."
  ],
  D3: [
    "Modelos: DAC, MAC, RBAC, ABAC; y principios least privilege / segregation of duties.",
    "Diferencia authentication vs authorization vs accountability.",
    "Privileged accounts: el riesgo principal es el impacto del compromiso."
  ],
  D4: [
    "OSI: layer 2 (MAC) vs layer 3 (IP) vs layer 4 (TCP/UDP ports).",
    "Protocolos: DNS(53), DHCP, FTP vs SFTP/SSH/HTTPS, NTP.",
    "Controles: Firewalls, IDS/IPS, NAC, SIEM, segmentación/DMZ."
  ],
  D5: [
    "Change control y baselines: status accounting vs verification & audit.",
    "Protección de información: cifrado en reposo, manejo de reportes, DLP.",
    "Security awareness: cómo medir efectividad (testing) y tipos de control."
  ]
};

let questions = [];
let currentIndex = 0;
let answers = [];

let timeRemainingSeconds = 2 * 60 * 60;
let timerIntervalId = null;
let activeTestNumber = 1;

const TOTAL_TESTS = 6;
const PASS_THRESHOLD = 70;
const GOOD_THRESHOLD = 80;

globalThis.addEventListener("DOMContentLoaded", async () => {
  activeTestNumber = getTestNumberFromUrl();
  setupTestPicker();
  updateHeaderForTest(activeTestNumber);

  loadTheme();

  try {
    await loadQuestionBank(activeTestNumber);
  } catch (err) {
    console.error(err);
    alert(`Error: no se pudo cargar el banco de preguntas del Test ${activeTestNumber}.`);
    return;
  }

  if (typeof QUESTIONS === "undefined" || !Array.isArray(QUESTIONS) || QUESTIONS.length !== 100) {
    alert(`Error: El banco del Test ${activeTestNumber} no contiene 100 preguntas.`);
    return;
  }

  questions = buildRandomizedExam(QUESTIONS, activeTestNumber);
  answers = questions.map(() => ({ selectedIndex: null, graded: false, isCorrect: null }));

  bindUi();
  buildSidebar();
  renderQuestion(0);
  startTimer();
});

function getTestNumberFromUrl() {
  const url = new URL(location.href);
  const raw = url.searchParams.get("test");
  const n = Number.parseInt(raw ?? "1", 10);
  if (!Number.isFinite(n)) return 1;
  return Math.min(Math.max(n, 1), TOTAL_TESTS);
}

function setupTestPicker() {
  const select = document.getElementById("test-select");
  if (!select) return;

  select.value = String(activeTestNumber);
  select.addEventListener("change", () => {
    const next = Number.parseInt(select.value, 10);
    const url = new URL(location.href);
    url.searchParams.set("test", String(next));
    location.href = url.toString();
  });
}

function updateHeaderForTest(testNumber) {
  const title = document.querySelector("header h1");
  if (title) title.textContent = "Examen CC (ISC2) - Simulador";
}

function loadQuestionBank(testNumber) {
  const file = `questions${testNumber}.js`;
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = file;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`No se pudo cargar ${file}`));
    document.head.appendChild(script);
  });
}

function buildRandomizedExam(rawQuestions, testNumber) {
  const lastSigKey = `cc_test_${testNumber}_last_signature`;
  const lastSignature = localStorage.getItem(lastSigKey);

  // Intentamos garantizar que el segundo intento no repita el mismo orden.
  // Si coincidiera (muy improbable), re-barajamos algunas veces.
  for (let attempt = 0; attempt < 5; attempt++) {
    const randomized = shuffledCopy(rawQuestions).map(q => shuffleQuestionOptions(q));
    const signature = buildExamSignature(randomized);
    if (signature !== lastSignature) {
      localStorage.setItem(lastSigKey, signature);
      return randomized;
    }
  }

  // Fallback (en caso extremo)
  const randomized = shuffledCopy(rawQuestions).map(q => shuffleQuestionOptions(q));
  localStorage.setItem(lastSigKey, buildExamSignature(randomized));
  return randomized;
}

function buildExamSignature(qs) {
  return qs
    .map(q => {
      const optSig = Array.isArray(q.__optionOrder) ? q.__optionOrder.join(",") : "";
      return `${q.id}:${optSig}`;
    })
    .join("|");
}

function shuffledCopy(items) {
  const copy = items.map(cloneQuestion);
  shuffleInPlace(copy);
  return copy;
}

function shuffleQuestionOptions(question) {
  const original = question;
  const tagged = original.options.map((text, index) => ({ text, index, isCorrect: index === original.correctIndex }));
  shuffleInPlace(tagged);

  original.options = tagged.map(t => t.text);
  original.correctIndex = tagged.findIndex(t => t.isCorrect);
  // Guardamos el orden para la “firma” anti-repetición
  original.__optionOrder = tagged.map(t => t.index);
  return original;
}

function cloneQuestion(q) {
  return {
    id: q.id,
    domain: q.domain,
    question: q.question,
    options: Array.isArray(q.options) ? [...q.options] : [],
    correctIndex: q.correctIndex,
    explanation: q.explanation ?? ""
  };
}

function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(getSecureRandom01() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function getSecureRandom01() {
  // crypto.getRandomValues existe en navegadores modernos
  if (globalThis.crypto?.getRandomValues) {
    const buf = new Uint32Array(1);
    globalThis.crypto.getRandomValues(buf);
    return buf[0] / 0xffffffff;
  }
  return Math.random();
}

function bindUi() {
  document.getElementById("btn-prev").addEventListener("click", () => gotoQuestion(currentIndex - 1));
  document.getElementById("btn-next").addEventListener("click", onNext);
  document.getElementById("btn-finish").addEventListener("click", () => finishExam(true));
  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

  const restart = document.getElementById("btn-restart");
  if (restart) restart.addEventListener("click", () => location.reload());

  const reviewBtn = document.getElementById("btn-review");
  if (reviewBtn) reviewBtn.addEventListener("click", toggleReview);
}

function buildSidebar() {
  const list = document.getElementById("sidebar-list");
  list.innerHTML = "";

  for (let i = 0; i < questions.length; i++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "qnav";
    btn.textContent = String(i + 1);
    btn.addEventListener("click", () => gotoQuestion(i));
    list.appendChild(btn);
  }
  updateSidebar();
}

function updateSidebar() {
  const list = document.getElementById("sidebar-list");
  const buttons = Array.from(list.children);

  buttons.forEach((btn, i) => {
    btn.classList.remove("current", "correct", "wrong");

    const a = answers[i];
    if (a.graded) {
      btn.classList.add(a.isCorrect ? "correct" : "wrong");
    }

    if (i === currentIndex) btn.classList.add("current");
  });
}

function gotoQuestion(index) {
  if (index < 0 || index >= questions.length) return;
  renderQuestion(index);
}

function renderQuestion(index) {
  currentIndex = index;

  const q = questions[currentIndex];
  const a = answers[currentIndex];

  document.getElementById("current-q-num").textContent = String(currentIndex + 1);
  document.getElementById("total-q-num").textContent = String(questions.length);
  document.getElementById("question-text").textContent = q.question;
  document.getElementById("domain-pill").textContent = DOMAIN_LABELS[q.domain] ?? "Dominio";

  const answeredCount = answers.filter(x => x.graded).length;
  const progressPct = Math.round((answeredCount / Math.max(1, questions.length)) * 100);
  document.getElementById("progress-bar").style.width = `${progressPct}%`;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  q.options.forEach((opt, optIndex) => {
    const label = document.createElement("label");
    label.className = "option";
    label.htmlFor = `q${q.id}_o${optIndex}`;

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `q${q.id}`;
    radio.id = `q${q.id}_o${optIndex}`;
    radio.checked = a.selectedIndex === optIndex;
    radio.disabled = a.graded;

    radio.addEventListener("change", () => {
      answers[currentIndex].selectedIndex = optIndex;
      renderQuestion(currentIndex);
    });

    const text = document.createElement("div");
    text.textContent = opt;

    label.appendChild(radio);
    label.appendChild(text);

    if (a.selectedIndex === optIndex) label.classList.add("selected");

    if (a.graded) {
      if (optIndex === q.correctIndex) label.classList.add("correct");
      if (a.selectedIndex === optIndex && optIndex !== q.correctIndex) label.classList.add("wrong");
    }

    optionsContainer.appendChild(label);
  });

  renderFeedback();
  updateNavButtons();
  updateSidebar();
}

function renderFeedback() {
  const feedback = document.getElementById("feedback");
  const title = document.getElementById("feedback-title");
  const body = document.getElementById("feedback-body");

  const q = questions[currentIndex];
  const a = answers[currentIndex];

  if (!a.graded) {
    feedback.hidden = true;
    feedback.classList.remove("ok", "bad");
    title.textContent = "";
    body.textContent = "";
    return;
  }

  feedback.hidden = false;
  feedback.classList.remove("ok", "bad");
  feedback.classList.add(a.isCorrect ? "ok" : "bad");

  title.textContent = a.isCorrect ? "Correcto" : "Incorrecto";

  const correctAnswer = q.options[q.correctIndex];
  body.innerHTML = `
    <div><strong>Respuesta correcta:</strong> ${escapeHtml(correctAnswer)}</div>
    <div style="margin-top:8px; white-space:pre-wrap;">${escapeHtml(q.explanation)}</div>
  `;
}

function updateNavButtons() {
  const prev = document.getElementById("btn-prev");
  const next = document.getElementById("btn-next");

  prev.disabled = currentIndex === 0;

  const a = answers[currentIndex];
  if (!a.graded) {
    next.textContent = "Revisar";
    next.disabled = a.selectedIndex === null;
    return;
  }

  next.disabled = false;
  next.textContent = currentIndex === questions.length - 1 ? "Ver resultados" : "Siguiente";
}

function onNext() {
  const q = questions[currentIndex];
  const a = answers[currentIndex];

  if (!a.graded) {
    if (a.selectedIndex === null) {
      alert("Selecciona una opción antes de continuar.");
      return;
    }

    a.graded = true;
    a.isCorrect = a.selectedIndex === q.correctIndex;
    renderQuestion(currentIndex);
    return;
  }

  if (currentIndex === questions.length - 1) {
    finishExam(false);
    return;
  }

  gotoQuestion(currentIndex + 1);
}

function finishExam(askConfirm) {
  if (askConfirm) {
    const ok = confirm("¿Finalizar el examen ahora?\nPodrás ver resultados y revisión.");
    if (!ok) return;
  }
  showResults();
}

function showResults() {
  stopTimer();

  document.getElementById("quiz-area").style.display = "none";
  document.getElementById("results-area").style.display = "block";
  document.getElementById("footer").style.display = "none";

  const total = questions.length;
  const correct = answers.filter(a => a.graded && a.isCorrect).length;
  const percent = Math.round((correct / total) * 100);

  document.getElementById("score-val").textContent = `${percent}%`;
  document.getElementById("score-sub").textContent = `${correct}/${total} correctas`;
  document.getElementById("result-summary").textContent = buildSummaryText(percent);
  applyScoreVerdict(percent);

  const domainStats = computeDomainStats();
  renderStrengthWeakness(domainStats);
  renderRecommendations(domainStats);
  renderReview();
}

function applyScoreVerdict(percent) {
  const scoreWrap = document.querySelector(".score");
  const scoreVal = document.getElementById("score-val");
  if (!scoreWrap || !scoreVal) return;

  scoreWrap.classList.remove("score-fail", "score-pass", "score-good");

  let verdictText = "Reprobado";
  let verdictClass = "score-fail";
  if (percent >= GOOD_THRESHOLD) {
    verdictText = "Aprobado (Excelente)";
    verdictClass = "score-good";
  } else if (percent >= PASS_THRESHOLD) {
    verdictText = "Aprobado";
    verdictClass = "score-pass";
  }

  scoreWrap.classList.add(verdictClass);
  scoreVal.setAttribute("title", verdictText);

  const sub = document.getElementById("score-sub");
  if (sub) sub.textContent = `${sub.textContent} • ${verdictText}`;
}

function buildSummaryText(percent) {
  if (percent >= 85) return "Muy buen nivel. Estás cerca del estándar de examen.";
  if (percent >= 70) return "Buen progreso. Refuerza los dominios con menor rendimiento.";
  if (percent >= 55) return "Nivel medio. Prioriza fundamentos y práctica con revisión.";
  return "Necesitas refuerzo. Enfócate en conceptos base y repite el simulador.";
}

function computeDomainStats() {
  const stats = {};
  for (const q of questions) {
    if (!stats[q.domain]) stats[q.domain] = { total: 0, correct: 0 };
    stats[q.domain].total++;
  }
  questions.forEach((q, i) => {
    const a = answers[i];
    if (a.graded && a.isCorrect) stats[q.domain].correct++;
  });
  return stats;
}

function renderStrengthWeakness(domainStats) {
  const strengthsEl = document.getElementById("strengths");
  const weaknessesEl = document.getElementById("weaknesses");
  strengthsEl.innerHTML = "";
  weaknessesEl.innerHTML = "";

  const entries = Object.entries(domainStats).map(([domain, s]) => {
    const pct = s.total === 0 ? 0 : Math.round((s.correct / s.total) * 100);
    return { domain, ...s, pct };
  });

  entries.sort((a, b) => b.pct - a.pct);

  const strengths = entries.filter(e => e.total >= 3 && e.pct >= 80);
  const weaknesses = entries.filter(e => e.total >= 3 && e.pct < 60);

  if (strengths.length === 0) strengthsEl.textContent = "Aún no hay fortalezas claras. Sigue practicando.";
  else strengthsEl.innerHTML = strengths.map(e => `<div>• ${escapeHtml(DOMAIN_LABELS[e.domain] ?? e.domain)} — ${e.pct}%</div>`).join("");

  if (weaknesses.length === 0) weaknessesEl.textContent = "No hay debilidades críticas. Mantén repaso constante.";
  else weaknessesEl.innerHTML = weaknesses.map(e => `<div>• ${escapeHtml(DOMAIN_LABELS[e.domain] ?? e.domain)} — ${e.pct}%</div>`).join("");
}

function renderRecommendations(domainStats) {
  const recEl = document.getElementById("recommendations");
  recEl.innerHTML = "";

  const entries = Object.entries(domainStats).map(([domain, s]) => {
    const pct = s.total === 0 ? 0 : Math.round((s.correct / s.total) * 100);
    return { domain, ...s, pct };
  });

  entries.sort((a, b) => a.pct - b.pct);
  const topWeak = entries.slice(0, 2);

  recEl.innerHTML = topWeak.map(e => {
    const tips = DOMAIN_RECOMMENDATIONS[e.domain] ?? ["Repasa los temas del dominio y practica preguntas adicionales."];
    return `
      <div style="margin-bottom:12px;">
        <div style="font-weight:900; margin-bottom:6px;">${escapeHtml(DOMAIN_LABELS[e.domain] ?? e.domain)} (${e.pct}%)</div>
        <div>${tips.map(t => `• ${escapeHtml(t)}`).join("<br>")}</div>
      </div>
    `;
  }).join("");
}

function renderReview() {
  const list = document.getElementById("review-list");
  list.innerHTML = "";

  questions.forEach((q, i) => {
    const displayNumber = i + 1;
    const a = answers[i];
    const userText = a.selectedIndex === null ? "(sin respuesta)" : q.options[a.selectedIndex];
    const correctText = q.options[q.correctIndex];
    let status = "Sin responder";
    if (a.graded) status = a.isCorrect ? "Correcta" : "Incorrecta";

    const el = document.createElement("div");
    el.className = "review-item";
    el.innerHTML = `
      <div class="title">Pregunta ${displayNumber}. ${escapeHtml(q.question)}</div>
      <div><strong>Dominio:</strong> ${escapeHtml(DOMAIN_LABELS[q.domain] ?? q.domain)}</div>
      <div style="margin-top:6px;"><strong>Tu respuesta:</strong> ${escapeHtml(userText)} <span style="font-weight:900;">(${escapeHtml(status)})</span></div>
      <div style="margin-top:6px;"><strong>Correcta:</strong> ${escapeHtml(correctText)}</div>
      <div style="margin-top:8px; white-space:pre-wrap;">${escapeHtml(q.explanation)}</div>
    `;
    list.appendChild(el);
  });
}

function toggleReview() {
  const card = document.getElementById("review-card");
  const btn = document.getElementById("btn-review");
  const showing = card.style.display !== "none";
  card.style.display = showing ? "none" : "block";
  btn.textContent = showing ? "Ver revisión" : "Ocultar revisión";
}

function startTimer() {
  updateTimerUi();
  timerIntervalId = globalThis.setInterval(() => {
    timeRemainingSeconds = Math.max(0, timeRemainingSeconds - 1);
    updateTimerUi();
    if (timeRemainingSeconds === 0) {
      stopTimer();
      alert("Tiempo agotado. Mostrando resultados.");
      showResults();
    }
  }, 1000);
}

function stopTimer() {
  if (timerIntervalId) globalThis.clearInterval(timerIntervalId);
  timerIntervalId = null;
}

function updateTimerUi() {
  const el = document.getElementById("timer");
  const h = Math.floor(timeRemainingSeconds / 3600);
  const m = Math.floor((timeRemainingSeconds % 3600) / 60);
  const s = timeRemainingSeconds % 60;
  el.textContent = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme;
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
  document.getElementById("theme-toggle").textContent = next === "dark" ? "☀️" : "🌙";
}

function loadTheme() {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.dataset.theme = saved;
  document.getElementById("theme-toggle").textContent = saved === "dark" ? "☀️" : "🌙";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
