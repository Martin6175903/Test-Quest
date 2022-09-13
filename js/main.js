let childs = document.querySelector('.authorization__inner').children;

document.querySelector('.form__title--active-btn-1').onclick = function(event) {

    childs[3].children[0].classList.remove('form__box--hidden');
    childs[2].children[0].classList.add('form__box--hidden');

};

document.querySelector('.form__title--active-btn-2').onclick = function(event) {

    childs[2].children[0].classList.remove('form__box--hidden');
    childs[3].children[0].classList.add('form__box--hidden');

};








