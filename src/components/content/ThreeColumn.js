import MediaCard from "./contentTypes/MediaCard";

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
  });
  return <div>{columns}</div>;
}

export default ThreeColumn;
