import {z} from "zod";

export const userRegisterValidate = z.object({
    username:z.string().min(8,{message: "Username should be atleast 8 characters long"}),
    email : z.string().email(),
    password: z.string().min(6, {message: "password should be atleast 6 characters long"})
})
