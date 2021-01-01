const orderSubmitBtn = document.getElementById('order-submit');
let testStr = 'Pedido:\n3 Rol de canela 0.9$\n6 Porcion de torta de Zanahoria 3$\nTotal: 3.9$';

orderSubmitBtn.addEventListener('click', () => {
    window.open(`https://wa.me/584121822719?text=${encodeURIComponent(testStr)}`);
})
