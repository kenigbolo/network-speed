# DEVELOPERS GUIDE

[![Build Status](https://travis-ci.org/kenigbolo/network-speed.png)](https://travis-ci.org/kenigbolo/network-speed)

##Getting Started

+ Clone the application with `git clone https://github.com/kenigbolo/network-speed.git` or use ssh  `git clone git@github.com:kenigbolo/network-speed.git`.

##Dependencies

* NPM 6.6

##Description
Basic Javascript Application used to check upload and download speed. Contributions are welcome.

## NPM

This package has been published on [NPM](https://www.npmjs.com/package/network-speed) and is freely available according to the MIT license. To install via npm simply run `npm install network-speed`.

## Usage
```javascript
const NetworkSpeed = require('network-speed');
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
```

## StandAlone

running `npm start` will trigger the test usage file to run and calculate your upload/download speed
`See the test usage file`
