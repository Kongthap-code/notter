import jwt from "jsonwebtoken";

const SECRET = process.env.TOKEN_SECRET;

function signJWT(id){
    return jwt.sign(id,SECRET);
}

export { signJWT, SECRET}