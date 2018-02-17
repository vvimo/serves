var express = require('express');
var app = express.Router();
var ApiDao = require('../api/dao');

/* login */
app.post('/login/add', function (req, res, next) { ApiDao.loginDao.add(req, res, next) })
app.post('/login/update', function (req, res, next) { ApiDao.loginDao.update(req, res, next) })
app.post('/login/delete', function (req, res, next) { ApiDao.loginDao.delete(req, res, next) })
app.post('/login/login', function (req, res, next) { ApiDao.loginDao.queryByUserName(req, res, next) })

/* user */
app.post('/user/add', function (req, res, next) { ApiDao.userDao.add(req, res, next) })
app.post('/user/update', function (req, res, next) { ApiDao.userDao.update(req, res, next) })
app.post('/user/delete', function (req, res, next) { ApiDao.userDao.delete(req, res, next) })
app.post('/user/queryById', function (req, res, next) { ApiDao.userDao.queryById(req, res, next) })
app.post('/user/queryAll', function (req, res, next) { ApiDao.userDao.queryAll(req, res, next) })

/* article */
app.post('/article/add', function (req, res, next) { ApiDao.articleDao.add(req, res, next) })
app.post('/article/update', function (req, res, next) { ApiDao.articleDao.update(req, res, next) })
app.post('/article/updateRead', function (req, res, next) { ApiDao.articleDao.updateRead(req, res, next) })
app.post('/article/updateState', function (req, res, next) { ApiDao.articleDao.updateState(req, res, next) })
app.post('/article/delete', function (req, res, next) { ApiDao.articleDao.delete(req, res, next) })
app.post('/article/queryById', function (req, res, next) { ApiDao.articleDao.queryById(req, res, next) })
app.post('/article/queryAll', function (req, res, next) { ApiDao.articleDao.queryAll(req, res, next) })

/* card */
app.post('/card/add', function (req, res, next) { ApiDao.cardDao.add(req, res, next) })
app.post('/card/info', function (req, res, next) { ApiDao.cardDao.queryByCard(req, res, next) })

/* qiniu */
app.post('/qiniu/upload', function (req, res, next) { ApiDao.qiniuDao.upload(req, res, next) })
app.post('/qiniu/getToken', function (req, res, next) { ApiDao.qiniuDao.getToken(req, res, next) })

module.exports = app;
