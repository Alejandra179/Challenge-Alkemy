const ctrl = {}
const connection = require("../db/connection")

ctrl.getOperaciones = async(req, res)=>{
    let sql = "select * from operaciones"

    conexion.query(sql,(err,row,fields)=>{
        if(err){
            console.log(err)
        }else{
            console.log(fields)
            res.json(row)
        }
    })
}

module.exports = ctrl;