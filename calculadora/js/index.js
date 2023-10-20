const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () =>{
    if(item.id == "clear"){
      display.innerText = "";
    } else if (item.id == "borrar"){
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "result"){
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "result"){
      display.innerText = "No has escrito";
      setTimeout(()=>(display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  }
})


const darkTema = document.querySelector(".tema-toggler");
const calculador = document.querySelector(".calculadora");
const idarkIcon = document.querySelector(".toggler-icon");

let isDark = true;

darkTema.onclick = () => {
  if(isDark){
    darkTema.classList.remove("active");
    calculador.classList.add("dark");
    idarkIcon.classList.remove("bxs-moon");
    idarkIcon.classList.add("bxs-sun");
    isDark = false;
  } else {
    darkTema.classList.add("active");
    calculador.classList.remove("dark");
    idarkIcon.classList.remove("bxs-sun");
    idarkIcon.classList.add("bxs-moon");
    isDark = true;
  }
}
