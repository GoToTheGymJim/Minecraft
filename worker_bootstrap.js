onmessage = function(o) {
	importScripts("js/classes_server.js");
	eaglercraftServerOpts = o.data;
	main();
};
