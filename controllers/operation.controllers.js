const ctrl = {};
const connection = require("../db/connection");

ctrl.addOperation = (req, res) => {
  const { concept, amount, type_operation, category, date } = req.body;
  const sql = `INSERT INTO operations (concept, amount, date, type_operation,category) VALUES ("${concept}",${amount},"${date}","${type_operation}","${category}")`;

  connection.query(sql, (error, rows) => {
    (error)? res.status(400).json(error): res.json(rows);
  });
};

ctrl.getOperationBytype = (req, res) => {
  const { type_operation } = req.params;
  
  const sql = `SELECT * FROM operations WHERE  type_operation = "${type_operation}";`;

  connection.query(sql, (err, row) => {
    (err)?res.status(400).json(err): res.status(200).json(row);
    
  });
};
ctrl.getOperaciones = (req, res) => {
  let sql = "select * from operaciones";
  connection.query(sql, (err, row) => {
    (err)? res.status(400).json(err):res.json(row);
    
  });
};

module.exports = ctrl;
