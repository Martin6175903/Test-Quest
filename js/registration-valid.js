// Создаем переменные для проверки двух паролей

let passwordReg;
let passwordConfirm;

// Проверка валидности паролей.
// 

document.querySelector('.form__box-2').onchange = function(event) {
    let target = event.target;

    if (target.type == 'password') {
        if (target.classList.contains('form__password')) passwordReg = target.value;
        if (target.classList.contains('form__confirm-psw')) passwordConfirm = target.value;

        if (passwordReg && passwordConfirm) {
            if (passwordReg !== passwordConfirm) {
                document.querySelector('.form__confirm-psw').setCustomValidity("Пароли не совпадают!");
                console.log("Пароли не совпадают!");
            } else document.querySelector('.form__confirm-psw').setCustomValidity("");
        }
    } else return;

}
