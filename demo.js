// Demo Script
//

// Execute the console command Game.Info every 5 seconds:
setInterval(
	function(){
		Console.SendCommand("Game.Info");
	},
	5000
);

// When the response to Game.Info is received, add an info message telling us how many players are connected:
Console.onMessage(
	function(msg){
		if( / players$/.test(msg) ){
			Console.info("There are " + parseInt(msg) + " players connected");
		}
	}
);

// Dump the status update data
var $updateData = $('<pre>').css('white-space', 'pre-wrap');
$('.info').append($updateData);
Asura.onStatusUpdate(
	function(data){
		$updateData.text(JSON.stringify(data, null, '\t'));
	}
);
		
