const NetworkSpeed = require('./app.js');
var testNetworkSpeed = new NetworkSpeed();

getNetworkDownloadSpeed();

async function getNetworkDownloadSpeed() {
  var baseUrl = 'http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg';
  var fileSize = 4995374;
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
