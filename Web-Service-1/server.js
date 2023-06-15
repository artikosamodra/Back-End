const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method, url } = request; //menambahkan routing = method berada di dalam url => url(GET, POST, PUT, DELETE)
 
    if(url === '/') {
        if(method === 'GET') {
        response.end('<h1>Ini adalah homepage</h1>');
        }
 
        else if(method === 'POST') {
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
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
 
    }
    
    else if(url === '/about') {
        if(method === 'GET') {
            response.end('<h1>Ini adalah aboutpage</h1>');
        }
 
        else if (method === 'POST') {
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
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
    }
    
    else {
        response.end(`<h1>Halaman tidak ditemukan`);
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
output : <h1>Halo! Ini adalah homepage</h1>

curl -X POST -H "Content-Type: application/json" http://localhost:5000/ -d "{\"name\": \"artiko\"}"
output: <h1>Halo, artiko! Ini adalah homepage</h1>

curl -X GET http://localhost:5000/about
output: <h1>Halo! Ini adalah halaman aboutpage</h1>

curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"artiko\"}"
output: <h1>Halo, artiko! Ini adalah aboutpage</h1>

curl -X DELETE http://localhost:5000/about
output: <h1>Halaman tidak dapat diakses menggunakan DELETE request</h1>

*/
