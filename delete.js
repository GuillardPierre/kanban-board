window.addEventListener("DOMContentLoaded", () => {
// const card = document.getElementsByClassName("card");
// const close = document.getElementById("close");
const card = document.querySelector(".card");
var closeButton = document.createElement("button");
card.appendChild(closeButton);
closeButton.innerHTML="X";
card.addEventListener("click", () => {
     card.remove();
    // card.remove();
  });


// console.log(card.length)
// for (let i = 0; i < card.length; i++) {
    
//     console.log(card.length) 
// }
// card.remove();

});