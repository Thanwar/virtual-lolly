const { ApolloServer, gql } = require('apollo-server-lambda')

const faunadb = require("faunadb");
const q = faunadb.query;
const shortid = require("shortid");
require('dotenv').config();

const typeDefs = gql`
  type Query {
    GETDATA: Lolly
  }
  type Lolly {
    recipientName: String!
    message: String!
    senderName: String!
    flavourTop: String!
    flavourMiddle: String!
    flavourBottom: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly (recipientName: String!, message: String!,senderName: String!, flavourTop: String!,flavourMiddle: String!,flavourBottom: String!) : Lolly
  }
`


const resolvers = {
  Query: {
    GETDATA: () => {
      return 'Hello, Lolly!'
    },
  },
  Mutation : {
    createLolly: async  (_, args) => {
      const client = new faunadb.Client({secret: "fnAD_oP0fTAGDUBDLTbOEpkqceEoGF53_noQ6mrp"});
      const id = shortid.generate();
      args.lollyPath = id

      const result = await client.query(
        q.Create(q.Collection("lollipops"), {
          data: args
        })
      );  

      console.log("result = ",result.data)
      return result.data
  },
},
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
