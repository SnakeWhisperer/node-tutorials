


// Load the http module from node and store the returned instance
// in the http variable.
// NOTE: Add here a description and explanation of this module and why it's so crucial.
var http = require('http');

// Call the http's createServer() method to create a server.
// NOTE: Add an explanation on this method.
//		 It seems to receive a function as argument, which in turn
//		 receives two arguments, one for the request
//		 and one for the response.
// NOTE: What is .listen(8081), actually?
//		 https://www.tutorialspoint.com/nodejs/nodejs_first_application.htm
//		 says it is a method that binds the server instance at port 8081.
//		 However, it needs to be clarified.
http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   // NOTE: What is writeHead()?
   // NOTE: Dig deeper into the HTTP status and the content-type.
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   // NOTE: What is .end(), actually?
   response.end('Hello World\n');

   // NOTE: Why doesn't this do anything with the request?
   //		Maybe it doesn't do anything because it is 'to always return "Hello World".'
   //		It seems to be a fixed response to any request,
   //		but still, it strikes me that it doesn't do anything with the request.
}).listen(8081);

// Console will print the message.
// This message is logged to the console after the server has been created.
// This has nothing to do with the requests and responses;
// it is completely independent from the browser.

// NOTE: Why, when '> node main.js' is run, does it log this message
//		 and stays there as if it was working?
//		 Yes, the server is running, but does .createServer()
//		 entail that it will run constantly until it is stopped by CTR+C
//		 and that terminal instance will be occuppied with it until it happens?
//		 What happens with a deployed application?
console.log('Server running at http://127.0.0.1:8081/');

// NOTE: When visiting http://127.0.0.1:8081/ the console showed
//		 an error saying "The character encoding
//		 of the plain text document was not declared.
//		 The document will render with garbled text in some
//		 browser configurations if the document contains characters
//		 from outside the US-ASCII range. The character encoding
//		 of the file needs to be declared in the transfer protocol
//		 or file needs to use a byte order mark as an encoding signature."
//		 What is this? How is it fixed and how would it affect?
