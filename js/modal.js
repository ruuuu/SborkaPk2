const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');


modalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
 

});



modal.addEventListener('click', (evt) => { //evt- объект события

  const target = evt.target;
  console.log(target)

  // target.classList.contains('block-center')
  // либо так:
  if(!target.closest('.modal__inner')){  // если у target или его родителя имеется класс .modal__inner, то вернет этот элемент
    modal.style.display = 'none';
  }
});