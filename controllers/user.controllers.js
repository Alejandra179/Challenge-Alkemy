const userCtrls = {};
const connection = require("../db/connection");
const bcrypt = require("bcrypt");
const generarJWT = require("../helpers/generateJwt");
userCtrls.signIn = (req, res) => {
  const { email, password } = req.body;
  let sql = `select * from users where email = '${email}';`;
  connection.query(sql, (error, row) => {
    if (error) {
      return res.status(400).json(error);
    } else {
      let encryptPassword = row[0].password;
      const result = bcrypt.compareSync(password, encryptPassword);

      if (result) {
        generarJWT({ uid: row[0].id_user }).then((token) => {
          return res.json({
            row,
            token,
          });
        },(error)=>res.status(400).json(error));
      }
      return res.json({message:"incorrect credentials"})
    }
  });
};

userCtrls.signUp = (req, res) => {
  const { email, password, name } = req.body;

  const encryptPassword = bcrypt.hashSync(password, 10);
  console.log(encryptPassword);
  let sql = `INSERT INTO users(email, password, name) VALUES ('${email}','${encryptPassword}','${name}');`;

  connection.query(sql, (error, row) => {
    error
      ? res.status(400).json(error)
      : res.status(200).json({ message: "User aggregated success" });
  });
};

module.exports = userCtrls;
