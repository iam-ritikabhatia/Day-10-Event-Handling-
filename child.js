let list = document.getElementById('myList');
list.addEventListener('click', function(event){
    if (event.target && event.target.nodeName === 'LI') {
        console.log('Clicked item text:', event.target.textContent);
    }
});

function addListItem() {
    let newItem = document.createElement('li');
    newItem.textContent = 'Item ${list.children.length + 1}';
    list.appendChild(newItem);
}

let addItemButton = document.getElementById('addItemButton');
addItemButton.addEventListener('click', addListItem);