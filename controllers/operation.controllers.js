const ctrl = {};
const connection = require("../db/connection");

ctrl.addOperation = (req, res) => {
  const { concept, amount, type_operation, category, date } = req.body;
  const sql = `INSERT INTO operations (concept, amount, date, type_operation,category) 
  VALUES ("${concept}",${amount},"${date}","${type_operation}","${category}")`;

  connection.query(sql, (error, rows) => {
    error
      ? res.status(400).json(error)
      : res.json({ message: "Operation added" });
  });
};

ctrl.getOperationsBytype = (req, res) => {
  const { type_operation } = req.params;

  const sql = `SELECT * FROM operations WHERE  type_operation = "${type_operation}" 
  and leavingDate is NULL;`;

  connection.query(sql, (err, row) => {
    err ? res.status(400).json(err) : res.status(200).json(row);
  });
};
ctrl.getOperations = (req, res) => {
  let sql = "select * from operations WHERE leavingDate is NULL";
  connection.query(sql, (err, row) => {
    err ? res.status(400).json(err) : res.json(row);
  });
};

ctrl.updateOperation = (req, res) => {
  const { concept, amount, category, date } = req.body;
  const { id_operation } = req.params;

  let sql = `UPDATE operations SET concept ="${concept}",amount=${amount},
   category="${category}",date="${date}"  
    WHERE operations.id_operation = ${id_operation}`;
  connection.query(sql, (err, row) => {
    err
      ? res.status(400).json(err)
      : res.json({ message: "Operation updated" });
  });
};

ctrl.deleteOperation = (req, res) => {
  const { id_operation } = req.params;
  let sql = `UPDATE operations SET leavingDate = now() where id_operation = ${id_operation}`;
  connection.query(sql, (err, row) => {
    err
      ? res.status(400).json(err)
      : res.json({ message: "Operation deleted" });
  });
};

ctrl.getOperationsByCategory = (req, res) => {
  const { category } = req.params;

  let sql = `Select * from operations where category="${category}" and leavingDate is NULL ;`;
  connection.query(sql, (err, row) => {
    err ? res.status(400).json(err) : res.json(row);
  });
};
module.exports = ctrl;
