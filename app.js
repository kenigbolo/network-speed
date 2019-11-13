const http = require('http');
const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+`-=[]{}|;':,./<>?";

class NetworkSpeedCheck {
  /**
   * Function to check download speed
   * @param {String} baseUrl {Required} The url to which the request should be made
   * @param {Number} fileSizeInBytes {Required} The size (in bytes) of the file to be downloaded
   * @returns {Object}
   */
  checkDownloadSpeed(baseUrl, fileSizeInBytes) {
    this.validateDownloadSpeedParams(baseUrl, fileSizeInBytes)
    let startTime;
    return new Promise((resolve, _) => {
      return http.get(baseUrl, response => {
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

  checkUploadSpeed(options) {
    const dataSizeInKb = 20;
    let startTime;
    const data = '{"data": "' + this.generateTestData(20) + '"}';
    return new Promise((resolve, _) => {
      var req = http.request(options, res => {
        res.setEncoding('utf8');
        res.on('data', () => {
          startTime = new Date().getTime();
        });
        res.on('end', () => {
          const endTime = new Date().getTime();
          const duration = (endTime - startTime) / 1000;
          const bitsLoaded = 20 * 8;
          const bps = (bitsLoaded / duration).toFixed(2);
          const kbps = (bps / 1000).toFixed(2);
          const mbps = (kbps / 1000).toFixed(2);
          resolve({ bps, kbps, mbps });
        });
      });
      req.write(data);
      req.end();
    }).catch(error => {
      throw new Error(error);
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
