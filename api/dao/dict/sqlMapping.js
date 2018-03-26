// CRUD SQL语句
var dict = {
  // 查询字典
  findDict: 'SELECT * FROM vm_dict',
  // 添加字典
  addDict: 'INSERT INTO vm_dict (dict_code, dict_name) VALUES (?, ?)',
  // 修改字典
  updateDict: 'UPDATE vm_dict SET dict_name = ? WHERE dict_id = ?',

  // 查询字典明细
  findDictItem: 'SELECT * FROM vm_dict_item WHERE dict_code = ?',
  // 添加字典明细
  updateDictItem: 'INSERT INTO vm_dict_item (dict_code, dictItem_code, dictItem_name) VALUES (?, ?, ?)',
  // 修改字典明细
  updateDictItem: 'UPDATE vm_dict_item SET dictItem_name = ? WHERE dictItem_id = ?',
}

module.exports = dict
