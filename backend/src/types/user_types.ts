import { Document } from "mongoose"

export interface UserRegisterModel extends Document
{
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    emailActivated?: Date;
    role: string;
    refreshToken: string;
    isPasswordCorrect(password: string): Promise<boolean>;
    generateAccessToken(): string;
    generateRefreshToken(): string;  
}