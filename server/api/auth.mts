import * as http from 'node:http';
import * as cookie from 'cookie';
import * as jwt from 'jsonwebtoken';

export default function isAuth(request: http.IncomingMessage, response: http.ServerResponse){
    request.on("end", ()=>{
        const cookies = cookie.parse(request.headers.cookie || "");
        const token = cookies.token || "";

        const decoded = jwt.verify(token, 'fakesecret');
        
        if(decoded.length){
            console.log("Access granted");
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify({
                Authentication: true
            }))
        }
        else{
            console.log("Access denied")
            response.statusCode = 403;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify({
                Authentication: false
            }))
        };
    });
}