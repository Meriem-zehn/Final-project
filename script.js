let heartBtn = document.getElementById('love-btn');
let minusBtn = document.getElementById('minus-btn');
let plusBtn = document.getElementById('plus-btn');
let deleteBtn = document.getElementById('delete-btn');
let quantitySpan = document.getElementById('quantity');
let priceSpan = document.getElementById('price');

let quantity = 0;
let price = 0.00;

heartBtn.addEventListener('click', function() {
  heartBtn.classList.toggle('liked');
});

minusBtn.addEventListener('click', function() {
  if (quantity > 0) {
    quantity--;
    quantitySpan.textContent = quantity;
    priceSpan.textContent = '$' + (quantity * 10).toFixed(2);
  }
});

plusBtn.addEventListener('click', function() {
  quantity++;
  quantitySpan.textContent = quantity;
  priceSpan.textContent = '$' + (quantity * 10).toFixed(2);
});

deleteBtn.addEventListener('click', function() {
  quantity = 0;
  quantitySpan.textContent = quantity;
  priceSpan.textContent = '$' + (quantity * 10).toFixed(2);
});