// import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBar.js";
import Footer from "./components/footer/Footer.js";
import PageContent from "./components/content/PageContent.js";
import { BrowserRouter as Router } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import ScrollToTop from "./components/reusables/ScrollToTop.js";
// import Home from "./components/roundii/Home.js";
import { ThemeProvider, createTheme } from "@mui/system";
import React, { useState, useEffect } from "react";

// TO DO: update tags to be a tags for accessibility where necessary
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
              heroHeight
              heroType
              videoUrl
              titleWidth
              title
              textColor
              subtitle
              posterImage {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
            ... on FlexibleContentCustomContentBlocksSection {
              gap
              backgroundColor
              columnBlocks {
                ... on FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumn {
                  oneColumn {
                    ... on FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumnOneColumnTitle {
                      fieldGroupName
                      textAlignment
                      customPadding
                      customPaddingDetails {
                        paddingBottom
                        paddingLeft
                        paddingRight
                        paddingTop
                      }
                      title
                      titleSize
                      titleWidth
                    }
                    ... on FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumnOneColumnRichText {
                      richTextWidth
                      fieldGroupName
                      columnAlignment
                      textContent
                      customPadding
                      customPaddingDetails {
                        paddingBottom
                        paddingLeft
                        paddingRight
                        paddingTop
                      }
                    }
                    ... on FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumnOneColumnButtons {
                      blockAlign
                      fieldGroupName
                      blockWidth
                      buttonPadding
                      button {
                        buttonBackgroundColor
                        buttonText
                        linkType
                        url
                        pageLink {
                          node {
                            slug
                          }
                        }
                        document {
                          nodes {
                            mediaItemUrl
                          }
                        }
                      }
                    }
                    ... on FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumnOneColumnImage {
                      customImageHeight
                      imageAlignment
                      imageWidth
                      image {
                        node {
                          altText
                          mediaItemUrl
                        }
                      }
                      imageHeightDimensions {
                        desktopHeight
                        mobileHeight
                        tabletHeight
                      }
                      customPadding
                      customPaddingDetails {
                        paddingBottom
                        paddingLeft
                        paddingRight
                        paddingTop
                      }
                    }
                    ... on FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumnOneColumnVideo {
                      videoAlignment
                      videoUrl
                      videoWidth
                      customVideoDimensions
                      videoHeightDimensions {
                        desktopHeight
                        mobileHeight
                        tabletHeight
                      }
                      posterImage {
                        node {
                          mediaItemUrl
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    reviews {
      nodes {
        title
        reviewFields {
          dateOfReview
          name
          review
          starRating
        }
      }
    }
  }
`;

const theme = createTheme({
  palette: {
    oscbrandcolor: "#008771",
    oscgreencolor01: "#DDF9F4",
    oscgreencolor02: "#98ECDE",
    oscgreencolor03: "#19B69C",
    oscgreencolor04: "#008771",
    oscgreencolor05: "#004154",
    oscgreencolor06: "#015143",
    oscgreencolor07: "#003028",
    bodytext: "#1C3A49",
    secondarybg: "#F0F6F9",
    gray01: "#EFF7FB",
    gray02: "#C4DAE3",
    gray03: "#8AA0AA",
    gray04: "#586C75",
    gray05: "#28404B",
    gray06: "#112E3D",
    white: "#FFFFFF",
    black: "#000",
    success: "#04D2A1",
    error: "#E81F5B",
    starcolor: "#FCBD06",
    starbackground: "#C4DAE3",
  },
  breakpoints: {
    values: {
      xs: 0, // Mobile
      sm: 600, // Tablet
      md: 1023, // Small desktop
      lg: 1279, // Large desktop
      xl: 1440, // TV
    },
  },
  spacing: 16,
});

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
  // Get the screen size
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <ThemeProvider theme={theme}>
      {!loading ? (
        <div className="App">
          <Router>
            <ScrollToTop />
            <NavBar menu_data={navItems} />
            {/* <Home /> */}
            <PageContent
              content_data={data.pages.nodes}
              screenSize={screenSize}
              // review_content={data.reviews.nodes}
            />
            {/* <Footer footerItems={footerItems} /> */}
          </Router>
        </div>
      ) : null}
    </ThemeProvider>
  );
}

export default App;
