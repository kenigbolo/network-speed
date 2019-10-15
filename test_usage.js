const NetworkSpeed = require('./app.js');
const testNetworkSpeed = new NetworkSpeed();

getNetworkDownloadSpeed();

async function getNetworkDownloadSpeed() {
  const baseUrl = 'http://eu.httpbin.org/stream-bytes/50000000';
  const fileSize = 500000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSize);
  console.log(`Download Speed: ${speed}`);
}

getNetworkUploadSpeed();

async function getNetworkUploadSpeed() {
  const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/catchers/544b09b4599c1d0200000289',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const speed = await testNetworkSpeed.checkUploadSpeed(options);
  console.log(`Upload Speed: ${speed}`);
}
