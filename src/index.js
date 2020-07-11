require('dotenv').config();
const { ApolloServer } = require('apollo-server');

// Type Defs
const queryTypeDef = require('./typeDefs/Query');
const contentfulTypeDef = require('./typeDefs/Contentful');

// Resolvers
const query = require('./resolvers/query');
const contentful = require('./resolvers/contentful');

const typeDefs = [
  queryTypeDef,
  contentfulTypeDef,
];

// A map of functions which return data for the schema.
const resolvers = {
  ...query,
  ...contentful,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
});

server.listen({port: process.env.PORT || 8080}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
