
console.log("Hello world")

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCal');
const pres = document.querySelector('#resul');


function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pres.innerText = "Resultado: " + sumaInputs;
}