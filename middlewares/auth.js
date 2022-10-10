const jwt = require('jsonwebtoken')

const  SECRET = process.env.SECRET
module.exports = function(req, res, next)  {
    //get token f. header
    const token = req.header('x-auth-token')
    //check token
    if(!token){
        return res.status(401).json({msg: 'no token, unauthorized' })
    }

    try {
        //modificar jwtSecret
        const decoded = jwt.verify(token, SECRET)

        //console.log('DECODED => ', decoded)

        //attach user at req and pass to next mware.
        req.user = decoded.user 

        next()

    } catch (error) {
        res.status(401).json({msg: 'unvalid token'})
    }


}