import { Model, Schema,model } from "mongoose"
import { RefreshTokenType } from "../../types/refresh_token_type.js"


const refreshTokenSchema: Schema<RefreshTokenType> = new Schema<RefreshTokenType>(
    {
    email: {type: String},
     token: {type: String, unique: true, required: true},
     expiresIn: {type: Date, required: true},
    }
)

export const RefreshTokenModel: Model<RefreshTokenType> = model<RefreshTokenType>("refresh token", refreshTokenSchema)