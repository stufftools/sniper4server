var userapikey = "";
function init(apikey) {
	userapikey = apikey;
	
	}

Asura.onStatusUpdate(
	function(data){
	 var statusUpdate = {
           apikey: userapikey,
           timestamp: new Date().getTime(),
          data: data
         };
console.log(statusUpdate);

	}
);

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
	 var eventUpdate = {
           apikey: userapikey,
           timestamp: new Date().getTime(),
          data: msg
         };
console.log(eventUpdate);
	}
);

function getNodeById(id, node){
    var reduce = [].reduce;
    function runner(result, node){
        if(result || !node) return result;
        return node.id === id && node || //is this the proper node?
            runner(null, node.children) || //process this nodes children
            reduce.call(Object(node), runner, result);  //maybe this is some ArrayLike Structure
    }
    return runner(null, node);
}

//var target = getNodeById("52126f7d", objects);
//target.children = children;
