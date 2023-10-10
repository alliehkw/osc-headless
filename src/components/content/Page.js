import { Grid } from "@mui/material";
import Hero from "./Hero.js";
import ContentBlock from "./ContentBlock";
import SideNav from "./sectionTypes/SideNav.js";

function Page({ page_data, screenSize, parent }) {
  console.log("page_data.parent", page_data.parent);
  let sectionPadding = true;

  // Seperate out data to conditionally render heros and content sections if they exist
  let hero_data = [];
  let content_blocks = [];
  let parent_hero_data = [];
  let parent_content_blocks_data = [];
  let heros;
  let parentHeros;
  let pageContent;
  let parentPageContent;
  let sideNav = null;
  let customBlocks = page_data.flexibleContent.customContentBlocks;
  if (parent) {
    sideNav = parent.children.nodes;
  }
  if (customBlocks) {
    for (let block of customBlocks) {
      if (block.__typename === "FlexibleContentCustomContentBlocksHero") {
        hero_data.push(block);
      } else if (
        block.__typename === "FlexibleContentCustomContentBlocksSection"
      ) {
        content_blocks.push(block);
      }
    }
  }
  // Find Heros and Content of parent if there is one
  if (parent) {
    for (let block of parent.flexibleContent.customContentBlocks) {
      if (block.__typename === "FlexibleContentCustomContentBlocksHero") {
        parent_hero_data.push(block);
      } else if (
        block.__typename === "FlexibleContentCustomContentBlocksSection"
      ) {
        parent_content_blocks_data.push(block);
      }
    }
  }
  // Loop through heros to pass them all onto the page
  if (hero_data.length > 0) {
    heros = hero_data.map((hero, index) => {
      return (
        <div key={index}>
          <Hero hero_data={hero} sectionPadding={false} />
        </div>
      );
    });
  }
  // Do the same if there is a parent
  if (parent && parent_hero_data.length > 0) {
    parentHeros = parent_hero_data.map((hero, index) => {
      return (
        <div key={index}>
          <Hero hero_data={hero} sectionPadding={true} />
        </div>
      );
    });
  }
  // Loop through content blocks to pass them all onto the page
  if (content_blocks.length > 0) {
    pageContent = content_blocks.map((content, index) => {
      return (
        <div key={index}>
          <ContentBlock
            content_data={content}
            screenSize={screenSize}
            sectionPadding={false}
          />
        </div>
      );
    });
  }
  // Do the same if there is a parent
  if (parent && parent_content_blocks_data.length > 0) {
    parentPageContent = parent_content_blocks_data.map((content, index) => {
      return (
        <div key={index}>
          <ContentBlock
            content_data={content}
            screenSize={screenSize}
            sectionPadding={true}
          />
        </div>
      );
    });
  }
  // TO DO: loop through content section and add that in
  return (
    <div className="page">
      {
        parent ? (
          <>
            {parentHeros}
            {parentPageContent}
            <Grid
              container
              sx={{ display: "flex", justifyContent: "space-between" }}
              className="section"
            >
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <div style={{ width: "100%" }}>
                  <SideNav sideNav={sideNav} parentSlug={parent.slug} />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={8.5} lg={8.5} xl={8.5}>
                <div style={{ width: "100%" }}>
                  {heros}
                  {pageContent}
                </div>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            {heros}
            {pageContent}
          </>
        )
        /* TO DO: if there is a parent make another grid that has a side nav and then also the rest of the stuff */
      }
    </div>
  );
}

export default Page;
