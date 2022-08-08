import { object, string, TypeOf } from "zod";

export const registerUserSchema = {
  body: object({
    username: string({
      required_error: "username is required",
    }), //.option() will make this attribute optional
    email: string({
      required_error: "email is required",
    }).email("email must be a valid email"),
    password: string({
      required_error: "password is required",
    })
      .min(5, "Password must longer than 5 characters")
      .max(25, "Password can not be longer than 25 characters"),
    confirmPassword: string({
      required_error: "confirmPassword is required",
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  }),
};

export type registerUserBody = TypeOf<typeof registerUserSchema.body>;
