const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
const langBtn=document.getElementById('language-toggle');let language=localStorage.getItem('gti-language')||'en';
function setLanguage(lang){language=lang;document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.querySelectorAll('[data-en][data-ar]').forEach(el=>{el.innerHTML=el.dataset[lang];});if(langBtn)langBtn.textContent=lang==='en'?'العربية':'English';localStorage.setItem('gti-language',lang);}
if(langBtn)langBtn.addEventListener('click',()=>setLanguage(language==='en'?'ar':'en'));setLanguage(language);
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
