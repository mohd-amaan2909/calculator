const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button1 , .button2");


buttons.forEach(button =>{
button.addEventListener("click", ()=> {
       const value = button.innerText;

      if(value==="AC"){
        display.innerText="";
      }else if(value==="="){
        try{
          display.innerText = eval(display.innerText);
        }catch{
          display.innerText="error";
        }
      }else{
        display.innerText +=value;
      }
});
});
