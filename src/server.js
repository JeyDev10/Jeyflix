const jsonServer = require('json-server');
const db = require('./data/db.json');

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3004, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server is running');
});
