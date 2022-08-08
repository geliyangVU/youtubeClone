import express from "express";
import { processRequestBody } from "zod-express-middleware";
import { registerUserHandler } from "./user.controller";
import { registerUserSchema } from "./user.schema";
// import requireUser from "../../";

const router = express.Router();

//prefix: /api/users

router.post(
  "/",
  processRequestBody(registerUserSchema.body),
  registerUserHandler
);

// router.get("/", requireUser, (req, res) => {
//   return res.send(res.locals.user)
// }
// );

export default router;
