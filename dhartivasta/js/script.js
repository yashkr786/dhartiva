
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn){
  menuBtn.addEventListener('click',()=>navLinks.classList.toggle('show'));
}
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>navLinks.classList.remove('show'));
});
const form=document.getElementById('contactForm');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const notice=document.getElementById('formNotice');
    notice.style.display='block';
    form.reset();
  });
}
