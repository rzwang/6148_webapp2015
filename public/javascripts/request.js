function initialize() {
    var pickup = document.getElementById('pickup');
    var pickup_loc = document.getElementById('pickup_loc');
    var dropoff = document.getElementById('dropoff');
    var dropoff_loc = document.getElementById('dropoff_loc');

    var auto_pickup = new google.maps.places.Autocomplete(pickup);
    var auto_dropoff = new google.maps.places.Autocomplete(dropoff);
    
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
    };

    google.maps.event.addListener(auto_pickup, 'place_changed', function() {
        pickup_loc.value = auto_pickup.getPlace().geometry.location.toString().slice(1,-1);
    });
        
    google.maps.event.addListener(auto_dropoff, 'place_changed', function() {
        dropoff_loc.value = auto_dropoff.getPlace().geometry.location.toString().slice(1,-1);
    });
};

$(document).ready(function(){    

    $('#date').pickadate({
        format: 'm/d/yy',
        formatSubmit: 'mddyyyy',
        min: true,
        hiddenSuffix: '_calc'
        // klass: {
        //     FOR FORMATTING
        // }
    });
    
    $('#time').pickatime({
        format: 'h:i A',
        formatSubmit: 'HHi',
        interval: 15,
        hiddenSuffix: '_calc'
        // klass: {
        //     FOR FORMATTING
        // }
    });
});
