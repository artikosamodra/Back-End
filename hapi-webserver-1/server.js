const Hapi = require('@hapi/hapi'); //menggunakan framework hapi untuk membuat http

const init = async () => {
	const server = Hapi.server({
		port: 5000,
		host: 'localhost',
	});

	//ini adalah server.route digunakan untuk pengganti if else pada pemanggilan method pada server dengan menggunakan handler.
	server.route(routes); //memindahkan server.route ke file lain dengan memanggil routes (module.exports)

	await server.start();
	console.log(`Server berjalan pada ${server.info.url}`);
}

init();
