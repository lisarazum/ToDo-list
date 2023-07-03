const inputTodo = document.querySelector('.todo__input')
const btnTodo = document.querySelector('.todo__add')
const blockTodo = document.querySelector('.todo__list')

btnTodo.addEventListener('click', (e) => {
  if (!inputTodo.value) {
    alert('INSERT')
  } else {
    createTask()
  }

  inputTodo.value = ''
  saveData()
})

function createTask() {
  let itemTodo = document.createElement('li')
    itemTodo.classList.add('todo__item')
    itemTodo.innerHTML = `${inputTodo.value}`
    blockTodo.appendChild(itemTodo)
  let checkTodo = document.createElement('span')
    checkTodo.classList.add('todo__check')
    itemTodo.appendChild(checkTodo)
  let closeTodo = document.createElement('span')
    closeTodo.classList.add('todo__done')
    itemTodo.appendChild(closeTodo)
}

blockTodo.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked')
    saveData()
  } else if (e.target.classList.contains('todo__check')) {
    e.target.parentElement.classList.toggle('checked')
    saveData()
  } else if (e.target.classList.contains('todo__done')) {
    e.target.parentElement.remove()
    saveData()
  }
}, false)

function saveData() {
  localStorage.setItem('data', blockTodo.innerHTML)
}

function showData() {
  blockTodo.innerHTML = localStorage.getItem('data')
}

showData()