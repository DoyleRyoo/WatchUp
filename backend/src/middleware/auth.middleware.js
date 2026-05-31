import { admin } from "../firebase/firebaseAdmin.js";

const authMiddleware = async (
  req,
  res,
  next
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const token = authHeader.replace(
      "Bearer ",
      ""
    );

    const decoded = await admin
      .auth()
      .verifyIdToken(token);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

export default authMiddleware;