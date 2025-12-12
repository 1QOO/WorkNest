import * as http from 'node:http';
import login from './api/login.mts';
import isAuth from './api/auth.mts';

const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((req ,res)=>{
    if(req.url === "/api/login"){
        login(req, res);
    }
    else if(req.url === "api/auth"){
        isAuth(req, res);
    }
})

server.listen(port ,hostname ,()=>console.log(`Linstening on http://${hostname} port ${port}`));