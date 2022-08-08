import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { registerUserBody } from "./user.schema";
import { createUser } from "./user.service";

//use command + click to see source code
export async function registerUserHandler(
  req: Request<{}, {}, registerUserBody>,
  res: Response
) {
  const { username, email, password } = req.body;

  console.log(req.body.email);

  try {
    await createUser({ username, email, password });
    return res.status(StatusCodes.CREATED).send("User created Successfully");
  } catch (error) {
    if (error.code === 11000) {
      return res.status(StatusCodes.CONFLICT).send("User already exists");
    }
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
}
