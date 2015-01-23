function initialize() {
    var pickup = document.getElementById('pickup');
    var dropoff = document.getElementById('dropoff');
    var auto_pickup = new google.maps.places.Autocomplete(pickup);
    var auto_dropoff = new google.maps.places.Autocomplete(dropoff);

    google.maps.event.addListener(auto_pickup, 'place_changed', function() {
        exports.auto_pickup = auto_pickup.getPlace().geometry.location.toString();
    });

    google.maps.event.addListener(auto_dropoff, 'place_changed', function() {
        exports.auto_dropoff = auto_dropoff.getPlace().geometry.location.toString();
    });
    
    // Bias the autocomplete object to the user's geographical location,
    // as supplied by the browser's 'navigator.geolocation' object.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var geolocation = new google.maps.LatLng(
              position.coords.latitude, position.coords.longitude);
          var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
          });
          auto_pickup.setBounds(circle.getBounds());
          auto_dropoff.setBounds(circle.getBounds());
        });
    }
}