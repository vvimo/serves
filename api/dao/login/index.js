var $pool = require('../pool')
var $sql = require('./sqlMapping')
var $jsonWrite = require('../jsonWrite')
var crypto = require('crypto')
var $md5 = crypto.createHash('md5')
 
module.exports = {
  add: function (req, res, next) {
    // 获取前台页面传过来的参数
    var param = req.query || req.params

    // 建立连接，向表中插入值
    // 'INSERT INTO user(userName, password) VALUES(?,?)'
    $pool.getConnection(function (err, connection) {
      connection.query($sql.insert, [param.userName, param.password], function (err, result) {
        if (result) {
          result = { code: 200, msg: '新增成功' }
        }

        // 以json形式，把操作结果返回给前台页面
        $jsonWrite(res, result)

        // 释放连接 
        connection.release()
      })
    })
  },
  update: function (req, res, next) {
    var param = req.body

    $pool.getConnection(function (err, connection) {
      if (param.password == null || param.id == null) {
        jsonWrite(res, undefined)
        return
      }

      connection.query($sql.update, [param.password, +param.id], function (err, result) {
        if (result) {
          result = { code: 200, msg: '修改成功' }
        }

        $jsonWrite(res, result)
        connection.release()
      })
    })
  },
  devare: function (req, res, next) {
    var id = +req.query.id

    $pool.getConnection(function (err, connection) {
      connection.query($sql.devare, id, function (err, result) {

        if (result) {
          result = { code: 200, msg: '删除成功' }
        }

        $jsonWrite(res, result)
        connection.release()
      })
    })
  },
  queryByUserName: function (req, res, next) {
    var username = req.query.userName
    var password = req.query.password

    // 为了拼凑正确的sql语句，这里要转下整数
    $pool.getConnection(function(err, connection) {
      connection.query($sql.queryByUsername, [username, password], function(err, result) {
        if (result) {
          result = {
            code: 200,
            msg: '登录成功',
            data: {
              token: $md5.update(result[0].id).digest('hex')
            }
          }
        }
        $jsonWrite(res, result)
        connection.release()
      })
    })
  }
}
