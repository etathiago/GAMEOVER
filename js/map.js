jQuery(function ($) {
    function init_map1() {
        var myLocation = new google.maps.LatLng (-23.4864716,-47.4495972,15);
        var mapOption = {
            center: myLocation,
            zoom: 16
        };
        var marker = new google.maps.Marker({
            position: myLocation,
            title: "Localização"
        });
        var map = new google.maps.Map(document.getElementById("map1"),
            mapOption);
        marker.setMap (map);
    }
    init_map1();
}); 
