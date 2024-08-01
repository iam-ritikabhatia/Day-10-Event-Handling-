let list = document.getElementById("my-List");
list.addEventListener('click', function(event){
if ( event.target && event.target.nodeName === 'LI'){
console.log('Clicked Item Text: ', event.target.textContent);
}
});