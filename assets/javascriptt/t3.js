let box = document.getElementById('magicBox');

document.addEventListener('keydown', (event) => {
  if (event.key === 'A' && event.key==="K") {
    box.style.display = 'block';
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'A' || event.key==="K") {
    box.style.display = 'none';
  }
})