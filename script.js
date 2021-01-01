const modal = document.getElementById('modal');
const modalClose = document.querySelector('.order-builder span');
const modalShowBtn = document.getElementById('build-order');
const orderSubmitBtn = document.getElementById('order-submit');
const qtyDisplay = document.getElementById('qty-display');
const totalDisplay = document.getElementById('total-display');
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');
const rdc = {
    name: 'Rol de Canela',
    price: 0.3,
}
function showModal() {
    modal.style.display = 'block';
}
function hideModal() {
    modal.style.display = 'none';
}
function addTotal() {
    let total = qtyDisplay.value * rdc.price;
    totalDisplay.textContent = `${(Math.round(total * 10) / 10)}$`;
}

function sendOrder() {
    let total = totalDisplay.textContent.slice(0,-1);
    if (total > 0) {
        let message = `Pedido:\n${qtyDisplay.value} ${rdc.name}\nTotal: ${total}$`;
        window.open(`https://wa.me/584121822719?text=${encodeURIComponent(message)}`);
    }
}

modalShowBtn.addEventListener('click', showModal);
modalClose.addEventListener('click', hideModal);
modal.addEventListener('click',(e)=> {
    if(e.target == modal) {
        hideModal();
    }
})
addBtn.addEventListener('click', ()=> {
    qtyDisplay.value++
    addTotal();
})

removeBtn.addEventListener('click', ()=> {
    if(qtyDisplay.value >= 1) {
        qtyDisplay.value--
    }
    addTotal();
})

orderSubmitBtn.addEventListener('click', sendOrder);