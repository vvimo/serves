var $pool = require('../../pool')
var $sql = require('./sqlMapping')
var $jsonWrite = require('../jsonWrite')
 
module.exports = {
  /* 字典管理 */
  findDict: function (req, res, next) {
    // 查询字典
    $pool.query($sql.findDict, [], function (results, fields) {
      $jsonWrite(res, results)
    })
  },
  addDict: function (req, res, next) {
    // 添加字典
    var param = req.body
    $pool.query($sql.addDict, [param.dict_code, param.dict_name], function (results, fields) {
      $jsonWrite(res, results)
    })
  },
  updateDict: function (req, res, next) {
    // 修改字典
    var param = req.body
    $pool.query($sql.updateDict, [param.dict_name, param.dict_id], function (results, fields) {
      $jsonWrite(res, results)
    })
  },
  findDictItem: function (req, res, next) {
    // 查询字典明细
    var param = req.body
    $pool.query($sql.findDictItem, [param.dict_code], function (results, fields) {
      $jsonWrite(res, results)
    })
  },
  addDictItem: function (req, res, next) {
    // 添加字典明细
    var param = req.body
    $pool.query($sql.addDictItem, [param.dict_code, param.dictItem_code, param.dictItem_name], function (results, fields) {
      $jsonWrite(res, results)
    })
  },
  updateDictItem: function (req, res, next) {
    // 修改字典明细
    var param = req.body
    $pool.query($sql.updateDictItem, [param.dictItem_name, param.dictItem_id], function (results, fields) {
      $jsonWrite(res, results)
    })
  },
  allFindDictItem: function (req, res, next) {
    // 查询全部字典明细
    var param = req.body
    $pool.query($sql.findDict, [], function (results, fields) {
      var treeData = {}
      for (var i = 0; i < results.length; i++) {
        var dictCode = results[i].dict_code
        treeData[dictCode] = []
        $pool.query($sql.findDictItem, [dictCode], function (itemResults, itemFields) {
          treeData[dictCode] = itemResults
        })
      }
      $jsonWrite(res, treeData)
    })
  }
}
