let numClicks = 0; 
console.log(numClicks);  

function addOne() {
    numClicks = numClicks + 1; 
    return numClicks; 
}
 
function buttonClicked() {;

    let buttonDiv = document.getElementById("button-div");

    buttonDiv.innerHTML = "Number of times button clicked: " + addOne(); 
}




























