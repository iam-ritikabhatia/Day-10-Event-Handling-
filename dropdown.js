let selectElement = document.getElementById("mySelect");
let displayPagagraph = document.getElementById("displayparagraph");
selectElement.addEventListener('change', function(){
    let selectedValue = selectElement.value;
displayPagagraph.textContent = 'Selected value:  ' + selectedValue; 
});