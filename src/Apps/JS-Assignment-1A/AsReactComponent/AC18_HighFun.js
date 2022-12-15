import React from 'react'

function AC18_HighFun() {
    var a= document.getElementById('num1')
    var b= document.getElementById('num2')
    const Arithmetics = {
        add: (a, b) => {
            return `${a} + ${b} = ${a + b}`;
        },
        subtract: (a, b) => {
            return `${a} - ${b} = ${a - b}`
        },
        multiply: (a, b) => {
            return `${a} * ${b} = ${a * b}`
        },
        division: (a, b) => {
            if (b != 0) return `${a} / ${b} = ${a / b}`;
            return `Cannot Divide by Zero!!!`;
        }
    }
    function addNow(a,b){
        document.getElementById('outputId').innerHTML = Arithmetics.add(a,b)
    }
    return (
        <div>
            <input type="number" id='num1' />
            <input type="number" id='num2' />
<button onClick={addNow}>Add</button>
            <p id='outputId'>{Arithmetics.add(a,b)}</p>


        </div>
    )
}

export default AC18_HighFun
