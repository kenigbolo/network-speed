declare module "network-speed" {
  type Measures = {
    bps:string
    kbps:string
    mbps:string
  }
  
  type UploadOptions = {
    hostname:string
    port:number
    path:string
    method:string
    headers: {
      [key:string]:string
    }
  }

  class NetworkSpeedCheck {
    /**
    * Function to check download speed
    * @param {String} baseUrl {Required} The url to which the request should be made
    * @param {Number} fileSizeInBytes {Required} The size (in bytes) of the file to be downloaded
    * @returns {Promise<Measures>}
    */
    checkDownloadSpeed:(baseUrl:string, fileSizeInBytes:number) => Promise<Measures>
    /**
    * Function to check upload speed
    * @param {UploadOptions} options {Required} Upload options to test with
    * @param {Number} fileSizeInBytes {Optional} The size (in bytes) of the file to be downloaded
    * @returns {Promise<Measures>}
    */
    checkUploadSpeed:(options:UploadOptions, fileSizeInBytes?:number) => Promise<Measures>
  }

  export = NetworkSpeedCheck
}
