function initializeMission(){

const output=document.getElementById("commandOutput");

const manual=document.getElementById("manualBtn");

const parachute=document.getElementById("parachuteBtn");

const redundant=document.getElementById("redundantBtn");

manual.addEventListener("click",()=>{

output.innerHTML=
"✅ Manual Payload Separation Executed";

output.style.color="#00ff99";

});

parachute.addEventListener("click",()=>{

output.innerHTML=
"🚨 Emergency Parachute Activated";

output.style.color="#ff4d4d";

});

redundant.addEventListener("click",()=>{

output.innerHTML=
"🛰 Redundant System Activated";

output.style.color="#38bdf8";

});

}