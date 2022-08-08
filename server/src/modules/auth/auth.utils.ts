import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "jwtsecret";
const EXPIRES_IN = process.env.EXPIRES_IN || "2d";

export function signJwt(payload: string | Buffer | Object) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: EXPIRES_IN,
  });
}

export function verifyJwt(token: string) {
  try {
    const decodedkey = jwt.verify(token, JWT_SECRET);
    return decodedkey;
  } catch (error) {
    return null;
  }
}
