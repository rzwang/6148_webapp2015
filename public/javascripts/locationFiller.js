// var auto_pickup;
// var auto_dropoff;

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
    

    // // GEOCODE THAT CONVERTS ADDRESS TO LATLNG
    // // USE LATLNG TO DETERMINE PERIMETER AND VALIDATE IF OTHER PICKUP/DROPOFF LOCATIONS FALL IN THE RANGE OF LATS AND LNGS
    // var geocoder = new Geocoder();
    // var pickupLatLng = geocoder.geocode(pickupAddress);
    // var dropoffLatLng = geocoder.geocode(dropoffAddress);
}