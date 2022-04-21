import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { sqlite } from './db';
import { typeDefs, resolvers } from './gql';

const app = express();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return {
      model: sqlite,
    };
  },
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
