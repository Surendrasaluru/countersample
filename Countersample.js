let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let previousCounter = counterElement.textContent;
    let updatedCounter = parseInt(previousCounter) + 1;

    counterElement.textContent = updatedCounter;

    if (updatedCounter > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounter < 0) {
        counterElement.style.color = "Red";
    } else {
        counterElement.style.color = "Black";
    }

}

function onDecrement() {
    let previousCounter = counterElement.textContent;
    let updatedCounter = parseInt(previousCounter) - 1;
    console.log(updatedCounter);
    counterElement.textContent = updatedCounter;

    if (updatedCounter > 0) {
        counterElement.style.color = "green";
    } else if (updatedCounter < 0) {
        counterElement.style.color = "Red";
    } else {
        counterElement.style.color = "Black";
    }
}

function onReset() {

    counterElement.textContent = 0;


    counterElement.style.color = "Black";



}