var $pool = require('../../pool')
var $sql = require('./sqlMapping')
var $jsonWrite = require('../jsonWrite')
 
module.exports = {
  /* 帐号管理 */
  byRoleFindUserInfo: function (req, res, next) {
    // 通过角色获取所以用户信息
    var param = req.body
    $pool.query($sql.byRoleFindUserInfo, [param.role_id], function (results, fields) {
      $jsonWrite(res, results)
    })
  },
  addUser: function (req, res, next) {
    // 添加帐号
    var param = req.body
    $pool.query($sql.addUser, [param.role_id, param.username, param.password], function (results, fields) {
      $jsonWrite(res, results)
    })
  },
  addUserInfo: function (req, res, next) {
    // 添加帐号
    var param = req.body
    $pool.query($sql.addUserInfo, [param.user_id, param.role_id, param.username, param.password], function (results, fields) {
      $jsonWrite(res, results)
    })
  },
  findUserInfo: function (req, res, next) {
    // 查询个人信息
    var param = req.body
    $pool.query($sql.findUserInfo, [param.userId], function (results, fields) {
      $jsonWrite(res, results[0])
    })
  },
  updateUserInfo: function (req, res, next) {
    // 修改帐号信息
    var param = req.body
    $pool.query($sql.updateUserInfo, [param.admin_name, param.admin_sex, param.admin_age, param.admin_email, param.office_phone, param.cell_phone, param.address, param.admin_id], function (results, fields) {
      $jsonWrite(res, results)
    })
  }
}
