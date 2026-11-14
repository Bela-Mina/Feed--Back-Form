    const userText = document.getElementById("userText");
    const max_Chars = 5000;
    const word_Chart = 100;
    const wordCount = document.getElementById("wordCount");
    const count = document.getElementById("chartCount")
    const error = document.getElementById("error-text")

const form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault()

    ///validation Email
    const userEmail = document.getElementById("userEmail");
    if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(userEmail.value)) {
        error.textContent = "Please Enter Valid Email"
        return
    }
    // validation for age

    const age = document.getElementById("userAge");
    const ageValue = Number(age.value)
    if(ageValue < 18 || ageValue > 99) {
        error.textContent = "The Age Must be Greater than 18 or less than 99"
        return
    }
})

userText.addEventListener("input", function() {
    //this is for to count word
    //const countWord = userText.value.trim().split(/\s+/);

    //
    const trimmedText = userText.value.trim()
    let countWord;
    if(trimmedText === "") {
        countWord = [] //this is help us to put empty sapce
    } else {
        countWord = trimmedText.split(/\s+/)
    }
    wordCount.textContent = countWord.length;

    //this for Character 
    const countCharacter = userText.value
    count.textContent = countCharacter.length

    //this is for character
    if(countCharacter.length > max_Chars) {
        error.textContent = "Character limit of 5000 exceeded!"
        //
       userText.value =   userText.value.slice(0, max_Chars)
        count.textContent = max_Chars
    }

    if(countWord.length > word_Chart) {
        error.textContent = "Word limit of 100 exceeded!"
        
        const limitWord = countWord.slice(0, 100);
        const limitText = limitWord.join(" ");

        userText.value = limitText
    }
})



