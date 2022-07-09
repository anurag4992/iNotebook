const connectToMongo=require("./db");
connectToMongo();

const express = require('express')
const app = express()
const cors = require('cors')

const port = 8000

app.use(cors())

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

app.use("/api/notes", require("./routes/notes"))

///////////////////////////////////////////////////
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`iNotebook listening on port ${port}`)
})
