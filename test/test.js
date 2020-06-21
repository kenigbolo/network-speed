process.env.NODE_ENV = 'test';

let NetworkSpeed = require('../app');
let expect = require('chai').expect;
const testNetworkSpeed = new NetworkSpeed();

describe('HTTPS Network Download Speed', () => {
  it('HTTPS it should recieve a key value pair for bps, kbps and mbps', done => {
    async function getNetworkDownloadSpeed() {
      const baseUrl = 'https://eu.httpbin.org/stream-bytes/50000000';
      const fileSize = 500000;
      try {
        const speed = await testNetworkSpeed.checkDownloadSpeed(
          baseUrl,
          fileSize,
        );
        expect(speed).to.include.all.keys('bps', 'kbps', 'mbps');
        done();
      } catch (err)  {
        console.error(err)
        done(err)
      }
    }
    getNetworkDownloadSpeed()
  });
});

describe('HTTP Network Download Speed', () => {
  it('HTTP it should recieve a key value pair for bps, kbps and mbps', done => {
    getNetworkDownloadSpeed();
    async function getNetworkDownloadSpeed() {
      const baseUrl = 'http://eu.httpbin.org/stream-bytes/50000000';
      const fileSize = 500000;
      const speed = await testNetworkSpeed.checkDownloadSpeed(
        baseUrl,
        fileSize,
      );
      expect(speed).to.include.all.keys('bps', 'kbps', 'mbps');
    }
    done();
  });
});

describe('Network Upload Speed', () => {
  it('it should recieve an in progress string', done => {
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
      expect(speed).to.include.all.keys('bps', 'kbps', 'mbps');
      return speed;
    }
    done();
  });
});
