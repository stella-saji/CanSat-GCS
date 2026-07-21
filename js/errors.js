function initializeErrors(){

updateErrorCode();

setInterval(updateErrorCode,3000);

}

function updateErrorCode(){

let descent=Math.random()>0.8?1:0;

let gps=Math.random()>0.85?1:0;

let payload=Math.random()>0.9?1:0;

let parachute=Math.random()>0.95?1:0;

let code=`${descent}${gps}${payload}${parachute}`;

document.getElementById("errorCode").innerHTML=code;

document.getElementById("err1").innerHTML=descent?"🔴":"🟢";

document.getElementById("err2").innerHTML=gps?"🔴":"🟢";

document.getElementById("err3").innerHTML=payload?"🔴":"🟢";

document.getElementById("err4").innerHTML=parachute?"🔴":"🟢";

let message="All Systems Normal";

if(code==="1000")
message="Descent Rate Fault";

else if(code==="0100")
message="GPS Signal Lost";

else if(code==="0010")
message="Payload Separation Failure";

else if(code==="0001")
message="Emergency Parachute Active";

else if(code!=="0000")
message="Multiple Faults Detected";

document.getElementById("errorMessage").innerHTML=message;

}