

window.addEventListener("DOMContentLoaded", () => {
const card = document.getElementsByClassName("card");
const close = document.getElementById("close");
// const card = document.getElementById("card")
var closeButton = document.createElement("button");
close.appendChild(closeButton);
closeButton.innerHTML="X";
close.addEventListener("click", () => {
     close.parentNode.remove();
    // card.remove();
  });


console.log(card.length)
for (let i = 0; i < card.length; i++) {
    
    console.log(card.length) 
}
// card.remove();

});