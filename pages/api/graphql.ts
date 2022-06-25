import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { gql, ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import knex from "services/dbConnect";

let books: Array<Object> = [
  {
    id: 0,
    title: "test1",
  },
  {
    id: 1,
    title: "test2",
  },
  {
    id: 2,
    title: "test3",
  },
];

const typeDefs = gql`
  type users {
    user_id: Int
    username: String
    password: String
    status: Int
    createdAt: String
    updatedAt: String
  }

  type Query {
    getUser: [users]
  }
`;

const resolvers = {
  Query: {
    getUser: async () => {
      const result = await knex.select("user_id", "username").from("users");
      return result;
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
