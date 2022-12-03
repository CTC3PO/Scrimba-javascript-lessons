// intialize the count as 0
let count = 0;

//variable to update h2 heading (id="count-el")
let countEl = document.getElementById("count-el")

//variable to update previous count after hitting save button
let saveEl = document.getElementById("save-el")

// function to increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
function increment() {
    count += 1;
    countEl.textContent = count;
}

//function to update previous count entries
//reset the count = 0 and countEl text display = 0
function save() {
    let saveCount = count + " - " //this is a succession of count (a count entry)
    //render text for saveCount paragraph (p element - previous entries)
    saveEl.textContent += saveCount //concatenating and keep adding previous count entries
    //reset countEl text (h2 element) = 0 after hitting save: 
    countEl.textContent = 0;
    //also reset count (after hitting save) = 0
    count = 0
}



console.log("Let's count people on the subway platform")

