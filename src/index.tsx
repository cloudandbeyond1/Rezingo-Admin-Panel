import React from "react";
import ReactDOM from "react-dom/client";

import "./i18n";

import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <ApolloProvider client={client}>
  <Provider store={configureStore({})}>
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </Provider>
  </ApolloProvider>
);
