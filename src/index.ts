import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { ApolloServer, gql } from "apollo-server";

createConnection()
  .then(async connection => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch(error => console.log(error));

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
