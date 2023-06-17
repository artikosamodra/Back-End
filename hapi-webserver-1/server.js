const Hapi = require('@hapi/hapi'); //menggunakan framework hapi untuk membuat http

const init - async () => {
	const server = Hapi.server({
		port: 5000,
		host" 'localhost',
	});

	await server.start();
	console.log(`Server berjalan pada ${server.info.url}`);
}

init();
