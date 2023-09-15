import Hero from "./Hero.js";
function Page({ page_data }) {
  // Seperate out data to conditionally render heros and content sections if they exist
  let hero_data = [];
  let content_blocks = [];
  let heros;
  let customBlocks = page_data.flexibleContent.customContentBlocks;
  if (customBlocks) {
    for (let block of customBlocks) {
      if (block.__typename === "FlexibleContentCustomContentBlocksHero") {
        hero_data.push(block);
      } else if (
        block.__typename === "FlexibleContentCustomContentBlocksContentSection"
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
  // TO DO: loop through content section and add that in
  return (
    <div className="page">
      {/* {hero_data.length > 0 ? <Hero hero_data={hero_data} /> : null} */}
      {heros}
      {/* <h3>{page_data.title}</h3> */}
    </div>
  );
}
export default Page;
