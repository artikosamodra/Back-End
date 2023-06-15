const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json'); //merubah html ke json, artinya simbol code html tidak berlaku, karena berubah menajdi json
    response.setHeader('X-Powered-By','NodeJS'); //dengan properti X-Powered-By dengan NodeJS.
    response.statusCode = 200;
 
    const { method, url } = request; //menambahkan routing = method berada di dalam url => url(GET, POST, PUT, DELETE)
 
    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200; //respon status terdiri dari 100-199 (informal), 200-299 (successful), 300-399 (redirect), 400-499 (client error/404), 500-599 (server error)
            response.end('<h1>Ini adalah homepage</h1>');
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
            response.end(`<h1>Halo ${name}! Ini adalah homepage!</h1>`);
            }); 
        }

        else {
            response.statusCode = 400; //400 = Bad Request
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
 
    }
    
    else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Ini adalah aboutpage</h1>');
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
            response.end(`<h1>Halo ${name}! Ini adalah abaoutpage!</h1>`);
            }); 
        }

        else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
    }
    
    else {
        response.statusCode = 404; //404 = not found
        response.end(`<h1>Halaman tidak ditemukan<h1>`);
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

curl -X GET http://localhost:5000/ -i
HTTP/1.1 200 OK
Content-Type: application/json
X-Powered-By: NodeJS
Date: Thu, 15 Jun 2023 12:04:50 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 28

<h1>Ini adalah homepage</h1>a

*/
