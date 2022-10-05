require("./conexion.js")
const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Otros middlwares
app.use(cors())
app.use(require("./routes"))
// Configurando puerto
app.listen(port, () => console.log(`Servidor escuchando en ${port}`));

