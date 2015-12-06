$(document).ready(function(){
	$.ajax( { 
		url: '//freegeoip.net/json/', 
		type: 'POST', 
		dataType: 'jsonp',
		success: function(location) {
			$('#lat').html(location.latitude);
			$('#lon').html(location.longitude);
			initMap(location.latitude, location.longitude)
			/*
		// example where I update content on the page.
		jQuery('#city').html(location.city);
		jQuery('#region-code').html(location.region_code);
		jQuery('#region-name').html(location.region_name);
		jQuery('#areacode').html(location.areacode);
		jQuery('#ip').html(location.ip);
		jQuery('#zipcode').html(location.zipcode);
		jQuery('#longitude').html(location.longitude);
		jQuery('#latitude').html(location.latitude);
		jQuery('#country-name').html(location.country_name);
		jQuery('#country-code').html(location.country_code);
		*/
		}
	} );

})

function initMap(lt, ln) {
	var ltLn = {lat: lt, lng: ln};

	var map = new google.maps.Map(document.getElementById('map'), {
		center: ltLn,
		zoom: 8
	});

	var marker = new google.maps.Marker({
	    position: ltLn,
	    map: map,
	    title: 'Hello World!'
	});
}