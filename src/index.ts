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
    completed: Bool!
  }

  type Query {
    todos: [Todo!]
  }
`;
