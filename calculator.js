const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.querySelector('span');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('mult');
const divide = document.getElementById('divide');
const reset = document.getElementById('reset');

plus.addEventListener('click', () => {
    result.textContent = Number(num1.value) + Number(num2.value);
});

minus.addEventListener('click', () => {
    result.textContent = Number(num1.value) - Number(num2.value);
});

multiply.addEventListener('click', () => {
    result.textContent = Number(num1.value) * Number(num2.value);
});

divide.addEventListener('click', () => {
    result.textContent = Number(num1.value) / Number(num2.value);
});

reset.addEventListener('click', () => {
    num1.textContent = 0;
    num2.textContent = 0;
    result.textContent = 0;

});