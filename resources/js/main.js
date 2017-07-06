var greenMarker = 'http://maps.google.com/mapfiles/ms/icons/green.png'
var redMarker = 'http://maps.google.com/mapfiles/ms/icons/red.png'
var orangeMarker = 'http://maps.google.com/mapfiles/ms/icons/orange.png'

// River information
var rivers = [
	["Upper Taieri", -45.649560, 170.276538, 1, greenMarker, 'http://rivers.org.nz/nz/otago/taieri/sutton-to-hindon'],
	["Lower Taieri", -45.792323, 170.309228, 2, greenMarker, 'http://rivers.org.nz/nz/otago/taieri/taioma-to-outram'],
	["Leith", -45.864321, 170.514365, 3, redMarker, 'http://rivers.org.nz/nz/otago/leith-stream/leith'],
	["Upper Hawea", -44.637029, 169.248425, 4, greenMarker, 'http://rivers.org.nz/nz/otago/hawea/control-gates-to-camp-hill-road'],
	["Hawea Whitewater Park", -44.649563, 169.245387, 5, greenMarker, 'http://rivers.org.nz/nz/otago/hawea/hawea-whitewater-park'],
	["Lower Hawea", -44.667902, 169.226727, 6, greenMarker, 'http://rivers.org.nz/nz/otago/hawea/camp-hill-road-to-albert-town'],
	["Roaring Meg", -45.001828, 169.070665, 7, greenMarker, 'http://rivers.org.nz/nz/otago/kawarau/roaring-meg'],
	["Dogleg", -45.017332, 168.952476, 8, greenMarker, 'http://rivers.org.nz/nz/otago/kawarau/dogleg'],
	["Nevis Bluff", -45.036366, 169.002423, 9, greenMarker, 'http://rivers.org.nz/nz/otago/kawarau/nevis-bluff'],
	["Citroen", -45.054224, 169.047425, 10, greenMarker, 'http://rivers.org.nz/nz/otago/kawarau/citro%C3%ABn'],
	["Lee Stream", -45.797872, 170.227388, 11, redMarker, 'http://rivers.org.nz/nz/otago/lee-stream/lee-stream'],
	["Manuherikia", -45.130542, 169.556783, 12, redMarker, 'http://rivers.org.nz/nz/otago/manuherikia/ophir-bridge-to-keddell-road'],
	["Matukituki", -44.506098, 168.728064, 13, greenMarker, 'http://rivers.org.nz/nz/otago/matukituki/rob-roy-stream-to-raspberry-creek'],
	["Nevis River", -45.079093, 169.023634, 14, redMarker, 'http://rivers.org.nz/nz/otago/nevis/nevis-crossing-to-kawarau-river'],
	["Lower Shotover", -44.962026, 168.650360, 15, greenMarker, 'http://rivers.org.nz/nz/otago/shotover/deep-creek-to-edith-cavell-bridge'],
	["Middle Shotover", -44.879175, 168.676419, 16, greenMarker, 'http://rivers.org.nz/nz/otago/shotover/macleods-to-skippers-bridge'],
	["Lower Waipori", -45.929381, 170.041661, 17, redMarker, 'http://rivers.org.nz/nz/otago/waipori']
]

// Define Map Properties
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: {lat: -40.834541, lng: 173.473535},
		draggableCursor: 'auto',
		draggingCursor: 'crosshair'
	});
	setMarkers(map);
}
		
// Add Interactive River Markers to Map
function setMarkers(map){
	
	var shape = {
		coords: [1, 1, 1, 20, 18, 20, 18, 1],
		type: 'poly'
	};
			
	for(var i = 0; i < rivers.length; i++){
		
		// places markers
		var river = rivers[i];
		var marker  = new google.maps.Marker({	
			position: {lat: river[1], lng: river[2]},
			map: map,
			icon: river[4],
			shape: shape,
			zIndex: river[3],
			url: river[5],
		});
		
		// Opens marker tooltip on mouseover
		var content = river[0];
		var infowindow = new google.maps.InfoWindow();
		google.maps.event.addListener(marker, 'mouseover', (function(marker ,content ,infowindow){ 
			return function() {
				infowindow.setContent(content);
				infowindow.open(map, marker);
			};
		})(marker, content, infowindow));
		
		
		// Closes marker tooltip on mouseout
		google.maps.event.addListener(marker, 'mouseout', (function(marker, infowindow){ 
			return function() {
				infowindow.close()
			};
		})(marker, infowindow));
			
			
		// Hyperlink to rivers.org.nz on click
		google.maps.event.addListener(marker, 'click', function() {
			window.location.href = this.url;
		});
	}
}