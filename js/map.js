jQuery(function ($) {
    function init_map1() {
        var mylocation = new google.maps.LatLng (-23.4864716,-47.4495972,15);
        var mapOpition = {
            center: mylocation,
            zoom: 16
        };
        var marker = new google.maps.Marker({
            position: mylocation,
            title: "Localização"
        });
        var map = new google.maps.Map (document.getElementById("map1"),mapOptions);
        marker.setMap (map);
    }
    init_map1();
}); 
