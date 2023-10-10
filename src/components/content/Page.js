import { Grid } from "@mui/material";
import Hero from "./Hero.js";
import ContentBlock from "./ContentBlock";

function Page({ page_data, screenSize, parent }) {
  // Seperate out data to conditionally render heros and content sections if they exist
  let hero_data = [];
  let content_blocks = [];
  let parent_hero_data = [];
  let parent_content_blocks_data = [];
  let heros;
  let parentHeros;
  let pageContent;
  let parentPageContent;
  let customBlocks = page_data.flexibleContent.customContentBlocks;
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
          <Hero hero_data={hero} />
        </div>
      );
    });
  }
  // Do the same if there is a parent
  if (parent && parent_hero_data.length > 0) {
    parentHeros = parent_hero_data.map((hero, index) => {
      return (
        <div key={index}>
          <Hero hero_data={hero} />
        </div>
      );
    });
  }
  // Loop through content blocks to pass them all onto the page
  if (content_blocks.length > 0) {
    pageContent = content_blocks.map((content, index) => {
      return (
        <div key={index}>
          <ContentBlock content_data={content} screenSize={screenSize} />
        </div>
      );
    });
  }
  // Do the same if there is a parent
  if (parent && parent_content_blocks_data.length > 0) {
    parentPageContent = parent_content_blocks_data.map((content, index) => {
      return (
        <div key={index}>
          <ContentBlock content_data={content} screenSize={screenSize} />
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
            <Grid container>
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <div
                  style={{
                    backgroundColor: "pink",
                    height: "300px",
                    width: "100%",
                  }}
                >
                  nav bar
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                <div
                  style={{
                    backgroundColor: "yellow",
                    height: "100%",
                    width: "100%",
                  }}
                >
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
