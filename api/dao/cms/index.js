var $pool = require('../../pool')
var $sql = require('./sqlMapping')
var $jsonWrite = require('../jsonWrite')
 
module.exports = {
  addUser: function (req, res, next) {
    var param = req.query || req.params
    $pool.query($sql.addUser, [param, param, param, param], function (results, fields) {
      $jsonWrite(res, results)
    })
  },
  updatePassword: function (req, res, next) {
    var param = req.query || req.params
    $pool.query($sql.updatePassword, [param, param, param, param], function (results, fields) {
      $jsonWrite(res, results)
    })
  },
  updateRole: function (req, res, next) {
    var param = req.query || req.params
    $pool.query($sql.updateRole, [param, param, param, param], function (results, fields) {
      $jsonWrite(res, results)
    })
  },
  deleteUser: function (req, res, next) {
    var param = req.query || req.params
    $pool.query($sql.deleteUser, [param, param, param, param], function (results, fields) {
      $jsonWrite(res, results)
    })
  }
}
