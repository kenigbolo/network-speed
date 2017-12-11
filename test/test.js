process.env.NODE_ENV = 'test';

let NetworkSpeed = require('../app');
let expect = require('chai').expect;
var testNetworkSpeed = new NetworkSpeed();

describe('Network Download Speed', () => {
    it('it should recieve a key value pair for bps, kbps and mbps', (done) => {
      getNetworkDownloadSpeed();
      async function getNetworkDownloadSpeed() {
        var baseUrl = 'http://eu.httpbin.org/stream-bytes/50000000';
        var fileSize = 500000;
        var speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSize);
        expect(speed).to.include.all.keys('bps', 'kbps', 'mbps');
      }
      done();
    });
});

describe('Network Upload Speed', () => {
    it('it should recieve an in progress string', (done) => {
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
        expect(speed).to.include.all.keys('bps', 'kbps', 'mbps');
        return speed;
      }
      done();
    });
});
