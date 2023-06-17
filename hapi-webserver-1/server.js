const Hapi = require('@hapi/hapi'); //menggunakan framework hapi untuk membuat http

const init = async () => {
	const server = Hapi.server({
		port: 5000,
		host: 'localhost',
	});

	//ini adalah server.route digunakan untuk pengganti if else pada pemanggilan method pada server dengan menggunakan handler.
	server.routes([
		{
			method: 'GET',
			path: '/',
			handler: (request, h) => {
				return 'Homepage';
			},
		},

		{
			method: 'GET',
			path: '/about',
			handler: (request, h) => {
				return 'About Page';
			},
		},
	]);

	await server.start();
	console.log(`Server berjalan pada ${server.info.url}`);
}

init();
