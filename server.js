const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Heroku!")
})

app.listen(5555)
