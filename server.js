const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser')
const {
  graphqlUploadExpress,
} = require('graphql-upload');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./graphql/schemas/schemas');
const resolvers = require('./graphql/resolvers/rootResolver');
const router = require('./routes/AddDesign');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(router)
console.log(process.env.DB_NAME)


async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  await server.start();
  app.use(graphqlUploadExpress());
  server.applyMiddleware({ app });

  app.use((req, res) => {
    res.send('response from apollo server express')
  })

  app.listen(5000, () => console.log('server is running'))
};

startServer();

const connectMongoose = async () => {
  await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.DB_PASSWORD}@cluster0.vxejw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
}
connectMongoose()
  .then(res => console.log('db connected'))
  .catch(err => console.log(err));



