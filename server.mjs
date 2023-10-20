// server.js
import express from 'express';
import { ApolloServer, gql }  from 'apollo-server-express';
//const { ApolloServer, gql } = require('apollo-server-express');
//const express = require('express');
//const { database } = require('./src/firebase');

const typeDefs = gql`
  type Item {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    items: [Item]
  }

  type Mutation {
    createItem(name: String!, description: String!): Item
  }
`;

// const resolvers = {
//   Query: {
//     items: async () => {
//       // Fetch items from Firebase and return them
//       // You need to implement the logic to fetch data from Firebase here
//       return [];
//     },
//   },
//   Mutation: {
//     createItem: async (_, { name, description }) => {
//       // Create a new item in Firebase and return it
//       // You need to implement the logic to create data in Firebase here
//       return {
//         id: '1', // Replace with the actual ID from Firebase
//         name,
//         description,
//       };
//     },
//   },
// };
const resolvers = {
  Query: {
    items: async () => {
      // Retrieve items from Firebase and return them
      const snapshot = await database.ref('/category').once('value');
      const items = snapshot.val();
      return items ? Object.values(items) : [];
    },
  },
  Mutation: {
    createItem: async (_, { name, description }) => {
      // Generate a new unique ID for the item
      const newItemRef = database.ref('/category').push();
      const newItem = {
        id: newItemRef.key,
        name,
        description,
      };

      // Save the new item to Firebase
      await newItemRef.set(newItem);

      return newItem;
    },
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
// server.applyMiddleware({ app });

// app.listen({ port: 4000 }, () => {
//   console.log('Server is running on http://localhost:4000/graphql');
// });

async function startApolloServer() {
  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log('Server is running on http://localhost:4000/graphql');
  });
}

startApolloServer();