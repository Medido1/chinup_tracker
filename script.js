const myInput = document.getElementById("chinups");
const submitBtn = document.querySelector(".btn");
const currentNumber = document.querySelector(".current_number");
const progressBar = document.querySelector(".bar");
const percentage = document.querySelector(".percentage");
const resetBtn = document.querySelector(".reset");

let totalDone = Number(localStorage.getItem("totalDone")) || 0;
currentNumber.textContent = totalDone;
percentage.textContent = `${totalDone}%`
progressBar.style.width = `${totalDone}%`;

function checkSucess(value) {
  if (value >= 100) {
    alert("congrats!!!");
    return true;
  }
  return false;
}

function fillProgressBar(value) {
  let currentWidth = parseInt(progressBar.style.width) || 0;
  function fillBar() {
    currentWidth += 1;
    progressBar.style.width = `${currentWidth}%`;
    if (currentWidth > value || currentWidth > 100){
      clearInterval(intervalId)
    }
  }
  const intervalId = setInterval(fillBar, 25);
}

function updateCount() {
  if (myInput.value.trim() === ""){
    alert("enter a number dumbass!")
    return;
  }
  let todayInput = Number(myInput.value);
  totalDone = totalDone + todayInput;
  localStorage.setItem("totalDone", totalDone);
  if (checkSucess(totalDone)){
    percentage.textContent = `${totalDone}%`;
    fillProgressBar(totalDone);
    myInput.value = "";
    return ;
  }
  currentNumber.textContent = totalDone;
  percentage.textContent = `${totalDone}%`;
  fillProgressBar(totalDone);
  myInput.value = "";
}

function resetResults() {
  totalDone = 0;
  localStorage.setItem("totalDone", totalDone);
  currentNumber.textContent = totalDone;
  percentage.textContent = `${totalDone}%`;
  progressBar.style.width = 0;
  myInput.value = "";
}

submitBtn.addEventListener("click", updateCount);
resetBtn.addEventListener("click", resetResults);