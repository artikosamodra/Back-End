const routes = [

        //method GET untuk url '/'
        {
                method: 'GET',
                path: '/',
                handler: (request, h) => {
                        return 'Homepage';
                        return h.response('create').code(201);
                        
                        //detail yang diproses pada h.response
                        /*
                        1. Detailed notation
                        const handler = (request, h) => {
                            const response = h.response('success');
                            response.type('text/plain');
                            response.header('X-Custom', 'some-value');
                            return response;
                        };
 
                        2. Chained notation
                        const handler = (request, h) => {
                             return h.response('success')
                                  .type('text/plain')
                                  .header('X-Custom', 'some-value');
                        };
                        */
                },
        },

        //method not GET (POST, PUT, DELETE) untuk url '/'
        {
                method: '*',
                path: '/',
                handler: (request, h) => {
                        return 'Halaman tidak dapat diakses dengan method tersebut';
                },
        },

        //method GET untuk url '/about'
        {
                method: 'GET',
                path: '/about',
                handler: (request, h) => {
                        return 'About Page';
                },
        },

        //method not GET (POST, PUT, DELETE) untuk url '/about'
        {
                method: '*',
                path: '/about',
                handler: (request, h) => {
                        return 'Halaman tidak dapat diakses dengan method tersebut';
                },
        },

        //method POST untuk url '/login' dengan payload request
        /*
        {
                method: 'POST',
                path: '/login',
                handler: (request, h) => {
                        const {username, password} = request.payload;
                        return `Welcome ${username}`;
                },
        },
        */
        
        //request params
        {
                method: 'GET',
                path: '/hello/{name?}',
                handler: (request, h) => {
                        const {name = "guest", location = "no detect", lang} = request.query; //menambah query nama dan lokasi dan bahasa.
                        //const {name = "guest"} = request.params; //jika tidak terdapat username
                        //const {location = "no detect"} = request.params;

                        //pengaturan if else bahasa pada query diatas.
                        if (lang === 'id'){
                                return `Hai ${name} dari ${location}!`;
                        }
                        return `Hello, ${name} from ${location}!`;
                },
        },
        
        //method not GET (POST, PUT, DELETE) untuk url selain '/' & '/about'
        {
                method: '*',
                path: '/{any*}',
                handler: (request, h) => {
                        return 'Halaman tidak ditemukan';
                },
        },
];

module.exports = routes;

/*
curl -X GET 'http://localhost:5000/hello?name=artiko&location=malang&lang=id'

output:
Hai artiko dari malang!
*/
