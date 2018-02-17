//七牛云存储
var qiniu = require('qiniu')
var $jsonWrite = require('../jsonWrite')

// 需要填写你的 Access Key 和 Secret Key
var accessKey = 'kZY2r49FJ0dGC3r0XgIHkLfsj1f6jIu39a2sLjW9'
var secretKey = '6bzMHq188W_78iCmNmD-EOS67lN_R-ttdQAN24M8'

// 要上传的空间
const bucket = 'vvimo'
var options = {
  scope: bucket,
}

var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
var putPolicy = new qiniu.rs.PutPolicy(options)
var uploadToken = putPolicy.uploadToken(mac)

var config = new qiniu.conf.Config()
// 空间对应的机房
config.zone = qiniu.zone.Zone_z0


var formUploader = new qiniu.form_up.FormUploader(config)
var putExtra = new qiniu.form_up.PutExtra()

module.exports = {
  upload: function(req, res, next) {
    var param = req.query || req.params
    console.log(param)
    formUploader.putFile(uploadToken, param.key, param.localFile, putExtra, function(respErr, respBody, respInfo) {
      console.log(respErr)
      if (respErr) throw respErr
      if (respInfo.statusCode == 200) {
        $jsonWrite(res, respInfo)
        console.log(respBody)
      } else {
        console.log(respInfo.statusCode)
        console.log(respBody)
      }
    })
  },
  getToken: function () {
    return putPolicy.uploadToken(mac)
  }
}
