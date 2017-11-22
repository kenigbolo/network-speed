var http = require('http');

var NetworkSpeedCheck = function() {};

NetworkSpeedCheck.prototype.checkDownloadSpeed = function(url, fileSize) {
  var startTime;
  var speedData;
  var baseUrl = url;
  var downloadSize = fileSize;
  return new Promise(function(resolve, reject) {
    return http.get(baseUrl, function(response) {
      response.once('data', function(data) {
        startTime = new Date().getTime();
      });

      response.once('end', function() {
        var endTime = new Date().getTime();
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        speedData = {bps: speedBps, kbps: speedKbps, mbps: speedMbps};
        resolve(speedData);
      });
    });
  })
  .catch(function(error) {
    throw new Error (error);
  });
};

NetworkSpeedCheck.prototype.checkUploadSpeed = function(options) {
  var startTime;
  var speedData;
  var data = '{"data": "' + this.generateTestData(20) + '"}';
  return new Promise(function(resolve, reject) {
    var req = http.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (body) {
        startTime = new Date().getTime();
      });
      res.on('end', function() {
        var endTime = new Date().getTime();
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = 20 * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        speedData = {bps: speedBps, kbps: speedKbps, mbps: speedMbps};
        resolve(speedData);
      });
    });
    req.write(data);
    req.end();
  })
  .catch(function(error) {
    throw new Error (error);
  });
};

NetworkSpeedCheck.prototype.generateTestData = function(sizeInKmb) {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+`-=[]\{}|;':,./<>?";
  var iterations = sizeInKmb * 1024; //get byte count
  var result = '';
  for( var index = 0; index < iterations; index++ ) {
      result += chars.charAt( Math.floor( Math.random() * chars.length ) );
  }
  return result;
};

module.exports = NetworkSpeedCheck;
