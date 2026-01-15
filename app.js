// Q1
function showAlert() {
  alert("Q1: Link was clicked!");
}

// Q2
function buyPhone(model) {
  alert("Thanks for purchasing a phone from us: " + model);
}
// Q3
function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// Q4
function changeImage(img) {
  img.src = "nature2.jpg";
}

function resetImage(img) {
  img.src = "nature1.jpg";
}

// Q5
var counterValue = 0;

var counterDisplay = document.getElementById("counterDisplay");

var increaseBtn = document.getElementById("increaseBtn");
var decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", function() {
    counterValue++;
    counterDisplay.innerText = counterValue;
});

decreaseBtn.addEventListener("click", function() {
    counterValue--;
    counterDisplay.innerText = counterValue;
});
