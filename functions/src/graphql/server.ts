import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { firestore } from "./utils";

const typeDefs = `
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
