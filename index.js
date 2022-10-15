require("./db/connection");
const express = require("express");
const cors = require("cors");
const app = express();
const routesOperations = require("./routes/operations.routes");
const routesAuth = require("./routes/auth.routes");
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

app.use("/operations", routesOperations);
app.use("/auth", routesAuth);
// Configurando puerto
app.listen(port, () => console.log(`Server listening in port ${port}`));
