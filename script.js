// Your code here.
Sure, I can guide you on how to implement this.

Firstly, you need to add event listeners for the mousedown, mouseleave, mouseup, and mousemove events.

Here's a basic structure of how you can start:

let isDown = false;
let startX;
let scrollLeft;

const slider = document.querySelector('.items');

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

In the above code, mousedown event is used to start the dragging, mouseup and mouseleave events are used to stop the dragging, and mousemove event is used to handle the dragging.

Please replace '.items' with the class or id of your cubes container.