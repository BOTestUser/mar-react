console.log('-index.js-')

//-------------------------------------
// using DOM API
//-------------------------------------


let box = document.querySelector('.alert');
let showBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');
let greetBtn = document.querySelector('.btn-success');

greetBtn.addEventListener('click', e => {
    box.innerHTML = 'hello..'
})
hideBtn.addEventListener('click', e => {
    box.style.display = 'none'
})
showBtn.addEventListener('click', e => {
    box.style.display = ''
})


//-------------------------------------
// using XHR / Fetch API
//-------------------------------------


let todosBtn = document.querySelector('.btn-dark');
todosBtn.addEventListener('click', e => {
    let url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    let promise = fetch(url);
    promise
        .then(response => response.json())
        .then(todos => {
            let arr = todos.map((todo) => {
                return `
                    <li class="list-group-item ${todo.completed ? 'bg-success' : ''}">${todo.id} - ${todo.title} - ${todo.completed}</li>
                `
            })
            document.getElementById('todo-list').innerHTML = arr.join(" ")
        })
})




//-------------------------------------
// Using Time API
//-------------------------------------

setInterval(() => {
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString()
}, 1000);