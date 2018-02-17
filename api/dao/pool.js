// dao/userDao.js
// 实现与MySQL交互
var mysql = require('mysql')
var db = require('../conf/db')

// 使用连接池，提升性能
var pool  = mysql.createPool(db)

module.exports = pool
