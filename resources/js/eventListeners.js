document.getElementById('searchButton').addEventListener('click', function(){
	zoomOnSearch();
});

document.getElementById('item').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      zoomOnSearch();
    }
});

document.getElementById('titlePage').addEventListener('click', function(){
	window.location.href = 'file:///C:/Users/Fergus/Documents/PaddleSoftware/Development/NZRiverFlows.html';
});

document.getElementById('flowIcon').addEventListener('click', function(){
	window.location.href = 'file:///C:/Users/Fergus/Documents/PaddleSoftware/Development/NZRiverFlows.html';
});

function zoomOnSearch(){
	var searchValue = document.getElementById('item').value;
	if(searchValue) {
		var numberReturned = 0;
		var lt = 0;
		var ln = 0;
		for(var i = 0; i < rivers.length; i++){
			if(rivers[i][0].toLowerCase().indexOf(searchValue.toLowerCase()) !== -1){
				lt = rivers[i][1];
				ln = rivers[i][2];
				numberReturned++;
			}
		}
		if(numberReturned == 1){
			var pos = {
				lat: lt,
				lng: ln
			};
			zoom(pos, true);
		}
	}
};