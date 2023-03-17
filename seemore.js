const seemore = document.querySelector('.more');
const seeless = document.querySelector('.less');
const listItems = document.querySelector('.spc').children;
const listArray = Array.from(listItems);

for (let i = 1; i < listItems.length; i += 1) {
  listArray[i].setAttribute('id', 'tohide');
}

function show() {
  for (let i = 1; i < listItems.length; i += 1) {
    listArray[i].setAttribute('id', 'tohide');
  }
  seemore.style.display = 'flex';
  seeless.style.display = 'none';
}

function hide() {
  for (let i = 1; i < listItems.length; i += 1) {
    listArray[i].toggleAttribute('id');
  }
  seemore.style.display = 'none';
  seeless.style.display = 'flex';
}

seemore.addEventListener('click', hide);
seeless.addEventListener('click', show);
