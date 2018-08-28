const express = require('express')
const APICacheProxy = require('node-api-cache-proxy')
const path = require('path')

export default class WebServer {
  constructor() {
    this.app = express()
    this.apiCacheProxy = new APICacheProxy({
      cacheEnabled: false,
      apiUrl: 'http://192.168.2.198/',
      cacheDir: 'cache-api/',
	    localURLReplace: function(url) {
        console.log('urL', url)
		    return url.replace('/api/', '/')
	    }
    });
    this.app.use(express.static(__dirname + '/public'))
    this.app.use('/api', this.apiCacheProxy)
  }

  start() {
    return new Promise((resolve, reject) => {
      try {
        this.server = this.app.listen(3000, () => {
          resolve()
        })
      } catch (e) {
        console.error(e)
        reject(e)
      }
    })
  }

  stop() {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve()
        })
      } catch (e) {
        console.error(e)
        reject(e)
      }
    });
  }
}
