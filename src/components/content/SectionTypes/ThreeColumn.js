import MediaCard from "../contentTypes/ThreeColumn/MediaCard";
import StatsCard from "../contentTypes/ThreeColumn/StatsCard";

function ThreeColumn({ three_column_data, screenSize }) {
  let columns = three_column_data.map((column, index) => {
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksThreeColumnThreeColumnMediaCard"
    ) {
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
        <div key={index}>
          <StatsCard stat_card_data={column} />
        </div>
      );
    }
  });
  return <div>{columns}</div>;
}

export default ThreeColumn;
