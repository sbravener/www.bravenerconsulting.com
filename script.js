
function toggleMenu(){ document.querySelector('.menu').classList.toggle('open'); }

function validateForm(e){
  const form = e.target;
  const name = form.querySelector('[name="name"]').value.trim();
  const email = form.querySelector('[name="email"]').value.trim();
  const msg = form.querySelector('[name="message"]').value.trim();
  if(!name || !email || !msg){
    e.preventDefault();
    alert('Please fill out your name, email, and message.');
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form.needs-validate');
  if(form){ form.addEventListener('submit', validateForm); }
});
