// import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBar.js";
import Footer from "./components/footer/Footer.js";
import PageContent from "./components/content/PageContent.js";
import { BrowserRouter as Router } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import ScrollToTop from "./components/reusables/ScrollToTop.js";
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
              headerWidth
              headerAlignment
              sectionSubtext
              column {
                columnHeader
                columnWidth
                columnAlignment
                rows {
                  ... on FlexibleContentCustomContentBlocksContentSectionColumnRowsText {
                    __typename
                    textColor
                    textContent
                    fullWidth
                    textBackground
                    textBackgroundColor
                    textBackgroundShape
                  }
                  ... on FlexibleContentCustomContentBlocksContentSectionColumnRowsButtons {
                    buttonsAlignment
                    fullWidth
                    extraWideSpaceBetweenButtons
                    button {
                      buttonBackgroundColor
                      buttonLinkUrl
                      buttonText
                    }
                  }
                  ... on FlexibleContentCustomContentBlocksContentSectionColumnRowsImages {
                    fullWidth
                    imageAlignment
                    gapBetweenImages
                    images {
                      imageBorder
                      imageHeight
                      imageWidth
                      imageType
                      image {
                        node {
                          altText
                          mediaItemUrl
                        }
                      }
                      imageOverlay {
                        contentType
                        icon
                        overlayIsALink
                        overlayLink
                        overlayPosition
                        shadowUnderOverlay
                        text
                        backgroundColor
                      }
                    }
                  }
                  ... on FlexibleContentCustomContentBlocksContentSectionColumnRowsMap {
                    address
                    fullWidth
                  }
                  ... on FlexibleContentCustomContentBlocksContentSectionColumnRowsMediaCard {
                    title
                    content
                    buttonUrl
                    imageBorderRadius
                    imageHeight
                    imageType
                    imageWidth
                    image {
                      node {
                        altText
                        mediaItemUrl
                      }
                    }
                    overlay {
                      backgroundColor
                      contentType
                      icon
                      overlayIsALink
                      overlayLink
                      overlayPosition
                      shadowUnderOverlay
                      text
                    }
                  }
                  ... on FlexibleContentCustomContentBlocksContentSectionColumnRowsReviewBlock {
                    buttonText
                    buttonUrl
                    reviewRequest
                    subtitle
                    title
                  }
                  ... on FlexibleContentCustomContentBlocksContentSectionColumnRowsAccoladesBlock {
                    accolades {
                      starRating
                      brandLogo {
                        node {
                          altText
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
            <PageContent
              content_data={data.pages.nodes}
              review_content={data.reviews.nodes}
            />
            <Footer footerItems={footerItems} />
          </Router>
        </div>
      ) : null}
    </>
  );
}

export default App;
