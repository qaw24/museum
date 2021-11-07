// Ripple effect for button BOOK

function rippleEffect(e) {
    const x = e.offsetX;
    const y = e.offsetY;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';

    this.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
}

const buy_button = document.querySelectorAll('.book_button');

buy_button.forEach(button => {
    button.addEventListener('click', rippleEffect)
})
