const app = require('express')()
const { Tasks, db } = require('./db')
const PORT = process.env.PORT || 5555

app.get('/addtask', async (req, res) => {
  await Tasks.create({ name: req.query.task })
  res.redirect('/tasks')
})

app.get('/tasks', async (req, res) => {
  const tasks =  await Tasks.findAll()
  res.send(tasks.map(t => ` task = ${t.name} \n`))
})

app.get('/', (req, res) => {
  res.send('Hello Heroku!')
})

db.sync().then(() => {
  app.listen(PORT)
})
