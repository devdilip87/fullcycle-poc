const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const root = require('./resolvers');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 4000;
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`GraphQL server is running at http://localhost:${port}/graphql`);
});
