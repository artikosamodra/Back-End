const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json'); //merubah html ke json, artinya simbol code html tidak berlaku, karena berubah menajdi json
    response.setHeader('X-Powered-By','NodeJS'); //dengan properti X-Powered-By dengan NodeJS.
    response.statusCode = 200;
 
    const { method, url } = request; //menambahkan routing = method berada di dalam url => url(GET, POST, PUT, DELETE)
 
    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200; //respon status terdiri dari 100-199 (informal), 200-299 (successful), 300-399 (redirect), 400-499 (client error/404), 500-599 (server error)
            response.end(JSON.stringify({ //perintah JSON.stringify adalah respon body menggunakan json yang ditampilkan pada message
                message: 'Ini adalah homepage',
            }));
        }
 
        else if(method === 'POST') {
            response.statusCode = 200; //200 = OK
            let body = [];
    
            request.on('data', (chunk) => {
            body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.end(JSON.stringify({
                    message: `Halo ${name}! Ini adalah homepage!`,
                }))});
        }

        else {
            response.statusCode = 400; //400 = Bad Request
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${method} request`,
            }));
            
        }
 
    }
    
    else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah aboutpage',
            }));
        }
 
        else if (method === 'POST') {
            response.statusCode = 200;
            let body = [];
    
            request.on('data', (chunk) => {
            body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.end(JSON.stringify({
                    message: `Halo ${name}! Ini adalah abaoutpage!`,
                }))});
            }

        else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${method} request`,
            }));
        }
    }
    
    else {
        response.statusCode = 404; //404 = not found
        response.end(JSON.stringify({
                message: 'Halaman tidak ditemukan',
            }));
    }
}

const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});


/*
====================================================================================================================
Test output

curl -X GET http://localhost:5000/
output: {"message":"Ini adalah homepage"}

curl -X GET http://localhost:5000/about
output: {"message":"Halo! ini adalah halaman about"}

curl -X DELETE http://localhost:5000/
output: {"message":"Halaman tidak dapat diakses dengan DELETE request"}

*/
