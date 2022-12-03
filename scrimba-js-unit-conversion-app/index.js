/*
1 meter = 3.281 feet  | 1 feet = 0.305 meter 
1 liter = 0.264 gallon | 1 gallon = 3.785 liter
1 kilogram = 2.204 pound | 1 pound = 0.454 kilogram 
*/

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204 

let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){

    //initialize all the strings: 
    let stringLength = ""
    let stringVolume = ""
    let stringMass = ""

    stringLength += `
    ${inputEl.value} meters = ${(inputEl.value*3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value*(1/3.281)).toFixed(3)} meters
    `
    stringVolume += `
    ${inputEl.value} liters = ${(inputEl.value*0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value*(1/0.264)).toFixed(3)} liters
    `

    stringMass += `
    ${inputEl.value} kilos = ${(inputEl.value*2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value*(1/2.204)).toFixed(3)} kilos
    `

    lengthEl.textContent = stringLength
    volumeEl.textContent = stringVolume
    massEl.textContent = stringMass

})
