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


