var greenMarker = 'http://maps.google.com/mapfiles/ms/icons/green.png'
var redMarker = 'http://maps.google.com/mapfiles/ms/icons/red.png'
var orangeMarker = 'http://maps.google.com/mapfiles/ms/icons/orange.png'
var rivers = [
	["Upper Taieri", -45.649560, 170.276538, 1, greenMarker, 'http://rivers.org.nz/nz/otago/taieri/sutton-to-hindon'],
	["Lower Taieri", -45.792323, 170.309228, 2, greenMarker, 'http://rivers.org.nz/nz/otago/taieri/taioma-to-outram'],
	["Leith", -45.864321, 170.514365, 3, redMarker, 'http://rivers.org.nz/nz/otago/leith-stream/leith'],
	["Tekapo Whitewater Course", -44.020199, 170.468593, 4, greenMarker, 'http://rivers.org.nz/nz/canterbury/tekapo/tekapo-whitewater-course']
]

//Define Map Properties
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: {lat: -40.834541, lng: 173.473535}
	});
	setMarkers(map);
}
		
//Add Interactive River Markers to Map
function setMarkers(map){
	
	var shape = {
		coords: [1, 1, 1, 20, 18, 20, 18, 1],
		type: 'poly'
	};
			
	for(var i = 0; i < rivers.length; i++){
		var river = rivers[i];
		var marker  = new google.maps.Marker({	
			position: {lat: river[1], lng: river[2]},
			map: map,
			icon: river[4],
			shape: shape,
			title: river[0],
			zIndex: river[3],
			url: river[5]
		});
		google.maps.event.addListener(marker, 'click', function() {
			window.location.href = this.url;
		});
	}
}