import MediaCard from "../contentTypes/ThreeColumn/MediaCard";
import StatsCard from "../contentTypes/ThreeColumn/StatsCard";

function ThreeColumn({ three_column_data, screenSize }) {
  let columns = three_column_data.map((column, index) => {
    console.log("column", column);
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksThreeColumnThreeColumnMediaCard"
    ) {
      // console.log("column", column);
      return (
        <div key={index}>
          <MediaCard media_card_data={column} screenSize={screenSize} />
        </div>
      );
    }
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksThreeColumnThreeColumnStatsCard"
    ) {
      return (
        <div key={index}>{/* <StatsCard stat_card_data={column} /> */}</div>
      );
    }
  });
  return <div style={{ maxWidth: "1440px", margin: "auto" }}>{columns}</div>;
}

export default ThreeColumn;
