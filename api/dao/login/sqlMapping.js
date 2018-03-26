// CRUD SQL语句
var login = {
  // 查询用户
  login: 'SELECT user_id, role_id FROM vm_user_message WHERE username = ? AND password = ?',
  // 修改密码
  changePassword: 'UPDATE vm_user_message SET password = ? WHERE user_id = ? AND password = ?'
}

module.exports = login
