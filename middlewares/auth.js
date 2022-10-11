const jwt = require("jsonwebtoken");
const connection = require("../db/connection");

const SECRET = process.env.SECRET;
module.exports = function (req, res, next) {
  //get token f. header
  const token = req.header("x-auth-token");
  //check token
  if (!token) {
    return res.status(401).json({ msg: "no token, unauthorized" });
  }

  try {
    //modificar jwtSecret
    const decoded = jwt.verify(token, SECRET);
   console.log(decoded)
    //console.log('DECODED => ', decoded)
    let sql = `select * from users where id_user="${decoded.uid}"`;
    connection.query(sql, (err, row) => {
      if(err) return res.json(err.message) 
      if(row.length === 0){        
        res.json({message:'Token invalid - user not found'})
      } else{
          req.user = row[0]
          next()
      }
    })
    
  } catch (error) {
    res.status(401).json({ msg: "unvalid token" });
  }
};
