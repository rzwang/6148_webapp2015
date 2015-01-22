function initialize() {
    var pickup = (document.getElementById('pickup'));
    var dropoff = (document.getElementById('dropoff'));
    auto_pickup = new google.maps.places.Autocomplete(pickup);
    auto_dropoff = new google.maps.places.Autocomplete(dropoff);
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
// function geolocate() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var geolocation = new google.maps.LatLng(
//           position.coords.latitude, position.coords.longitude);
//       var circle = new google.maps.Circle({
//         center: geolocation,
//         radius: position.coords.accuracy
//       });
//       auto_pickup.setBounds(circle.getBounds());
//       auto_dropoff.setBounds(circle.getBounds());
//     });
//   }
// }

$(document).ready(function(){    

    $('#date').pickadate({
        format: 'm/d/yy',
        formatSubmit: 'ddmmyyyy',
        hiddenName: true,
        min: true,
        // klass: {
        //     FOR FORMATTING
        // }
    });
    
    $('#time').pickatime({
        format: 'h:i A',
        formatSubmit: 'HHi',
        hiddenName: true,
        interval: 15,
        // klass: {
        //     FOR FORMATTING
        // }
    });
});