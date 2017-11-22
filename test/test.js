process.env.NODE_ENV = 'test';

let NetworkSpeed = require('../app');
let expect = require('chai').expect;
var testNetworkSpeed = new NetworkSpeed();

describe('Network Download Speed', () => {
    it('it should recieve a key value pair for bps, kbps and mbps', (done) => {
      getNetworkDownloadSpeed();
      async function getNetworkDownloadSpeed() {
        var baseUrl = 'http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg';
        var fileSize = 4995374;
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
