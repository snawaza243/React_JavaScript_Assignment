import React from 'react'

function AB16_ClickWait() {
    var alertTimerId = 0;
    function colorTimerFun() {
        if (document.getElementById("TimerId").value == "CLICK ME and WAIT") {
            document.getElementById("TimerId").value = "CLICK to STOP TIMER";
            document.getElementById("TimerId").style.color = "Red"
            alertTimerId = setTimeout("preText()", 3000)
        } else {
            document.getElementById("TimerId").style.color = "black"
            document.getElementById("TimerId").value = "CLICK ME and WAIT";
            clearTimeout(alertTimerId);
        }
    }

    function preText() {
        alert("Timer stop");
        document.getElementById("TimerId").value = "CLICK ME and WAIT";
        document.getElementById("TimerId").style.color = "black"
    }
    return (
        <div>
            <input 
            type="button" 
            name="clickMe" 
            id="TimerId" 
            value="CLICK ME and WAIT" 
            onClick={document.getElementById("TimerId").value == "CLICK ME and WAIT"?{colorTimerFun}:{preText}} />
        </div>
    )
}

export default AB16_ClickWait;
