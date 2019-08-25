var userapikey = "";
function init(apikey) {
	userapikey = apikey;
	
	}
function statusupdate(data)
{
//data["apikey"] = userapikey;
var statusUpdate = {
    apikey: userapikey,
    timestamp: new Date().getTime(),
    data: data
};
console.log(statusUpdate);	
	
}

Asura.onStatusUpdate(
	function(data){
		statusupdate(data);
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
console.log(msg);
              }
//console.log(msg);

	}
);
