var http = require('http');

var baseUrl = '';
var downloadSize;
var speedData;

var NetworkSpeedCheck = function(url, fileSize) {
  baseUrl = url;
  downloadSize = fileSize;
};

NetworkSpeedCheck.prototype.checkDownloadSpeed = function() {
  var startTime;
  var speedData;
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
  .catch((error) => {
    throw new Error (error);
  });
};

NetworkSpeedCheck.prototype.checkUploadSpeed = function() {
  return new Promise(function(resolve, reject) {
    var inProgress = 'In Progress........';
    resolve(inProgress);
  })
  .catch((error) => {
    throw new Error (error);
  });
};

module.exports = NetworkSpeedCheck;
