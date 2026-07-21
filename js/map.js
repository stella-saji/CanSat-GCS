let map;
let marker;
let path = [];
let polyline;

function initializeMap(){

    map = L.map('map').setView([12.9141,74.8560],16);

    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution:'© OpenStreetMap'
        }
    ).addTo(map);

    marker=L.marker([12.9141,74.8560]).addTo(map);

    polyline=L.polyline([],{
        color:'lime',
        weight:4
    }).addTo(map);

    setInterval(updateMap,1000);

}

function updateMap(){

    const lat=parseFloat(
        document.getElementById("latitude").innerText
    );

    const lng=parseFloat(
        document.getElementById("longitude").innerText
    );

    marker.setLatLng([lat,lng]);

    path.push([lat,lng]);

    polyline.setLatLngs(path);

    map.panTo([lat,lng],{
        animate:true
    });

}