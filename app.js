var http = require('http');

var baseUrl = '';
var downloadSize;

var NetworkSpeed = function(url, fileSize) {
  baseUrl = url;
  downloadSize = fileSize;
};

NetworkSpeed.prototype.checkDownloadSpeed = function(callback) {
  var startTime;
  http.get(baseUrl, function(response) {
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
      callback(speedMbps);
    });
  });
};

NetworkSpeed.prototype.checkUploadSpeed = function(callback) {
  callback("In Progress........");
};

module.exports = NetworkSpeed;
