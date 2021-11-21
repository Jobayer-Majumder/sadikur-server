const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const { worksSchema } = require('./graphql/schemas/schemas');
const rootResolver = require('./graphql/resolvers/rootResolver');

const app = express();

app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema: worksSchema,
  rootValue: 
    rootResolver,
  
  graphiql: true
}))

main().then(res => console.log('db connected'))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://sadikur:Pat9AjTAuAmSXlar@cluster0.vxejw.mongodb.net/sadikur?retryWrites=true&w=majority');
}

app.get('/', (req, res) => {
  res.send('look mom i am using graphql server')
})


app.listen(5000, () => console.log('server is running'))