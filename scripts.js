
const scroll = document.getElementById('scroll');
const services = document.querySelector('#services');
const dropDown = document.getElementById('drop-down-list');

services.addEventListener('click', () => {
    dropDown.style.visibility = 'visible';
})


document.addEventListener('click', node => {
    let clickOut = true;

    node.path.forEach(item => {
      if (clickOut === false)
        return;

      if (item.className === 'hover drop-down')
        clickOut = false;
    });

    if (clickOut === true)
    dropDown.style.visibility = 'hidden';
  });


// circle google maps
const citymap = {
    poole: {
        center: { lat: 50.715043, lng: -1.987239},
        population: 160000
    }
};

// google maps api
function initMap() {
    var poole = {lat: 50.715043, lng: -1.987239};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 9, center: poole});

    var marker = new google.maps.Marker({position: poole, map: map});
};

// circle
for (const poole in citymap) {
    const cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map,
        center: citymap[0].center,
        radius: Math.sqrt(citymap[0].population) * 100
    });
}
    



