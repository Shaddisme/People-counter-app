// intialize count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the count
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

console.log(saveEl);

let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count; 
    console.log(count);
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    console.log(count);
}
