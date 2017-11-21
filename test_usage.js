const NetworkSpeed = require('./app.js');

var baseUrl = 'http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg';
var fileSize = 4995374;
var testNetworkSpeed = new NetworkSpeed(baseUrl, fileSize);

testNetworkSpeed.checkDownloadSpeed(function (result) {
  console.log(result);
});

testNetworkSpeed.checkUploadSpeed(function (result) {
  console.log(result);
});
