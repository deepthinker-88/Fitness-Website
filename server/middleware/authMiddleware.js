import jwt from 'jsonwebtoken'

export default function authenticateToken(req, res, next) {
  const token = req.header('x-auth-token')
 

  if (!token){
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user) => {

    if (err){
        console.error("Token verification failed:", err.message);

    }

    else{
        req.user = user}

    next()
  })
}
