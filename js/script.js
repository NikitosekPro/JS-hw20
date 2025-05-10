
// task 1

document.addEventListener('keydown', function(event) {
    const gallery = document.querySelector('.gallery');
    const scrollAmount = 320;

    if (event.key === 'ArrowRight') {
        gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (event.key === 'ArrowLeft') {
        gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
});


// task 2


const input = document.querySelector('#controls input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.getElementById('boxes');

renderBtn.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);
    createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); // Очистити перед створенням нових
    const boxes = [];
    let size = 30;

for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.margin = '5px';
    box.style.backgroundColor = getRandomColor();
    boxes.push(box);
    size += 10;
}

boxesContainer.append(...boxes);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

