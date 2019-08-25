var apikey = "apikeylongkey";
$.getScript( "https://stufftools.github.io/sniper4server/sniper4sync.js", function( data, textStatus, jqxhr ) {
init(apikey);
  console.log( data ); // Data returned
  console.log( textStatus ); // Success
  console.log( jqxhr.status ); // 200
  console.log( "Load was performed." );
});
