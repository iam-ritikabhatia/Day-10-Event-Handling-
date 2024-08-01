let inputField = document.getElementById("myInput");
let displayParagraph = document.getElementById("displayParagraph");
inputField.addEventListener('keyup', function(){
    displayParagraph.textContent = 'current value:' + inputField.value;
});