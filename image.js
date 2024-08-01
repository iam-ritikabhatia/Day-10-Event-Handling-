let image = document.getElementById("myImage");

image.addEventListener('dblclick', function(){

if ( image.style.display === 'none') {
    image.style.display = 'block';
}
else {
    image.style.display = 'none';
}

});