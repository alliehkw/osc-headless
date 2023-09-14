// import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBar.js";
import Content from "./components/content/Content.js";
import { BrowserRouter as Router } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const app_data = gql`
  {
    menuItems(first: 500) {
      edges {
        node {
          id
          label
          order
          parentId
          locations
          customMenuItems {
            image {
              node {
                altText
                mediaItemUrl
              }
            }
            imageAlt {
              node {
                altText
                mediaItemUrl
              }
            }
            isThisAButton
            buttonColor
          }
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
    pages(first: 500) {
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
  // TO DO: dynamically create pages
  return (
    <>
      {!loading ? (
        <div className="App">
          <Router>
            <NavBar menu_data={data.menuItems.edges} />
            <Content content_data={data.pages.nodes} />
          </Router>
        </div>
      ) : null}
    </>
  );
}

export default App;
