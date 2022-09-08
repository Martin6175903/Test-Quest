
document.querySelector('.form__title--active-btn-1').onclick = function(event) {
    let childs = document.querySelector('.authorization__form').children;

    childs[1].classList.remove('form__box--hidden');
    childs[0].classList.add('form__box--hidden');
};

document.querySelector('.form__title--active-btn-2').onclick = function(event) {
    let childs = document.querySelector('.authorization__form').children;

    childs[0].classList.remove('form__box--hidden');
    childs[1].classList.add('form__box--hidden');
};




