const NetworkSpeed = require('./app.js');

var baseUrl = 'http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg';
var fileSize = 4995374;
var testNetworkSpeed = new NetworkSpeed(baseUrl, fileSize);

getNetworkDownloadSpeed();

async function getNetworkDownloadSpeed() {
  var speed = await testNetworkSpeed.checkDownloadSpeed();
  console.log(speed);
}

getNetworkUploadSpeed();

async function getNetworkUploadSpeed() {
  var speed = await testNetworkSpeed.checkUploadSpeed();
  console.log(speed);
}
