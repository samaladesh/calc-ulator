var display = document.getElementById("calc-operation");
var Sbmtdisplay = document.getElementById("calc-typed")
Sbmtdisplay.value=""
display.value=""
function vbtn(e){
        display.value += e.value;
}

function dlt(){
    display.value=display.value.toString().slice(0,-1)
}

function clr() {
    display.value = "";
    Sbmtdisplay.value="";    
}

function sbmt(){
    Sbmtdisplay.value = parseFloat(eval(display.value))
}
// console.log(Sbmtdisplay.innerHTML);