var $pool = require('../pool')
var $sql = require('./sqlMapping')
var $jsonWrite = require('../jsonWrite')
 
module.exports = {
  add: function (req, res, next) {
    // 获取前台页面传过来的参数
    var param = req.query || req.params

    // 建立连接，向表中插入值
    // 'INSERT INTO user(userName, password) VALUES(?,?)'
    $pool.getConnection(function (err, connection) {
      connection.query($sql.insert, [param.photo, param.title, param.push, param.sort, param.author, param.profile, param.source, param.type, param.content], function (err, result) {
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
  updateRead: function (req, res, next) {
    var param = req.body

    $pool.getConnection(function (err, connection) {
      if (param.read == null || param.id == null) {
        jsonWrite(res, undefined)
        return
      }

      connection.query($sql.updateRead, [param.read, +param.id], function (err, result) {
        if (result) {
          result = { code: 200, msg: '修改成功' }
        }

        $jsonWrite(res, result)
        connection.release()
      })
    })
  },
  updateState: function (req, res, next) {
    var param = req.body

    $pool.getConnection(function (err, connection) {
      if (param.state == null || param.id == null) {
        jsonWrite(res, undefined)
        return
      }

      connection.query($sql.updateState, [param.state, +param.id], function (err, result) {
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
  queryById: function (req, res, next) {
    var id = +req.query.id; 

    // 为了拼凑正确的sql语句，这里要转下整数
    $pool.getConnection(function(err, connection) {
      connection.query($sql.queryById, id, function(err, result) {
        $jsonWrite(res, result)
        connection.release()
      })
    })
  },
  queryAll: function (req, res, next) {
    var param = req.query || req.params

    var pageSize = parseInt(param.pageSize || 10)
    var pageIndex = parseInt(param.pageIndex || 1)
    var start = (pageIndex - 1) * pageSize
    var results = { code: 200, msg: '查询成功' }

    $pool.getConnection(function (err, connection) {
      connection.query($sql.queryAll, [start, pageSize], function (err, result) {
        if (result) {
          results.total = result[1][0].total
          results.data = result[0]
        }

        $jsonWrite(res, results)
        connection.release()
      })
    })
  }
}
