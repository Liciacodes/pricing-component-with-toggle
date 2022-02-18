const monthlyPrices = ['19.99', '24.99', '34.99'];
const annuallyPrices = [ '199.99', '249.99', '349.99'];
let toggle_btn = document.querySelector('#price-toggle');
let prices = document.querySelectorAll('.price');

const dollar_sign = '$';
prices.forEach((price, index) => {
    price.innerHTML = dollar_sign + monthlyPrices[index];
});

toggle_btn.addEventListener('click', () => {
   if(toggle_btn.checked) {
       prices.forEach((price, index) => {
           monthlyPrices.indexOf(price.innerHTML) === -1 ? price.innerHTML = dollar_sign + monthlyPrices[index] : price.innerHTML = dollar_sign +annuallyPrices[index];
       })
   }else {
       prices.forEach((price, index) => {
           annuallyPrices.indexOf(price.innerHTML) === -1 ? price.innerHTML = dollar_sign + annuallyPrices[index] : price.innerHTML = dollar_sign + monthlyPrices[index];
       })
   }
})






