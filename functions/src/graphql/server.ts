import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { firestore } from "./utils";

const typeDefs = `
  scalar DateTime

  type Query {
    hello(name: String): String!
    messages: [Message!]!
  }

  type Mutation {
    addMessage(input: AddMessageInput): Message!
  }

  type Message {
    id: String!
    body: String!
    createdAt: DateTime!
  }

  input AddMessageInput {
    body: String!
  }
`;

export const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({ ...req, firestore })
});
