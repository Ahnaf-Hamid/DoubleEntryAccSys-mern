import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if(!token){
        res.json({success:false,msg:"Not authorized login again"})
    }

    const tokenDecode = jwt.verify(token,process.env.JWT_SECRET_KEY)
    req.userId = tokenDecode.id
    next()

  } catch (error) {
    console.log(error);
    res.json({succes:false,msg:error.message})
  }
};

export default authMiddleware;