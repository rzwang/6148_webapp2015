function initialize() {
    var pickup = document.getElementsByName('pickup');
    var dropoff = document.getElementsByName('dropoff');
    var auto_pickup = new google.maps.places.Autocomplete(pickup);
    var auto_dropoff = new google.maps.places.Autocomplete(dropoff);

    // google.maps.event.addListener(autocomplete, 'place_changed', function() {

    // })

    // var pickupAddress = autopickup.getPlace().formatted_address;
    // var dropoffAddress = autodropoff.getPlace().formatted_address;
    // req.requests.pickup = pickupAddress;
    // req.requests.dropoff = dropoffAddress;

    // // GEOCODE THAT CONVERTS ADDRESS TO LATLNG
    // // USE LATLNG TO DETERMINE PERIMETER AND VALIDATE IF OTHER PICKUP/DROPOFF LOCATIONS FALL IN THE RANGE OF LATS AND LNGS
    // var geocoder = new Geocoder();
    // var pickupLatLng = geocoder.geocode(pickupAddress);
    // var dropoffLatLng = geocoder.geocode(dropoffAddress);
}

// function loadScript() {
//   var script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = 'https://maps.googleapis.com/maps/api/js?libraries=places' + 'callback=initialize';
//   document.body.appendChild(script);
// }

// window.onload = loadScript;