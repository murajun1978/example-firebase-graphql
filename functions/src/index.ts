import * as functions from "firebase-functions";
import { server } from "./graphql/server";

const options: any = {
  cors: true
};
server.createHttpServer(options);
const express = server.express;

export const graphql = functions.https.onRequest(express);
