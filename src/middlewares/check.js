import { verify } from "jsonwebtoken";
import jwtConfig from "../config/jwt";
import User from "../app/models/User";

export default async function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token is missing!" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { secret } = jwtConfig;

    const decoded = await verify(token, secret);
    const id = decoded.sub;

    req.user = id;

    const user = await User.findOne({
      where: {
        id: id,
      },
    });

    if (user.deleted === true) {
      return res.status(401).json({ error: "Disabled user" });
    }

    return next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid JWT Token" });
  }
}
