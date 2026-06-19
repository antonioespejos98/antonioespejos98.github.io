/* ===== Year ===== */
document.getElementById('year').textContent = new Date().getFullYear();

/* ===== Language toggle (ES / EN) ===== */
const langToggle = document.getElementById('langToggle');
let lang = (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';

function applyLang(l){
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll('[data-es]').forEach(el => {
    const val = el.getAttribute('data-' + l);
    if (val !== null) el.textContent = val;
  });
  langToggle.querySelectorAll('.lang-toggle__opt').forEach(opt => {
    opt.classList.toggle('is-active', opt.dataset.lang === l);
  });
}
langToggle.addEventListener('click', () => applyLang(lang === 'es' ? 'en' : 'es'));
applyLang(lang);

/* ===== Scroll-driven theme: dev (blue) -> fight (red) ===== */
const root = document.documentElement;
function lerp(a, b, t){ return a + (b - a) * t; }
function mix(c1, c2, t){
  return c1.map((v, i) => Math.round(lerp(v, c2[i], t)));
}
function rgb(arr){ return `rgb(${arr[0]},${arr[1]},${arr[2]})`; }

// palette endpoints
const devAccent = [47,109,246], fightAccent = [226,55,68];
const bgDev = [10,15,31], bgFight = [26,8,12];

const progressBar = document.getElementById('progressBar');

function onScroll(){
  const max = document.body.scrollHeight - window.innerHeight;
  const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;

  // progress bar
  progressBar.style.width = (p * 100) + '%';

  // theme interpolation across the whole scroll
  root.style.setProperty('--accent', rgb(mix(devAccent, fightAccent, p)));
  document.body.style.background = rgb(mix(bgDev, bgFight, p));
}
window.addEventListener('scroll', onScroll, { passive:true });
window.addEventListener('resize', onScroll);
onScroll();

/* ===== Reveal on scroll ===== */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold:0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
