// 向前台返回JSON方法的简单封装
const jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '599',
      msg: '服务端操作错误'
    })
  } else {
    res.json({
      code: '200',
      msg: '访问成功',
      data: ret
    })
  }
}

module.exports = jsonWrite
