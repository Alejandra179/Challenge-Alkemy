require("./db/connection")
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3000;
app.use(express.urlencoded({extended: true}));


app.use(require("./routes/operations.routes"))
// Configurando puerto
app.listen(port, () => console.log(`Server listening in port ${port}`));

