const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const overlay = document.getElementById('overlay');
const dialog = document.getElementById('dialog');

openBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
  dialog.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  dialog.style.display = 'none';
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  dialog.style.display = 'none';
});

dialog.addEventListener('click', (event) => {
  event.stopPropagation();
});