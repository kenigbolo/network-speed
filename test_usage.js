const NetworkSpeed = require('./dist/module.js');
var testNetworkSpeed = new NetworkSpeed();

getNetworkDownloadSpeed();

async function getNetworkDownloadSpeed() {
  var baseUrl = 'http://eu.httpbin.org/stream-bytes/50000000';
  var fileSize = 500000;
  var speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSize);
  console.log(speed);
}

getNetworkUploadSpeed();

async function getNetworkUploadSpeed() {
  var options = {
    hostname: 'www.postcatcher.in',
    port: 80,
    path: '/catchers/544b09b4599c1d0200000289',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
  };
  var speed = await testNetworkSpeed.checkUploadSpeed(options);
  console.log(speed);
}
