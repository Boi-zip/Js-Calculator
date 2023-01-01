let txt = document.getElementById('txt')
let txt2 = document.getElementById('txt2')
var element = document.body;
let numbers = txt.value;
let savenum = '';
let loadnum = false
let mode = localStorage.getItem("mode");
 function numberup() {
   numbers = eval(txt.value) }

function savenumb() {
  if (loadnum == false) {
    savenum = numbers
    loadnum = true
  }else if(loadnum == true) {
  txt.value = txt.value + savenum
  }
}
function darkmode() {
 element.style = 'color: white; background-color: black;'
 txt.style = 'color: white; background-color: black;'
 txt2.style = 'color: white; background-color: black;'
 localStorage.setItem("mode", "dark");
}
function lightmode() {
 element.style = 'color: black; background-color: white;'
 txt.style = 'color: black; background-color: white;'
 txt2.style = 'color: black; background-color: white;'
 localStorage.setItem("mode", "");
}
if (mode == "dark") {
 darkmode()
}
function removech() {
if (txt.value.charAt(txt.value.length - 1) == ' ') {
  txt.value = txt.value.substr(0, txt.value.length - 2)
}
else {
  txt.value = txt.value.substr(0, txt.value.length - 1)
}
}
