let price_base,
    coef_top,
    coef_size,
    price_work = 20000;

let base = document.querySelector('input[name="base"]:checked').value;
let top_base = document.querySelector('input[name="top"]:checked').value;
let size = document.querySelector('input[name="size"]:checked').value;


function price() {
    switch (base) {
        case 'oak':
            price_base = 22000; break;
        case 'pine':
            price_base = 18000; break;
        case 'metal':
            price_base = 13000; break;
    }

    switch (top_base) {
        case 'array':
            coef_top = 3; break;
        case 'glass':
            coef_top = 1; break;
        case 'ceramics':
            coef_top = 2; break;
    }

    switch (size) {
        case 's':
            coef_size = 1; break;
        case 'm':
            coef_size = 2.3; break;
        case 'l':
            coef_size = 3.5; break;
    }
    
    document.querySelector('.amount-price').innerHTML = Math.ceil(price_base * coef_top * coef_size) + price_work + '&#8381';
}

let base_buttons = document.querySelectorAll('.base');
function base_new_price() {
    base = document.querySelector('input[name="base"]:checked').value;
    price();
}
base_buttons.forEach((button) => {
    button.addEventListener('click', base_new_price);
});


let top_buttons = document.querySelectorAll('.top');
function top_new_price() {
    top_base = document.querySelector('input[name="top"]:checked').value;
    price();
}
top_buttons.forEach((button) => {
    button.addEventListener('click', top_new_price);
});


let size_buttons = document.querySelectorAll('.size');
function size_new_price() {
    size = document.querySelector('input[name="size"]:checked').value;
    price();
}
size_buttons.forEach((button) => {
    button.addEventListener('click', size_new_price);
});