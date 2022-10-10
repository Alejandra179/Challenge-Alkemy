const ctrl = {};
const connection = require("../db/connection");

ctrl.addOperation = (req, res) => {
  const { concept, amount, type_operation, category, date, id_user } = req.body;
  const sql = `INSERT INTO operations (concept, amount, date, type_operation,category, id_user) 
  VALUES ("${concept}",${amount},"${date}","${type_operation}","${category}",${id_user})`;

  connection.query(sql, (error, rows) => {
    error
      ? res.status(400).json(error)
      : res.json({ message: "Aggregated operation" });
  });
};

ctrl.getOperationsBytype = (req, res) => {
  const { type_operation, id_user } = req.params;

  const sql = `SELECT * FROM operations WHERE  type_operation = "${type_operation}" 
  and leavingDate is NULL and id_user=${id_user};`;

  connection.query(sql, (err, row) => {
    err ? res.status(400).json(err) : res.status(200).json(row);
  });
};
ctrl.getOperations = (req, res) => {
  const { id_user } = req.body;
  let sql = `select * from operations WHERE leavingDate is NULL and id_user=${id_user}`;
  connection.query(sql, (err, row) => {
    err ? res.status(400).json(err) : res.json(row);
  });
};

ctrl.updateOperation = (req, res) => {
  const { concept, amount, category, date, id_user } = req.body;
  const { id_operation } = req.params;

  let sql = `UPDATE operations SET concept ="${concept}",amount=${amount},
   category="${category}",date="${date}"  
    WHERE operations.id_operation = ${id_operation} and id_user=${id_user}`;
  connection.query(sql, (err, row) => {
    err
      ? res.status(400).json(err)
      : res.json({ message: "Operation updated" });
  });
};

ctrl.deleteOperation = (req, res) => {
  const { id_user } = req.body;
  const { id_operation } = req.params;
  let sql = `UPDATE operations SET leavingDate = now() where id_operation = ${id_operation}
  and id_user=${id_user}`;
  connection.query(sql, (err, row) => {
    err
      ? res.status(400).json(err)
      : res.json({ message: "Operation deleted" });
  });
};
ctrl.getOperationsByTypeAndCategory = (req, res) => {
  const { category, type_operation, id_user } = req.params;
  let sql = `Select * from operations where category=${category} and type_operation=${type_operation} and 
  leavingDate is NULL and id_user=${id_user};`;
  connection.query(sql, (err, row) => {
    err ? res.status(400).json(err) : res.status(200).json(row);
  });
};

ctrl.getOperationsByCategory = (req, res) => {
  const { category, id_user } = req.params;
  console.log(category, id_user);
  let sql = `Select * from operations where category="${category}" and leavingDate is NULL and id_user=${id_user} ;`;
  connection.query(sql, (err, row) => {
    err ? res.status(400).json(err) : res.json(row);
  });
};

ctrl.getLastOperations = (req, res) => {
  const { id_user } = req.body;
  let sql = `select * from operations where id_user=${id_user} and leavingDate is NULL 
  ORDER BY id_operation DESC LIMIT 10`;
  connection.query(sql, (error, row) => {
    error ? res.status(400).json(error) : res.status(200).json(row);
  });
};

ctrl.getBalance = (req, res) => {
  const { id_user } = req.body;
  let sql =`select sum(case when type_operation = "ingreso" then amount else - amount end) as balance from operations where id_user = ${id_user} AND leavingDate is null`
  connection.query(sql, (err,row)=>{
    err ? res.status(400).json(err) : res.json(row[0].balance);
  })
};

ctrl.addCategory = (req, res)=>{
  const { description } = req.body;
  let sql =  `INSERT INTO categories(description) VALUES (${description});`
  connection.query(sql, (err,row)=>{
    err ? res.status(400).json(err) : res.json({message:"category agregatted success"});
  })

}
module.exports = ctrl;
