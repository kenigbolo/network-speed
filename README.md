# DEVELOPERS GUIDE

[![Build Status](https://travis-ci.org/kenigbolo/network-speed.png)](https://travis-ci.org/kenigbolo/network-speed)

## Getting Started

- Clone the application with
  `git clone https://github.com/kenigbolo/network-speed.git` or use ssh
  `git clone git@github.com:kenigbolo/network-speed.git`.

## Dependencies

- NPM 6.6

## Description

Basic Javascript Module used to check upload and download speed. Contributions
are welcome.

## NPM

This package has been published on
[NPM](https://www.npmjs.com/package/network-speed) and is freely available
according to the MIT license. To install via npm simply run
`npm install network-speed`.

## Functionality

The library exposes two functions

* checkDownloadSpeed
* checkUploadSpeed

### checkDownloadSpeed

The checkDownloadSpeed accepts two arguments:

1. The `baseUrl` - This refers to the url where the file is to be dowloaded from. This field is required to be of type `String`
2. The `fileSizeInBytes` - This refers to the size of the file to be downloaded. The file size is required to be of type `Number` and should always be in `Bytes`.

> The return value is an object which contains the download speed representation in `bits/second(bps)`, `kolibits/second(kbs)` and `megabits/second (mbs)`.

### checkUploadSpeed

The checkUploadSpeed sends a randomly generated `20 kilobytes` data stream to a given server endpoint and uses that to calculate the speed. It accepts only one argument in the form of a JavaScipt object

1. The `options` argument - This refers to the needed arguments in making a http request in node. The signature is as follows
2. The `fileSizeInBytes` - This refers to the size of the file to be uploaded. The file size is required to be of type `Number` and should always be in `Bytes`.

```
const options = {
  // The hostname where the request would be made
  hostname: 'https://your-domain-name',
  // The port of the host
  port: 80,
  // The endpoint available for uploading the data stream
  path: '/speed-checker-upload',
  // The http methos
  method: 'POST',
  headers: {
    // Format being used. Currently we just send a json file stream
    'Content-Type': 'application/json',
  },
};
```

> PS - For optimal results please use your own predefined endpoints defined on your sever for checking the speed as the servers used in this project are simply test servers and could be taken down anytime. Always use the https protocol

## Usage

```javascript
import NetworkSpeed = require('network-speed'); // ES6
const NetworkSpeed = require('network-speed');  // ES5
const testNetworkSpeed = new NetworkSpeed();

getNetworkDownloadSpeed();

async function getNetworkDownloadSpeed() {
  const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
  const fileSizeInBytes = 500000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
  console.log(speed);
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
  const fileSizeInBytes = 2000000
  const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
  console.log(speed);
}
```

## StandAlone

running `npm start` will trigger the test usage file to run and calculate your
upload/download speed using some test servers `See the test usage file`
