
const menu=document.querySelector('.menu'), nav=document.querySelector('.nav-links');
if(menu){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))})}

const buttons=[...document.querySelectorAll('.filter-btn')];
const cards=[...document.querySelectorAll('[data-year]')];
const search=document.querySelector('#mediaSearch');
function applyFilters(){
  const active=document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
  const term=(search?.value||'').toLowerCase().trim();
  cards.forEach(el=>{
    const year=el.dataset.year, text=el.textContent.toLowerCase();
    const show=(active==='all'||year===active)&&(!term||text.includes(term));
    el.classList.toggle('hidden',!show);
  });
}
buttons.forEach(b=>b.addEventListener('click',()=>{
  buttons.forEach(x=>x.classList.remove('active')); b.classList.add('active'); applyFilters();
}));
if(search) search.addEventListener('input',applyFilters);
