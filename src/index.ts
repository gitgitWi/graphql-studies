import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { HelloType, HelloResolvers } from './gql';

const app = express();

const apolloServer = new ApolloServer({
  typeDefs: HelloType,
  resolvers: HelloResolvers,
});

const apolloPath = `/api`;
apolloServer.start().then(() => {
  apolloServer.applyMiddleware({ app, path: apolloPath });
});

app.get('', (_req, res) => {
  res.send('hello world');
});

const port = 4000;
app.listen({ port }, () => {
  console.log(
    `[${new Date().toLocaleTimeString()}] Apollo Server listening on http://localhost:${port}${apolloPath}`
  );
});
