//create an array containing the characters used to generate random character
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//get the elements that will display the passwords 
let passwordEl1 = document.getElementById("password1-el")
let passwordEl2 = document.getElementById("password2-el")

/*
This function creates random character from the above array of characters
*/
function getRandomCharacter() {
    //get a random index from 0 - array's length-1
    let randomIndex = Math.floor(Math.random() * characters.length)
    //get a random character
    let randomChar = characters[randomIndex]
    return randomChar
}

/*
This function create two 15-character passwords
*/
function generatePassword() {
    //initialize empty string passwords
    let password1 = " "
    let password2 = " "

    //loop through 15 times to get 15 random characters, then append the character to password1 string
    for (let i = 0; i < 15; i++) {
        let randomChar1 = getRandomCharacter();
        password1 += randomChar1
    }
    
    //loop through 15 times to get 15 random characters, then append the character to password2 string
    for (let i = 0; i < 15; i++) {
        let randomChar2 = getRandomCharacter();
        password2 += randomChar2
    }

    passwordEl1.textContent = password1
    passwordEl2.textContent = password2    
}

