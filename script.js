const chinupsInput = document.getElementById("chinups");
const chinupsSubmit = document.querySelector(".btn.chinups");
const chinupsCurrentNumber = document.querySelector(".current_number.chinups");
const chinupsProgressBar = document.querySelector(".bar.chinups");
const chinupsPercentage = document.querySelector(".percentage.chinups");
const chinupsReset = document.querySelector(".reset.chinups");

const pushupsInput = document.getElementById("pushups");
const pushupsSubmit = document.querySelector(".btn.pushups");
const pushupscurrentNumber = document.querySelector(".current_number.pushups");
const pushupsProgressBar = document.querySelector(".bar.pushups");
const pushupsPercentage = document.querySelector(".percentage.pushups");
const pushupsReset = document.querySelector(".reset.pushups");

const gripsInput = document.getElementById("grips");
const gripsSubmit = document.querySelector(".btn.grips");
const gripscurrentNumber = document.querySelector(".current_number.grips");
const gripsProgressBar = document.querySelector(".bar.grips");
const gripsPercentage = document.querySelector(".percentage.grips");
const gripsReset = document.querySelector(".reset.grips");

let chinupsTotal = Number(localStorage.getItem("chinupsTotal")) || 0;
chinupsCurrentNumber.textContent = chinupsTotal;
chinupsPercentage.textContent = `${chinupsTotal}%`
chinupsProgressBar.style.width = `${chinupsTotal}%`;

let pushupsTotal = Number(localStorage.getItem("pushupsTotal")) || 0;
pushupscurrentNumber.textContent = pushupsTotal;
pushupsPercentage.textContent = `${pushupsTotal}%`;
pushupsProgressBar.style.width = `${pushupsTotal}%`;

let gripsTotal = Number(localStorage.getItem("gripsTotal")) || 0;
gripscurrentNumber.textContent = gripsTotal;
gripsPercentage.textContent = `${gripsTotal}%`;
gripsProgressBar.style.width = `${gripsTotal}%`;


function checkSucess(value) {
  if (value >= 100) {
    alert("congrats!!!");
    return true;
  }
  return false;
}

function fillProgressBar(value, bar) {
  let currentWidth = parseInt(bar.style.width) || 0;
  function fillBar() {
    currentWidth += 1;
    bar.style.width = `${currentWidth}%`;
    if (currentWidth > value || currentWidth > 100){
      clearInterval(intervalId)
    }
  }
  const intervalId = setInterval(fillBar, 25);
}

function updateCount(input, type) {
  if (input.value.trim() === ""){
    alert("enter a number dumbass!")
    return;
  }
  if (type === "chinups") {
    updateChinUps();
  }
  if (type === "pushups") {
    updatePushUps();
  }
  if (type === "grips") {
    updategrips();
  }
}

function updateChinUps() {
  let todayInput = Number(chinupsInput.value);
  chinupsTotal = chinupsTotal + todayInput;
  localStorage.setItem("chinupsTotal", chinupsTotal);
  if (checkSucess(chinupsTotal)){
    chinupsPercentage.textContent = `${chinupsTotal}%`;
    fillProgressBar(chinupsTotal, chinupsProgressBar);
    chinupsInput.value = "";
    return ;
  }
  chinupsCurrentNumber.textContent = chinupsTotal;
  chinupsPercentage.textContent = `${chinupsTotal}%`;
  fillProgressBar(chinupsTotal, chinupsProgressBar);
  chinupsInput.value = "";
}

function updatePushUps() {
  let todayInput = Number(pushupsInput.value);
  pushupsTotal = pushupsTotal + todayInput;
  localStorage.setItem("pushupsTotal", pushupsTotal);
  if (checkSucess(pushupsTotal)){
    pushupsPercentage.textContent = `${pushupsTotal}%`;
    fillProgressBar(pushupsTotal, pushupsProgressBar)
    pushupsInput.value = "";
    return;
  }
  pushupscurrentNumber.textContent = pushupsTotal;
  pushupsPercentage.textContent = `${pushupsTotal}%`;
  fillProgressBar(pushupsTotal, pushupsProgressBar);
  pushupsInput.value = "";
}

function updategrips() {
  let todayInput = Number(gripsInput.value);
  gripsTotal = gripsTotal + todayInput;
  localStorage.setItem("gripsTotal", gripsTotal);
  if (checkSucess(gripsTotal)){
    gripsPercentage.textContent = `${gripsTotal}%`;
    fillProgressBar(gripsTotal, gripsProgressBar)
    gripsInput.value = "";
    return;
  }
  gripscurrentNumber.textContent = gripsTotal;
  gripsPercentage.textContent = `${gripsTotal}%`;
  fillProgressBar(gripsTotal, gripsProgressBar);
  gripsInput.value = "";
}

function resetChinups() {
  chinupsTotal = 0;
  localStorage.setItem("chinupsTotal", chinupsTotal);
  chinupsCurrentNumber.textContent = chinupsTotal;
  chinupsPercentage.textContent = `${chinupsTotal}%`;
  chinupsProgressBar.style.width = 0;
  chinupsInput.value = "";
};

function resetPushups() {
  pushupsTotal = 0;
  localStorage.setItem("pushupsTotal", pushupsTotal);
  pushupscurrentNumber.textContent = pushupsTotal;
  pushupsPercentage.textContent = `${pushupsTotal}%`;
  pushupsProgressBar.style.width = 0;
  pushupsInput.value = "";
}

function resetgrips() {
  gripsTotal = 0;
  localStorage.setItem("gripsTotal", gripsTotal);
  gripscurrentNumber.textContent = gripsTotal;
  gripsPercentage.textContent = `${gripsTotal}%`;
  gripsProgressBar.style.width = 0;
  gripsInput.value = "";
}

chinupsSubmit.addEventListener("click", () => {
  updateCount(chinupsInput, "chinups");
});
chinupsReset.addEventListener("click", resetChinups);

pushupsSubmit.addEventListener("click", () => {
  updateCount(pushupsInput, "pushups");
})
pushupsReset.addEventListener("click", resetPushups);

gripsSubmit.addEventListener("click", () => {
  updateCount(gripsInput, "grips")
})
gripsReset.addEventListener("click", resetgrips)