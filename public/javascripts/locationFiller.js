function initialize() {
    var pickup = document.getElementById('pickup');
    var dropoff = document.getElementById('dropoff');
    var auto_pickup = new google.maps.places.Autocomplete(pickup);
    var auto_dropoff = new google.maps.places.Autocomplete(dropoff);

    // google.maps.event.addListener(autocomplete, 'place_changed', function() {

    // })

    // var pickup_address = auto_pickup.getPlace().formatted_address;
    // var dropoff_address = auto_dropoff.getPlace().formatted_address;
    // req.requests.pickup = pickup_address;
    // req.requests.dropoff = dropoff_address;

    // // GEOCODE THAT CONVERTS ADDRESS TO LATLNG
    // // USE LATLNG TO DETERMINE PERIMETER AND VALIDATE IF OTHER PICKUP/DROPOFF LOCATIONS FALL IN THE RANGE OF LATS AND LNGS
    // var geocoder = new Geocoder();
    // var pickupLatLng = geocoder.geocode(pickupAddress);
    // var dropoffLatLng = geocoder.geocode(dropoffAddress);
}