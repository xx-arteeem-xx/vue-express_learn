const express = require('express')
const app = express()
const port = 3000

const test_data = {
    1: {
        title: "test",
        desc: "lorem ipsum dolor sit"
    },
    2: {
        title: "test2",
        desc: "lorem ipsum2"
    }
};

app.get('/', (req, res) => {
  res.json(test_data);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
