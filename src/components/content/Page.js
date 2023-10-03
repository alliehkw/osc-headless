import Hero from "./Hero.js";
import ContentBlock from "./ContentBlock";

function Page({ page_data, review_content }) {
  // Seperate out data to conditionally render heros and content sections if they exist
  let hero_data = [];
  let content_blocks = [];
  let heros;
  let pageContent;
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
  // console.log("content_blocks", content_blocks);
  // Loop through content blocks to pass them all onto the page
  if (content_blocks.length > 0) {
    pageContent = content_blocks.map((content, index) => {
      return (
        <div key={index}>
          <ContentBlock
            content_data={content}
            review_content={review_content}
          />
        </div>
      );
    });
  }
  // TO DO: loop through content section and add that in
  return (
    <div className="page">
      {heros}
      {pageContent}
    </div>
  );
}
export default Page;
