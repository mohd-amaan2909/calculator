const display = document.querySelector(".display");
const button1 = document.querySelectorAll(".button1");
const button2 = document.querySelectorAll(".button2");

 button1.forEach(button1 =>{
    button1.addEventListener("click" , ()=>{
          let val1= button1.innerText;
           console.log( val1);
           display.innerText += (val1);
        });
});
 button2.forEach(button2 =>{
    button2.addEventListener("click" , ()=>{
          let val2= button2.innerText;
           console.log( val2);
           display.innerText += (val2);
        });
});
const num = document.querySelectorAll("#num");
num.addEventListener("click", ()=>{
      let value = num.innerText;
      return value;
})

let numButtons = document.querySelectorAll(".num");

let currentInput = "";
let firstNum = "";
let operator = "";

numButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.innerText;
    display.innerText = currentInput;
  });
});

document.querySelector("#plus").addEventListener("click", () => {
  firstNum = currentInput;
  operator = "+";
  currentInput = "";
});

document.querySelector("#equal").addEventListener("click", () => {
  if (operator === "+") {
    let result = Number(firstNum) + Number(currentInput);
    display.innerText = result;
    currentInput = result.toString(); // store result for chaining
  }
});



