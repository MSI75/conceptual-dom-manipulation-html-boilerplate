const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express');

const shippingField = document.getElementById('shipping');
const total = document.getElementById('total');

function isContain(elem) {
    return elem.classList.contains('selected');
}

free.addEventListener('click', function() {
    if (!isContain(free)) {
        free.classList.add('selected');
        express.classList.remove('selected');
    }
    shippingField.innerText = '5'
    updateTotal()
});
express.addEventListener('click', function() {
    if (!isContain(express)) {
        express.classList.add('selected');
        free.classList.remove('selected');
    }
    shippingField.innerText = '30'
    updateTotal()
});

// Update total 
function updateTotal() {
    const shippingCharge = Number(shippingField.innerText);
    const productPrice = Number(price.innerText);
    const grandTotal = shippingCharge + productPrice;
    total.innerText = grandTotal;
}

div1.addEventListener('click', function() {
    if (!isContain(div1)) {
        div1.classList.add('selected');
        div2.classList.remove('selected');
        div2.classList.remove('selected');
    }
    // changing img 
    img.src = 'images/1.jpg';
    // changing description 
    desc.innerText = 'first - Staying fit by exercising daily also helps to keep one. At first, he has to eat a balanced diet (good food) daily in time.';
    // changing price 
    price.innerText = '650';
    // changing total price 
    updateTotal()
});
div2.addEventListener('click', function() {
    if (!isContain(div2)) {
        div1.classList.remove('selected');
        div2.classList.add('selected');
        div2.classList.remove('selected');
    }
    img.src = 'images/2.jpg';
    desc.innerText = 'second - Staying fit by exercising daily also helps to keep one. At first, he has to eat a balanced diet (good food) daily in time.';
    price.innerText = '550';
    updateTotal()
});
div3.addEventListener('click', function() {
    if (!isContain(div3)) {
        div1.classList.remove('selected');
        div2.classList.remove('selected');
        div3.classList.add('selected');
    }
    img.src = 'images/3.jpg';
    desc.innerText = 'third - Staying fit by exercising daily also helps to keep one. At first, he has to eat a balanced diet (good food) daily in time.';
    price.innerText = '330';
    updateTotal()
});