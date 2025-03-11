const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000
app.use(cors())

const test_data = {
  1: {
    name: "Artem",
    desc: "Создатель этого сайта"
  },
  2: {
    name: "John",
    desc: "Просто тестовый пользователь"
  }
}

app.get('/api/getusers/', (req, res) => {
  res.json(test_data);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
