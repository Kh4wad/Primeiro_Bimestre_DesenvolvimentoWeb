const form = document.getElementById('form');
const lista = document.getElementById('lista');
const input = document.getElementById('tarefa');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    BotaoLista();
});

function BotaoLista(){
    if(input.value.trim() === ''){
        alert('Por favor, Coloque um item na lista.');
        return;
    } else {
        const checkbox = document.createElement('input'); 
        var item = input.value;
        
        const li = document.createElement('li');
        li.textContent = item;
        
        checkbox.type = 'checkbox';
        
        li.appendChild(checkbox);
        lista.appendChild(li);
        
        input.value = '';
    }
}

lista.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }   
});
