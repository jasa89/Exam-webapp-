// server.js
const express = require('express')
const cors = require('cors')
require('dotenv').config()

// routes testi
const testRoutes = require('./routes/testRoutes')
// question route
const questionRoutes = require('./routes/questionRoutes');


const app = express()

app.use(cors())
app.use(express.json())


// routes testi
app.use('/api/test', testRoutes)

// questions 
app.use('/api/questions', questionRoutes)




app.get('/', (req, res) => {
  res.send('Backend is running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
console.log(` Palvelin pyörii osoitteessa http://localhost:${PORT}`);
})


module.exports = app
