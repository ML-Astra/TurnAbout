import {ApplicationConfig, TApp} from './application';

export * from './application';

export async function main(options: ApplicationConfig = {}) {
  const app = new TApp(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log('            _____ _______ _____            \n     /\\    / ____|__   __|  __ \\     /\\    \n    /  \\  | (___    | |  | |__) |   /  \\   \n   / /\\ \\  \\___ \\   | |  |  _  /   / /\\ \\  \n  / ____ \\ ____) |  | |  | | \\ \\  / ____ \\ \n /_/    \\_\\_____/   |_|  |_|  \\_\\/_/    \\_\\\n                                           ');
  console.log('Welcome to Turnabout Server. Project:Astra(Official Release)');
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);
  return app;
}

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      cors: {origin: '*'},
      port: +(process.env.PORT ?? 3000),
      host: process.env.HOST,
      // The `gracePeriodForClose` provides a graceful close for http/https
      // servers with keep-alive clients. The default value is `Infinity`
      // (don't force-close). If you want to immediately destroy all sockets
      // upon stop, set its value to `0`.
      // See https://www.npmjs.com/package/stoppable
      gracePeriodForClose: 5000, // 5 seconds
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
    },
  };
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
