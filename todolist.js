/* 1. Convertir el texto dentro de inputFieldset en una variable para crear mi lista. 
2. Convertir el texto de input fieldset en una lista, que sera la que se mostrara como resultado final.
3. hacer que esta lista aparezca dentro del fieldset llamado toDoContainer.*/ 

let addToButton = document.getElementById('addButton');
let inputFieldset = document.getElementById('toDoInput');
let toDoContainer =  document.getElementById('toDoList');




addToButton.addEventListener('click', function() {
    event.preventDefault
        let toDoStuff = document.createElement('li')
        toDoStuff.innerText = inputFieldset.value; 
        toDoContainer.appendChild(toDoStuff);
    
    const removeButton = document.createElement("button");
            removeButton.setAttribute('value', 'button');
            removeButton.textContent = '-';

            removeButton.addEventListener('click', () => {
                toDoStuff.remove();
            });


    
    toDoStuff.append(removeButton);
});



