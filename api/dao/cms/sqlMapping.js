// CRUD SQL语句
var cms = {
  // 添加用户
  addUser: 'INSERT INTO vm_user_message (user_id, role_id, username, password) VALUES (?, ?, ?, ?)',
  // 修改密码
  updatePassword: "UPDATE vm_user_message SET password = ? WHERE user_id = ?",
  // 修改权限
  updateRole: "UPDATE vm_user_message SET role_id = ? WHERE user_id = ?",
  // 删除用户
  deleteUser: "DELETE vm_user_message,vm_personal_info FROM vm_user_message,vm_personal_info WHERE vm_user_message.user_id = vm_personal_info.user_id and vm_user_message.user_id = ?"
}

module.exports = cms
