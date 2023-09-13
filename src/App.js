import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "./App.css";

// menuItems(where: { location: PRIMARY }) {
//   edges {
//     node {
//       id
//       label
//       order
//       parentId
//       connectedNode {
//         node {
//           ... on Page {
//             id
//             slug
//           }
//         }
//       }
//     }
//   }
// }

const app_data = gql`
  {
    menuItems {
      edges {
        node {
          id
          label
          order
          parentId
          locations
          connectedNode {
            node {
              ... on Page {
                id
                slug
              }
            }
          }
        }
      }
    }
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

  // TO DO: error handling
  return (
    <>
      {!loading ? (
        <div className="App">
          <NavBar menu_data={data.menuItems.edges} />
          <h1>le app</h1>
        </div>
      ) : null}
    </>
  );
}

export default App;
