# DEVELOPERS GUIDE

[![Build Status](https://travis-ci.org/kenigbolo/network-speed.png)](https://travis-ci.org/kenigbolo/network-speed)

##Getting Started

+ Clone the application with `git clone https://github.com/kenigbolo/network-speed.git` or use ssh  `git clone git@github.com:kenigbolo/network-speed.git`.

##Dependencies

* NPM 6.6

##Description
Basic Javascript Application used to check upload and download speed. Currently offers calculation for download speed but will offer upload speed possibility soon. Contributions are welcome.

## NPM

This package has been published on [NPM](https://www.npmjs.com/package/network-speed) and is freely available according to the MIT license. To install via npm simply run `npm install network-speed`.

## Usage
```javascript
const NetworkSpeed = require('network-speed');

var baseUrl = 'http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg';
var fileSize = 4995374;
var testNetworkSpeed = new NetworkSpeed(baseUrl, fileSize);

getNetworkDownloadSpeed();

async function getNetworkDownloadSpeed() {
  var speed = await testNetworkSpeed.checkDownloadSpeed();
  console.log(speed);
}

getNetworkUploadSpeed()

async function getNetworkUploadSpeed() {
  var speed = await testNetworkSpeed.checkUploadSpeed();
  console.log(speed);
}
```

## StandAlone

running `npm start` will trigger the test usage file to run and calculate your upload/download speed (download speed available at the moment)
`See the test usage file`
