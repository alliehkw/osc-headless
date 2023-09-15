// import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBar.js";
import Footer from "./components/footer/Footer.js";
import Content from "./components/content/PageContent.js";
import { BrowserRouter as Router } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import ScrollToTop from "./components/reusables/ScrollToTop.js";
// TO DO: need to add in queries for the footer stuff
const app_data = gql`
  {
    menuItems(first: 500) {
      nodes {
        id
        label
        parentId
        locations
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
              forceOneLineTitle
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
              backgroundColor
              sectionHeader
              headerTextAlignment
              sectionSubtext
              subtextAlignment
              column {
                columnHeader
                rows {
                  ... on FlexibleContentCustomContentBlocksContentSectionColumnRowsText {
                    __typename
                    textColor
                    textContent
                    textBackground
                    textBackgroundColor
                    textBackgroundShape
                  }
                }
              }
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
  let navItems = [];
  let footerItems = [];
  if (!loading) {
    for (let item of data.menuItems.nodes) {
      let navLocations = item.locations;
      if (navLocations.includes("PRIMARY")) {
        navItems.push(item);
      }
      if (navLocations.includes("FOOTER")) {
        footerItems.push(item);
      }
    }
  }
  return (
    <>
      {!loading ? (
        <div className="App">
          <Router>
            <ScrollToTop />
            <NavBar menu_data={navItems} />
            <Content content_data={data.pages.nodes} />
            <Footer footerItems={footerItems} />
          </Router>
        </div>
      ) : null}
    </>
  );
}

export default App;
