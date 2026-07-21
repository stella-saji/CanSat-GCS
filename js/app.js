document.addEventListener("DOMContentLoaded",()=>{

if(typeof initializeTelemetry==="function"){
initializeTelemetry();
}

if(typeof initializeCharts==="function"){
initializeCharts();
}

if(typeof initializeMission==="function"){
initializeMission();
}

if(typeof initializeErrors==="function"){
initializeErrors();
}

if(typeof initializeMap==="function"){
initializeMap();
}

if(typeof initializeOrientation==="function"){
initializeOrientation();
}

if(typeof initializeCamera==="function"){
initializeCamera();
}

});