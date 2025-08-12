const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button1 , .button2");


buttons.forEach(button =>{
button.addEventListener("click", ()=> {
       const value = button.innerText;
function degToRad(deg) {
        return deg * (Math.PI / 180);
        }

      if(value==="AC"){
        display.innerText="";
      }else if(value==="="){
        try{
          display.innerText = eval(display.innerText);
        }catch{
          display.innerText="error";
        }
      } else if (value === "sin") {
        display.innerText = Math.sin(degToRad(Number(display.innerText)));
      } else if( value ==="cos"){
        display.innerText = Math.cos(degToRad(Number(display.innerText)));
      } else if( value ==="tan"){
        display.innerText = Math.tan(degToRad(Number(display.innerText)));
      } else if( value ==="sinh"){
        display.innerText = Math.sinh(degToRad(Number(display.innerText)));
      } else if( value ==="cosh"){
        display.innerText = Math.cosh(degToRad(Number(display.innerText)));
      } else if( value ==="tanh"){
        display.innerText = Math.tanh(degToRad(Number(display.innerText)));
      } else if( value ==="Rand"){
        display.innerText = Math.random();
      }else if( value ==="π"){
        display.innerText *= Math.PI;
      } else if( value === "Deg"){
        function degToRad(deg) {
        return deg * (Math.PI / 180);
        }
      } else if( value ==="e"){
        display.innerText = Math.E;
      } else if( value === "1/x"){
        let num = parseFloat(display.innerText);
        if(num===0){
          display.innerText = "error";
        }else{
          display.innerText = 1/num;
        }
      } else if( value === "x1/2"){
        let num = parseFloat(display.innerText);
        if(num===0){
          display.innerText = "0";
        } else{
          display.innerText = Math.sqrt(num);
        }
      } else if(value === "x1/3"){
        let num = parseFloat(display.innerText);
        if(num===0){
          display.innerText = "0";
        } else{
          display.innerText = Math.cbrt(num);
        }
      } else if (value === "x1/y"){
       let firstNum = parseFloat(display.innerText);
       operator = root;
       display.innerText = " ";
      }
      else{
        display.innerText +=value;
      }
});
});
