const express = require('express')
const cors = require('cors')
require('dotenv').config()

// routes testi
const testRoutes = require('./routes/testRoutes')

const app = express()

app.use(cors())
app.use(express.json())


// routes testi
app.use('/api/test', testRoutes)

app.get('/', (req, res) => {
  res.send('Backend is running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

