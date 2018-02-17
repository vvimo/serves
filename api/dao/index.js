const articleDao = require('./article/index.js')
const cardDao = require('./card/index.js')
const loginDao = require('./login/index.js')
const qiniuDao = require('./qiniu/index.js')
const userDao = require('./user/index.js')

module.exports = {
  articleDao,
  cardDao,
  loginDao,
  qiniuDao,
  userDao
}
