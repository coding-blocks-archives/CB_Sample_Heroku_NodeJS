const Sequelize = require('sequelize')

let db;

if (process.env.CLEARDB_DATABASE_URL) {
  db = new Sequelize(process.env.CLEARDB_DATABASE_URL)
} else {
  db = new Sequelize({
    host: 'localhost',
    database: 'testdb',
    username: 'testuser',
    password: 'testpass'
  })
}

const Tasks = db.define('tasks', {
  name: Sequelize.STRING
})

module.exports = {
  db, Tasks
}
