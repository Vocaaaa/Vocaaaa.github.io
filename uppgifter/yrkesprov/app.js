let addBtn = document.getElementById('add');
let subBtn = document.getElementById('sub');
let qty = document.getElementById('qtyBox');

addBtn.addEventListener('click',()=>{
    qty.value = parseInt(qty.value) + 1;
});

subBtn.addEventListener('click',()=>{
    if (qty.value <= -5) {
        qty.value = -5;
    }
    else{
        qty.value = parseInt(qty.value) - 1;
    }
});