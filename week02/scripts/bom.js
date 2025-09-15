const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    input.value = '';
    input.focus();
  }
  input.focus();
});

list.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
    input.focus();
  }
});

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    input.value = '';
    input.focus();
  }
  input.focus();
});
