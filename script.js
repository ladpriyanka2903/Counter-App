let counter = 0

const counterValue = document.getElementById("counter-value")
const incrementBtn = document.getElementById("Increment")
const decrementBtn = document.getElementById("Decrement")
const resetBtn = document.querySelector("#reset")

//to increment
incrementBtn.addEventListener("click", () =>{
    counter++;
    counterValue.innerHTML = counter;
})

//to decrement
decrementBtn.addEventListener("click", () =>{
    counter--;
    counterValue.innerHTML = counter;
})

//to reset
resetBtn.addEventListener("click", reset);

function reset(){
    counter = 0;
    counterValue.innerHTML = counter;
}