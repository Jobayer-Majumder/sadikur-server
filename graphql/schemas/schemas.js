const { gql } = require('apollo-server-express');


const typeDefs = gql`

  scalar Date


  type Works {
    _id: ID
    title: String
    description: String
    category: String
    file: String
    createdAt: Date
    updatedAt: Date
  }

  scalar Upload

  input WorksInput {
    title: String
    description: String
    category: String
    file: Upload
  }

  type Reviews {
    _id: ID
    name: String
    img: String
    company: String
    comment: String
    review: Int
    createdAt: Date
    updatedAt: Date
  }

  input ReviewInput {
    name: String
    img: String
    company: String
    comment: String
    review: Int
  }
  
  type Users {
    name: String
    email: String
    password: String
    role: String
    createdAt: Date
    updatedAt: Date
  }

  input UserInput {
    name: String
    email: String
    password: String
    role: String
  }

  type FindUser {
    token: String
  }

  input FindUserInput {
    email: String
    password: String
  }

 type Book {
  title: String
  author: String
 }
  
  type Query {  
    works: [Works]
    reviews: [Reviews]
    users: [Users]
    books: [Book]
    worksByCategory(category: String!): [Works]
  }

  type Mutation {
    addWorks(input: WorksInput): Works
    addReview(input: ReviewInput) : Reviews
    makeAdmin(input: UserInput): Users
    findUser(input: FindUserInput): FindUser
  }

  

`;

module.exports = {
  typeDefs
}