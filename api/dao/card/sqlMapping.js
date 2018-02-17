// CRUD SQL语句
var card = {
  insert: 'INSERT INTO card (number, name) VALUES (?,?)',
  queryByCard: 'select * from card where number=?'
}

module.exports = card
