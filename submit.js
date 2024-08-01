let form = document.getElementById("myForm");
form.addEventListener('submit', function(event){
    event.preventDefault();
    let formData = new FormData(form);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
});