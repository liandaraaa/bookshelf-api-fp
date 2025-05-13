import { server as _server } from '@hapi/hapi';

const init = async () => {
  const server = _server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'], // Set the CORS origin to allow all origins
      },
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();