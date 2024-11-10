export default function closeModal(e) {
  e.preventDefault();
  document.querySelectorAll('.modal-form__span').forEach((item)=>{
    item.className = 'modal-form__span';
  });
  document.querySelector('.modal-form').dataset.hero = 0;
  document.querySelector('.modal-wrapper').classList.contains('active') && 
    document.querySelector('.modal-wrapper').classList.remove('active');
}

