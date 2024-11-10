export default function styleModal(numb, color) {
  const colorsBillet = ['rgb(145, 15, 6)', 'rgb(242, 114, 229)', 'rgb(50, 11, 79)', 'rgb(53, 108, 219)'];
  const rings = numb === 1? ['ring1', 'ring2']: ['ring3', 'ring4'];
  const indexCB = colorsBillet.indexOf(color);
  const circ = `circ${indexCB}`;
  const idOnColor = indexCB  % 2 === 0 ? 'cr1' : 'cr2'
  document.querySelector('.modal-form').dataset.hero = numb;
  document.querySelectorAll('.modal-form__span').forEach((item, index)=> {
    item.previousSibling.checked = false;
    item.className = 'modal-form__span';
    item.classList.add(rings[index]);
  })
  document.getElementById(idOnColor).checked = true;
  if(indexCB % 2 === 0) {
    document.getElementById('cr1').nextSibling.classList.add(circ);
  } else {
    document.getElementById('cr2').nextSibling.classList.add(circ);
  }
}
