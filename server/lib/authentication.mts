import jwt from 'jsonwebtoken';

type PayloadProp = {
    email: string,
    password: string
}
export default function authentication(payload: PayloadProp): string{
    const secretKey = "fakesecret"
    const token = jwt.sign(payload, secretKey);

    return token;
}