// import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBar.js";
import Content from "./components/content/Content.js";
import { BrowserRouter as Router } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import ScrollToTop from "./components/reusables/ScrollToTop.js";

const app_data = gql`
  {
    menuItems(first: 500) {
      nodes {
        id
        label
        parentId
        customMenuItems {
          buttonColor
          isThisAButton
          imageAlt {
            node {
              altText
              mediaItemUrl
            }
          }
          image {
            node {
              altText
              mediaItemUrl
            }
          }
        }
        connectedNode {
          node {
            ... on Page {
              id
              isFrontPage
              slug
            }
          }
        }
      }
    }
    pages(first: 500) {
      nodes {
        title
        slug
        isFrontPage
        flexibleContent {
          customContentBlocks {
            ... on FlexibleContentCustomContentBlocksHero {
              __typename
              backgroundColor
              height
              heroType
              subTitle
              title
              videoUrl
              videoPoster {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
            ... on FlexibleContentCustomContentBlocksContentSection {
              __typename
            }
          }
        }
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
            <ScrollToTop />
            <NavBar menu_data={data.menuItems.nodes} />
            <Content content_data={data.pages.nodes} />
          </Router>
        </div>
      ) : null}
    </>
  );
}

export default App;
