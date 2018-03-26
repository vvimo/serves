var $pool = require('../../pool')
var $sql = require('./sqlMapping')
var $jsonWrite = require('../jsonWrite')
 
module.exports = {
  login: function (req, res, next) {
    var param = req.body
    $pool.query($sql.login, [param.username, param.password], function (results, fields) {
      $jsonWrite(res, results[0])
    })
  },
  // 修改密码
  changePassword: function (req, res, next) {
    var param = req.body
    $pool.query($sql.changePassword, [param.newsPassword, param.userId, param.password], function (results, fields) {
      $jsonWrite(res, results)
    })
  }
}
