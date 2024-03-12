import nodemailer, {Transporter} from "nodemailer"
import { env } from "../../utils/env.js";
import logger from "../../utils/logger.js";

export interface EmailConfig
{
    email : string;
    subject: string;
    activationToken ?: string;
}

export const sendActivationTokenEmail = async (config : EmailConfig) =>
{
    const transporter:Transporter = nodemailer.createTransport(
        {
            host: env.SMTP_HOST,
            port: parseInt(env.SMTP_PORT || "587"),
            auth:
            {
                user: env.SMTP_MAIL,
                pass: env.SMTP_PASSWORD,
            }
        }
    )
    const {email, subject, activationToken} = config

        if(!activationToken){
            logger.error("no activation token");
            return;
        }

    const verificationLink = `http://localhost:${env.PORT}/api/user/activate?token=${activationToken}`
    
    try {

        await transporter.sendMail(
            {
                from: env.SMTP_MAIL,
                to: email,
                subject: subject,
                text: verificationLink,
            }
        )

        logger.info("activation email sent")
        

    } catch (error) {
        logger.error(error)
    }
        
}