alert("it works");
var userapikey;
function init(apikey) {
	userapikey = apikey;
	
	}


var $updateData = $('<pre>').css('white-space', 'pre-wrap');

$('.info').append($updateData);
Asura.onStatusUpdate(
	function(data){	
		$updateData.text(JSON.stringify(data, null, '\t'));
console.log(data);
	}
);
alert(userapikey);
