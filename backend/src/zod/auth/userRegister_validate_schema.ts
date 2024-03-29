import {z} from "zod";

export const userRegisterValidate = z.object({
    username:z.string().min(1,{message: "This field cannot be empty"}),
    email : z.string().email(),
    password: z.string().min(8, {message: "password should be atleast 6 characters long"})
})
