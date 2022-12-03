//initialize and set variables
//the oly variables that changes is myLeads, others are constant variables

let myLeads = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")

/*
The input button, when clicked, will
add input's value to myLeads, set the value in local storage,
then render the list of lead
*/ 
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl = ""
    //set the key, value pair in local storage and stringify
    //myLeads so it can be added with the setItem method
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myleads) 
})

/*
the delete button, when double clicked, clears out items
 in the local storage, set the list empty and then render
 it out (nothing)
*/

deleteBtn.addEventListener("dblclick", function (){
    //clear local storage and clear out myLeads array
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

/*
the tab button, when clicked, will gets the url from curren't Chrome
tab, set it in the localStorage, then render out the list of leads
*/

tabBtn.addEventListener("click", function(){
    //the function works on Chrome tab, it asks Chrome to query the tab's info
    //the query works on active tab in the current window
    //after query, it pushes the tab's url to myLeads and store it in local storage
    chrome.tab.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

/*
the render functions renders out the list of leads, 
it starts with an empty string, then loop through and 
add the leads items to the string, then set the HTML list
elemnent with those list items
*/


function render(leads) {
    let listItems = ""
    //looping through and add each item in the leads array to the string
    for (let i = 0; i < leads.length; i++) {
        //using string template to better write/read the added HTML elements
        listItems += `
        <li>
            <a target = "_blank" href= "${leads[i]}">
                ${leads[i]}
            </a>
        </li>         `
    }

    //set ulEl's innerHTML as listItems string
    ulEl.innerHTML = listItems
}