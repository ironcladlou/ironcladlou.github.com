var map, heatmap;

function fetchLocations(callback) {
  const endpoint = '/data/locations.json'
  fetch(endpoint)
  .then(blob => blob.json())
  .then(data => callback(data));
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    // Morgantown
    center: { lat: 39.6424173, lng: -79.9400052 },
    mapTypeId: 'roadmap'
  });
  
  fetchLocations(function (locations) {
    var points = []
    for (var loc of locations) {
      var latlng = new google.maps.LatLng(loc.lat, loc.lng);
      points.push(latlng);
      //var marker = new google.maps.Marker({
      //  position: latlng,
      //  map: map,
      //});
      //}
      heatmap = new google.maps.visualization.HeatmapLayer({
        data: points,
        map: map,
        radius: 15,
        opacity: 0.1
      });
    }
  })
}
