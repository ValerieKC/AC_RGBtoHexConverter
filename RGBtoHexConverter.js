const ConvertButton = document.querySelector("[type=button]");
const rgbCode = document.querySelectorAll(".rgbCode");
const showHexCode = document.querySelector(".showHexCode");

// 將RGB數字轉成Hex碼
function RGBtoHex() {
  let hexCode = "#";
  rgbCode.forEach((code) => {
    hexCode += Number(code.value).toString(16).padStart(2, "0");
  });
  return hexCode;
}

// 讓文字顏色隨著背景色而改變，避免底圖顏色太深導致看不清楚文字的窘境
function changewordcolor() {
  rgbCode.forEach((code) => {
    if (code.value < 100) {
      document.body.style.color = "white";
    } else {
      document.body.style.color = "black";
    }
  });
}

// 檢查使用者是否輸入可轉換的數字，不可輸入文字或空白，若輸入小數則使用parseInt只留下整數位數
function checkValue() {
  let check = true;
  rgbCode.forEach((code) => {
    let codeValue = parseInt(code.value, 10);
    console.log(codeValue);
    if (isNaN(codeValue) != false || codeValue < 0 || codeValue > 255) {
      check = false;
    }
  });
  return check;
}

ConvertButton.addEventListener("click", (event) => {
  if (checkValue()) {
    changewordcolor();
    showHexCode.innerHTML = RGBtoHex();
    document.body.style.backgroundColor = RGBtoHex();
  } else {
    alert("Please enter valid number");
    // 清除之前算過的Hex碼
    showHexCode.innerHTML = "";
    // 清除背景色還原為白色
    document.body.style.backgroundColor = "white";
    // 清除placeholder中的數字
    rgbCode.forEach((event) => {
      event.value = "";
    });
  }
});
