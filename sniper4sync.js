var userapikey = "";
function init(apikey) {
	userapikey = apikey;
	
	}

var $updateData = $('<pre>').css('white-space', 'pre-wrap');

$('.info').append($updateData);
Asura.onStatusUpdate(
	function(data){	
		//$updateData.text(JSON.stringify(data, null, '\t'));
		//console.log(JSON.stringify(data, null, '\t'));
console.log(data);
	}
);
console.log(userapikey);
// Execute the console command Game.Info every 5 seconds:
//setInterval(
//	function(){
//		Console.SendCommand("Game.Info");
//	},
//	5000
//);

// When the response to Game.Info is received, add an info message telling us how many players are connected:
Console.onMessage(
	function(msg){
		if( / players$/.test(msg) ){
			Console.info("There are remotely " + parseInt(msg) + " players connected");
		}
               if (msg.charAt(0) == "") {
	          //upload to server
console.log(msg)
              }
//console.log(msg)

	}
);
