var greenMarker = 'http://maps.google.com/mapfiles/ms/icons/green.png'
var redMarker = 'http://maps.google.com/mapfiles/ms/icons/red.png'
var orangeMarker = 'http://maps.google.com/mapfiles/ms/icons/orange.png'

var searchIcon = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="446.25px" height="446.25px" viewBox="0 0 446.25 446.25" style="enable-background:new 0 0 446.25 446.25;" xml:space="preserve"><g><g id="search"><path d="M318.75,280.5h-20.4l-7.649-7.65c25.5-28.05,40.8-66.3,40.8-107.1C331.5,73.95,257.55,0,165.75,0S0,73.95,0,165.75 S73.95,331.5,165.75,331.5c40.8,0,79.05-15.3,107.1-40.8l7.65,7.649v20.4L408,446.25L446.25,408L318.75,280.5z M165.75,280.5 C102,280.5,51,229.5,51,165.75S102,51,165.75,51S280.5,102,280.5,165.75S229.5,280.5,165.75,280.5z"/></g></svg>'

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