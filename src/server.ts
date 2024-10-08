import fastify from 'fastify';

const app = fastify();

app.get('/', async (request, replay) => {
  return { hello: 'world' };
});

app.listen({port: 3000}).then(() => {
  console.log('Server is running on http://localhost:3000');
});