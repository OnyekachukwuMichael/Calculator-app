console.log("hello world");

function show(num){
  const display = document.getElementById("display");
   display.innerHTML += num;
}

function clearDisplay(){
  display.innerHTML = "";
}

function calculate(){
  try{
    display.innerHTML = eval(display.innerHTML);
  } catch(e){
  display.innerHTML = "error";
  }
}

function del(){
  const display = document.getElementById("display");
  
  if(display.innerHTML.length > 1){
    display.innerHTML = display.innerHTML.slice(0, -1);
  } 
  else if(display.innerHTML.length === 1){
    display.innerHTML = "0";
  }
}


/*let screen = display.innerHTML;
console.log(screen);*/


/*
function del(){
let display = document.getElementById("display");
  
  if (display.innerHTML.length>1){
  display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length-1);
  }
}

if (display.includes(".")){
  dot.classList.add('is-depressed');
}
*/


/*
function show(num) {
  let display = document.getElementById('display');
  let reset = false;
  
  if (reset) {
    display.innerHTML = '';
    reset = false;
  }
  display.innerHTML += num;
}

function calculate() {
  try {
    display.innerHTML = eval(display.innerHTML); // Evaluate the expression
    reset = true; // Set flag to reset the display on the next key press
  } catch (error) {
    display.innerHTML = 'Error'; // Handle any calculation errors
    reset = true; // Reset after showing the error
  }
}

function clearDisplay() {
  display.innerHTML = '';
}
*/
