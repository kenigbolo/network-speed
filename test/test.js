process.env.NODE_ENV = 'test';

let NetworkSpeed = require('../app');
let expect = require('chai').expect;
var baseUrl = 'http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg';
var fileSize = 4995374;
var testNetworkSpeed = new NetworkSpeed(baseUrl, fileSize);

describe('Network Download Speed', () => {
    it('it should recieve a key value pair for bps, kbps and mbps', (done) => {
      testNetworkSpeed.checkDownloadSpeed(function (result) {
        console.log(result);
        done();
      });
    });
});

describe('Network Upload Speed', () => {
    it('it should recieve an in progress string', (done) => {
      testNetworkSpeed.checkUploadSpeed(function (result) {
        expect(result).to.deep.equal('In Progress........');
        done();
      });
    });
});
