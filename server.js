const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')
const { schemas } = require('./graphql/schemas/schemas');
const { graphqlHTTP } = require('express-graphql');
const rootResolver = require('./graphql/resolvers/rootResolver');



const app = express();
app.use(cors())
app.use(express.json());

console.log(process.env.DB_NAME)

app.use('/graphql', graphqlHTTP({
  schema: schemas,
  rootValue: rootResolver,

  graphiql: true
}))


const connectMongoose = async () => {
  await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.DB_PASSWORD}@cluster0.vxejw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
}
connectMongoose()
  .then(res => console.log('db connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('look mom i am using graphql server')
})


app.listen(5000, () => console.log('server is running'))