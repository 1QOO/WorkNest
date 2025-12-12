import * as http from 'node:http';
import * as cookie from 'cookie';
import authentication from '../lib/authentication.mts';
import users from '../config/db.mjs';

export default function login(req: http.IncomingMessage ,res: http.ServerResponse){
    if(req.method === 'POST'){
        let body = "";

        req.on("data", chunk=>body+=chunk);
        req.on("end", ()=>{
            const data = JSON.parse(body);
            const email = data.email;
            const password = data.password;
            const user = users.find(user=>user.email===email&&user.password===password);

            if(user){
                const token = authentication({email: email, password: password});

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Set-Cookie',
                    cookie.serialize('token', token, {
                        httpOnly: true,
                        maxAge: 60 * 5
                    })
                );
                res.end(JSON.stringify({
                    name: user.name,
                    role: user.role
                }));
            }
            else{
                res.statusCode = 403;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({statusMessage : 'Credentials incorrect'}));
            }
        })

    }
    else{
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: 'Wrong method '}));
    }

    return res;
}