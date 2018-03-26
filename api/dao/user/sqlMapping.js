// CRUD SQL语句
var user = {
  // 根据角色获取所以用户信息
  byRoleFindUserInfo: 'SELECT * FROM vm_personal_info where user_id in (SELECT user_id FROM vm_user_message WHERE role_id > ?)',
  // 添加用户
  addUser: 'INSERT INTO vm_user_message (role_id, username, password) VALUES (?, ?, ?)',
  // 修改角色
  updateUserRole: 'UPDATE vm_user_message SET role_id = ? WHERE user_id = ?',

  // 查询个人信息
  findUserInfo: 'SELECT address, admin_age, admin_email, admin_id, admin_name, admin_sex, cell_phone, office_phone FROM vm_personal_info WHERE user_id = ?',
  // 添加用户信息
  addUserInfo: 'INSERT INTO vm_personal_info (admin_id, user_id, admin_name, admin_sex, admin_age, admin_email, office_phone, cell_phone, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
  // 修改用户信息
  updateUserInfo: 'UPDATE vm_personal_info SET admin_name = ?, admin_sex = ?, admin_age = ?, admin_email = ?, office_phone = ?, cell_phone = ?, address = ? WHERE admin_id = ?',
  // 删除用户
  deleteUser: 'DELETE vm_user_message,vm_personal_info FROM vm_user_message,vm_personal_info WHERE vm_user_message.user_id = vm_personal_info.user_id AND vm_user_message.user_id = ?',
}

module.exports = user
