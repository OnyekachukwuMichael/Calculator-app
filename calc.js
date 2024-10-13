console.log("hello world");

function show(num){
  const display = document.getElementById("display");
   display.innerHTML += num;
}

function clearDisplay(){
  display.innerHTML = "";
}

function calculate(){
  display.innerHTML = eval(display.innerHTML);
}
