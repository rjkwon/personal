const corsProxy = require('cors-anywhere');

// Configure the proxy server
const host = '0.0.0.0'; // Change this to your desired host
const port = 8080;     // Change this to your desired port

corsProxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
}).listen(port, host, () => {
  console.log(`CORS Anywhere proxy server is running on ${host}:${port}`);
});
