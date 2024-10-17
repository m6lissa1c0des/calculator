const buttons = document.querySelectorAll('button');
const screen = document.querySelectorAll(".screen");
const show = document.getElementById("display");

let calculation = [];
let accCalculation

buttons.forEach(button => button.addEventListener('click', ()=> calculate(button)))
function calculate(button)
{
    const value = button.textContent;
    if(value == "C")
    {
        calculation = [] ;
        show.textContent == ".";
    }
    else if(value == "=")
    {
        show.textContent = eval(accCalculation);
    }
    else
    {
    calculation.push(value);
    accCalculation = calculation.join('');
    show.textContent = accCalculation ; 
    }
    
}

