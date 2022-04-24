const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// TEST API ROUTE FOR DEVELOPMENT ONLY
app.get('/api/test', (req, res) => {
  res.send({ message: 'Is anybody out there?' })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
}

app.listen(port, () => {
  console.log(`app is listening on ${port}`)
})
