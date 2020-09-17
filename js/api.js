
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8
  });
  console.log(map);
}

function validateMyForm() {
  const zipCode = document.getElementById("zipCode").value;
  console.log(zipCode);
}