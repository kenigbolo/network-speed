const NetworkSpeed = require('./app.js');
const testNetworkSpeed = new NetworkSpeed();

async function getNetworkDownloadSpeed() {
  const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
  const fileSizeInBytes = 500000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
  console.log(`Download Speed: ${JSON.stringify(speed)}`);
}

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
  const fileSizeInBytes = 200000
  const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
  console.log(`Upload Speed: ${JSON.stringify(speed)}`);
}

getNetworkDownloadSpeed();
getNetworkUploadSpeed();
