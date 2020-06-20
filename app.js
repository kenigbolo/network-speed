const http = require('http');
const https = require('https');
const URL = require('url').URL;

const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+`-=[]{}|;':,./<>?";

class NetworkSpeedCheck {
  /**
   * Function to check download speed
   * @param {String} baseUrl {Required} The url to which the request should be made
   * @param {Number} fileSizeInBytes {Required} The size (in bytes) of the file to be downloaded
   * @returns {Object}
   */

  _protocol (url) {
    var u = new URL(url)
    return u.protocol === 'http:' ? http : https
  }
  checkDownloadSpeed(baseUrl, fileSizeInBytes) {
    this.validateDownloadSpeedParams(baseUrl, fileSizeInBytes)
    let startTime;
    let protocol = this._protocol(baseUrl)
    return new Promise((resolve, _) => {
      return protocol.get(baseUrl, response => {
        response.once('data', () => {
          startTime = new Date().getTime();
        });

        response.once('end', () => {
          const endTime = new Date().getTime();
          const duration = (endTime - startTime) / 1000;
          // Convert bytes into bits by multiplying with 8
          const bitsLoaded = fileSizeInBytes * 8;
          const bps = (bitsLoaded / duration).toFixed(2);
          const kbps = (bps / 1000).toFixed(2);
          const mbps = (kbps / 1000).toFixed(2);
          resolve({ bps, kbps, mbps });
        });
      });
    }).catch(error => {
      throw new Error(error);
    });
  }

  checkUploadSpeed(options, fileSizeInBytes = 2000000) {
    let startTime;
    const defaultData = this.generateTestData(fileSizeInBytes / 1000);
    const data = JSON.stringify({ defaultData });
    return new Promise((resolve, _) => {
      var req = http.request(options, res => {
        res.setEncoding("utf8");
        res.on('data', () => {});
        res.on("end", () => {
          const endTime = new Date().getTime();
          const duration = (endTime - startTime) / 1000;
          const bitsLoaded = fileSizeInBytes * 8;
          const bps = (bitsLoaded / duration).toFixed(2);
          const kbps = (bps / 1000).toFixed(2);
          const mbps = (kbps / 1000).toFixed(2);
          resolve({ bps, kbps, mbps });
        });
      });
      startTime = new Date().getTime();
      req.on('error', error => {
        console.error(error);
      });
      req.write(data)
      req.end()
    }).catch(error => {
      console.log(error);
    });
  }

  validateDownloadSpeedParams(baseUrl, fileSizeInBytes) {
    if (typeof baseUrl !== 'string') {
      throw new Error('baseUrl must be a string')
    }
    if (typeof fileSizeInBytes !== 'number') {
      throw new Error('fileSizeInBytes must be a number')
    }
    return
  }

  generateTestData(sizeInKmb) {
    const iterations = sizeInKmb * 1000; //get byte count
    let result = '';
    for (var index = 0; index < iterations; index++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}

module.exports = NetworkSpeedCheck;
