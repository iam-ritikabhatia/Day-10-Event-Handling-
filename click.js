let button = document.getElementById("myButton");
let paragraph = document.getElementById("myParagraph");

button.addEventListener('click', function(){
    paragraph.textContent = "text has been changed";
});