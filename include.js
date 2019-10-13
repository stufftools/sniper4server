var apikey = "apikeylongkey";
$.getScript( "https://sniper.adminconsole.app/steam-sync.js", function( data, textStatus, jqxhr ) {
init(apikey);
  console.log( data ); // Data returned
  console.log( textStatus ); // Success
  console.log( jqxhr.status ); // 200
  console.log( "Load was performed." );
});
