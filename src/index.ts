import { ApolloServer, gql } from "apollo-server";

const todos = [
  {
    id: "1",
    title: "First Todo",
    completed: false
  },
  {
    id: "2",
    title: "Second Todo",
    completed: true
  }
];

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo!]
  }
`;

const resolvers = {
  Query: {
    todos: () => todos
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
