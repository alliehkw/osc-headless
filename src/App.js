import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import logo from "./logo.svg";
import "./App.css";

const app_data = gql`
  {
    pages {
      nodes {
        title
        slug
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(app_data);

  useEffect(() => {
    console.log(data);
  }, [data]);
  // TO DO: error handling
  return (
    <div className="App">
      <h1>hey</h1>
    </div>
  );
}

export default App;
