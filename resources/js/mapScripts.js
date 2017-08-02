var greenMarker = 'resources/images/location-pin-green.png';
var redMarker = 'resources/images/location-pin-red.png';
var orangeMarker = 'resources/images/location-pin-orange.png';

var rivers = [];

// Creates 'river' object and adds object to 'rivers' array
function river(title, lat, lng, marker, url, grade, river, region, /*lowerBound, upperBound, currentFlow*/){
		this.title = title;
		this.lat = lat;
		this.lng = lng;
		this.marker = marker;
		this.url = url;
		this.grade = grade;
		this.river = river;
		this.region = region;
		rivers.push(this);
}

// RIVERS!!  (title, latitude, longitude, marker color, link to rivers.org, grade, river, region)
var upperTaieri = new river("Upper Taieri", -45.649560, 170.276538, greenMarker, 'http://rivers.org.nz/nz/otago/taieri/sutton-to-hindon', 4, 'Taieri', 'Otago');
var lowerTaieri = new river("Lower Taieri", -45.792323, 170.309228, greenMarker, 'http://rivers.org.nz/nz/otago/taieri/taioma-to-outram', 3, 'Taieri', 'Otago');
var leith = new river("Leith", -45.864321, 170.514365, redMarker, 'http://rivers.org.nz/nz/otago/leith-stream/leith', 3, 'Water of the Leith', 'Otago');
var upperHawea = new river("Upper Hawea", -44.637029, 169.248425, redMarker, 'http://rivers.org.nz/nz/otago/hawea/control-gates-to-camp-hill-road', 2, 'Hawea', 'Otago');
var lowerHawea = new river("Lower Hawea", -44.667902, 169.226727, redMarker, 'http://rivers.org.nz/nz/otago/hawea/camp-hill-road-to-albert-town', 2, 'Hawea', 'Otago');
var roaringMeg = new river("Roaring Meg", -45.001828, 169.070665, greenMarker, 'http://rivers.org.nz/nz/otago/kawarau/roaring-meg', 3, 'Kawarau', 'Otago');
var dogleg = new river("Dogleg", -45.017332, 168.952476, greenMarker, 'http://rivers.org.nz/nz/otago/kawarau/dogleg', 3, 'Kawarau', 'Otago');
var nevisBluff = new river("Nevis Bluff", -45.036366, 169.002423, greenMarker, 'http://rivers.org.nz/nz/otago/kawarau/nevis-bluff', 5, 'Kawarau', 'Otago');
var citroen = new river("Citroen", -45.054224, 169.047425, greenMarker, 'http://rivers.org.nz/nz/otago/kawarau/citro%C3%ABn', 4, 'Kawarau', 'Otago');
var leeStream = new river("Lee Stream", -45.797872, 170.227388, redMarker, 'http://rivers.org.nz/nz/otago/lee-stream/lee-stream', 4, 'Lee Stream', 'Otago');
var manuherikia = new river("Manuherikia", -45.130542, 169.556783, redMarker, 'http://rivers.org.nz/nz/otago/manuherikia/ophir-bridge-to-keddell-road', 4, 'Manuherikia', 'Otago');
var matukituki = new river("Matukituki", -44.506098, 168.728064, greenMarker, 'http://rivers.org.nz/nz/otago/matukituki/rob-roy-stream-to-raspberry-creek', 3, 'Matukituki', 'Otago');
var nevisRiver = new river("Nevis River", -45.079093, 169.023634, redMarker, 'http://rivers.org.nz/nz/otago/nevis/nevis-crossing-to-kawarau-river', 5, 'Nevis', 'Otago');
var lowerShotover = new river("Lower Shotover", -44.962026, 168.650360, greenMarker, 'http://rivers.org.nz/nz/otago/shotover/deep-creek-to-edith-cavell-bridge', 4, 'Shotover', 'Otago');
var middleShotover = new river("Middle Shotover", -44.879175, 168.676419, greenMarker, 'http://rivers.org.nz/nz/otago/shotover/macleods-to-skippers-bridge', 2, 'Shotover', 'Otago');
var lowerWaipori = new river("Lower Waipori", -45.929381, 170.041661, redMarker, 'http://rivers.org.nz/nz/otago/waipori', 3, 'Waipori', 'Otago');
var ashleyGorge = new river("Ashley Gorge", -43.205283, 172.141872, redMarker, 'http://rivers.org.nz/nz/canterbury/ashley/ashley-gorge', 3, 'Ashley', 'Canterbury');
var leesValley = new river("Lees Valley to Mid Bridge", -43.153061, 172.203833, redMarker, 'http://rivers.org.nz/nz/canterbury/ashley/lees-valley-to-middle-bridge', 2, 'Ashley', 'Cantebury');
var hawardenGap = new river("Hawarden Gap", -42.790130, 172.533115, greenMarker, 'http://rivers.org.nz/nz/canterbury/hurunui/hawarden-gap', 2, 'Hurinui', 'Cantebury');
var maoriGully = new river("Maori Gully", -42.801585, 172.508586, greenMarker, 'http://rivers.org.nz/nz/canterbury/hurunui/maori-gully', 3, 'Hurinui', 'Cantebury');
var rangitataGorge = new river("Rangitata Gorge", -43.740942, 171.185016, greenMarker, 'http://rivers.org.nz/nz/canterbury/rangitata/rangitata-gorge', 4, 'Rangitata', 'Canterbury');
var lowerRangitata = new river("Lower Rangitata", -43.814450, 171.257814, greenMarker, 'http://rivers.org.nz/node/545', 2, 'Rangitata', 'Cantebury');
var grebe = new river("Grebe", -45.595833, 167.365833, redMarker, 'http://rivers.org.nz/nz/otago/grebe/grebe-river', 3, 'Grebe', 'Southland');
var lowerMararoa = new river("Lower Mararoa", -45.329976, 168.150213, redMarker, 'http://rivers.org.nz/nz/southland/mararoa/south-mavora-lakes-to-kiwi-burn', 3, 'Mararoa', 'Southland');
var tekapo = new river("Tekapo Whitewater Course", -44.019734, 170.468268, orangeMarker, 'http://rivers.org.nz/nz/canterbury/tekapo/tekapo-whitewater-course', 3, 'Tekapo', 'Cantebury');
var lowerMatax = new river("Lower Matakitaki", -41.842487, 172.324616, greenMarker, 'http://rivers.org.nz/nz/tasman/lower-matakitaki', 4, 'Matakitaki', 'Tasman');
var midMatax = new river('Middle Matakitaki', -41.900542, 172.318371, greenMarker, 'http://rivers.org.nz/nz/tasman/matakitaki/middle-matakitaki', 2, 'Matakitaki', 'Tasman');

// Sorts rivers into alphabetical order
function compare(a,b) {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}

rivers.sort(compare);

// Define Map Properties
var map;
function initMap() {
	
	var opt = {
		minZoom: 6,
		maxZoom: 12
	};
	
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: {lat: -40.834541, lng: 173.473535},
		draggableCursor: 'auto',
		streetViewControl: false,
	});
	
	map.setOptions(opt);
	
	setMarkers(map);
	
	// Legend objects
	var icons = {
		flowing: {
			name: 'Flowing',
			icon: greenMarker
		},
		notFlowing: {
			name: 'Not Flowing',
			icon: redMarker
		},
		undetermined: {
			name: 'Undetermined',
			icon: orangeMarker
		}
	};
	
	// Will zoom into geolocation if position permisiion given
	if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
			zoom(pos, false);
		});
	}
	
	// Creates legend
	var legend = document.getElementById('legend');
        for (var key in icons) {
          var type = icons[key];
          var name = type.name;
          var icon = type.icon;
          var div = document.createElement('div');
          div.innerHTML = '<img src="' + icon + '"> ' + name;
          legend.appendChild(div);
        }

        map.controls[google.maps.ControlPosition.LEFT_TOP].push(legend);
}

// Zooms into position
function zoom(pos, fromSearch){
	map.setCenter(pos)
	if(fromSearch){
		map.setZoom(10);
	} else {
		map.setZoom(9);
	}
}
		
// Add Interactive River Markers to Map
function setMarkers(map){
	
	var gZIndex = 50;
	var rZIndex = 0;
	
	var shape = {
		coords: [1, 1, 1, 20, 18, 20, 18, 1],
		type: 'poly'
	};
			
	for(var i = 0; i < rivers.length; i++){
		
		// places markers
		var river = rivers[i];
		var zIndex = 0;
		
		if(river.marker == "greenMarker"){
			zIndex = gZIndex;
			gZIndex++;
		} else {
			zIndex = rZIndex;
			rZIndex++;
		}
		
		var marker = new google.maps.Marker({	
			position: {lat: river.lat, lng: river.lng},
			map: map,
			icon: river.marker,
			shape: shape,
			zIndex: zIndex,
			url: river.url,
		});
		
		// Opens marker tooltip on mouseover
		var content = "<h4>" + river.title + "</h4>";
		content += "<p>Grade " + river.grade + "</p>";
		
		var infowindow = new google.maps.InfoWindow();
		google.maps.event.addListener(marker, 'mouseover', (function(marker ,content ,infowindow){ 
			return function() {
				var zIndex = marker.getZIndex();
				marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
				addInfoWindow(marker, content, zIndex);
			};
		})(marker, content, infowindow));
	}
}

function addInfoWindow(marker, content, zIndex){
	
	// Adds infowindow
	var infowindow = new google.maps.InfoWindow({
		disableAutoPan: true
	});
	
	infowindow.setContent(content);
	infowindow.open(map, marker);
	
	// Closes Infowindow
	google.maps.event.addListener(marker, 'mouseout', (function(marker, infowindow){ 
		return function() {
			infowindow.close()
			marker.setZIndex(zIndex);
		};
	})(marker, infowindow));
	
	// Hyperlink to rivers.org.nz on click
	google.maps.event.addListener(marker, 'click', function() {
		window.location.href = this.url;
	});
}