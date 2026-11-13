
const form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault()

    const error = document.getElementById("error-text")
    ///validation Email
    const userEmail = document.getElementById("userEmail");
    if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(userEmail.value)) {
        error.textContent = "Please Enter Valid Email"
        return
    }
    // validation for age

    const age = document.getElementById("userAge");
    if(age.value < 18 || age.value > 99) {
        error.textContent = "The Age Must be Greater than 18 or less than 99"
        return
    }
    
})