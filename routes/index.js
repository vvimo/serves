var express = require('express')
var app = express.Router()
var ApiDao = require('../api/dao')

/* login */
app.post('/login', function (req, res, next) { ApiDao.login.login(req, res, next) })
app.post('/password', function (req, res, next) { ApiDao.changePassword.login(req, res, next) })

/* user */
app.post('/user/findUsers', function (req, res, next) { ApiDao.user.byRoleFindUserInfo(req, res, next) }) // 查询所有用户
app.post('/user/findUserInfo', function (req, res, next) { ApiDao.user.findUserInfo(req, res, next) }) // 查询个人信息
app.post('/user/addUser', function (req, res, next) { ApiDao.user.addUser(req, res, next) }) // 添加用户
app.post('/user/updateUserInfo', function (req, res, next) { ApiDao.user.updateUserInfo(req, res, next) }) // 修改个人信息

/* dict */
app.post('/dict/findDict', function (req, res, next) { ApiDao.dict.findDict(req, res, next) }) // 查询字典
app.post('/dict/addDict', function (req, res, next) { ApiDao.dict.addDict(req, res, next) }) // 添加字典
app.post('/dict/updateDict', function (req, res, next) { ApiDao.dict.updateDict(req, res, next) }) // 修改字典
app.post('/dict/findDictItem', function (req, res, next) { ApiDao.dict.findDictItem(req, res, next) }) // 查询字典明细
app.post('/dict/addDictItem', function (req, res, next) { ApiDao.dict.addDictItem(req, res, next) }) // 添加字典明细
app.post('/dict/updateDictItem', function (req, res, next) { ApiDao.dict.updateDictItem(req, res, next) }) // 修改字典明细
app.post('/dict/allFindDictItem', function (req, res, next) { ApiDao.dict.allFindDictItem(req, res, next) }) // 查询全部字典明细

module.exports = app
