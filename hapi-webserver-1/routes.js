const routes = [

        //method GET untuk url '/'
        {
                method: 'GET',
                path: '/',
                handler: (request, h) => {
                        return 'Homepage';
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

        //request params
        {
                method: 'GET',
                path: '/hello/{name?}',
                handler: (request, h) => {
                        const {name = "guest"} = request.params; //jika tidak terdapat username
                        return `Hello, ${name}!`;
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
