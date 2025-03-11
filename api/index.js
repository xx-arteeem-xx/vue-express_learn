const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.get('/api/getusers/', (req, res) => {
  res.json(123);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
