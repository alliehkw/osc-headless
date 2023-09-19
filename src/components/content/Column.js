import TextBlock from "./contentTypes/TextBlock.js";
import ImageBlock from "./contentTypes/ImageBlock.js";
import ButtonBlock from "./contentTypes/ButtonBlock.js";
import ProviderBlock from "./contentTypes/ProviderBlock.js";
import MediaCard from "./contentTypes/MediaCard.js";
import MapBlock from "./contentTypes/MapBlock.js";
import ReviewBlockRotator from "./contentTypes/ReviewBlockRotator.js";
import Accolades from "./contentTypes/Accolades.js";

function Column({ column_data, numberOfColumns, review_content }) {
  const rows = column_data.rows.map((row, index) => {
    if (
      row.__typename ===
      "FlexibleContentCustomContentBlocksContentSectionColumnRowsText"
    ) {
      return (
        <div className="row" key={index}>
          <TextBlock text_data={row} numberOfColumns={numberOfColumns} />
        </div>
      );
    }
    if (
      row.__typename ===
      "FlexibleContentCustomContentBlocksContentSectionColumnRowsImages"
    ) {
      return (
        <div className="row" key={index}>
          <ImageBlock
            image_data={row}
            numberOfColumns={numberOfColumns}
            imageAlignment={column_data.rows[index].imageAlignment}
            gapBetweenImages={column_data.rows[index].gapBetweenImages}
          />
        </div>
      );
    }
    if (
      row.__typename ===
      "FlexibleContentCustomContentBlocksContentSectionColumnRowsButtons"
    ) {
      return (
        <div className="row" key={index}>
          <ButtonBlock button_data={row} numberOfColumns={numberOfColumns} />
        </div>
      );
    }
    if (
      row.__typename ===
      "FlexibleContentCustomContentBlocksContentSectionColumnRowsProviderBlock"
    ) {
      return (
        <div className="row" key={index}>
          <ProviderBlock
            provider_data={row}
            numberOfColumns={numberOfColumns}
          />
        </div>
      );
    }
    if (
      row.__typename ===
      "FlexibleContentCustomContentBlocksContentSectionColumnRowsMap"
    ) {
      return (
        <div className="row" key={index}>
          <MapBlock map_data={row} numberOfColumns={numberOfColumns} />
        </div>
      );
    }
    if (
      row.__typename ===
      "FlexibleContentCustomContentBlocksContentSectionColumnRowsMediaCard"
    ) {
      return (
        <div className="row" key={index}>
          <MediaCard card_data={row} numberOfColumns={numberOfColumns} />
        </div>
      );
    }
    if (
      row.__typename ===
      "FlexibleContentCustomContentBlocksContentSectionColumnRowsReviewBlock"
    ) {
      return (
        <div className="row" key={index}>
          <ReviewBlockRotator
            review_block_data={row}
            numberOfColumns={numberOfColumns}
            review_content={review_content}
          />
        </div>
      );
    }
    if (
      row.__typename ===
      "FlexibleContentCustomContentBlocksContentSectionColumnRowsAccoladesBlock"
    ) {
      return (
        <div className="row" key={index}>
          <Accolades accolade_data={row} numberOfColumns={numberOfColumns} />
        </div>
      );
    }
  });
  return (
    <div
      className={`column ${column_data.columnWidth[0]} _${numberOfColumns}`}
      id={`${column_data.columnAlignment}`}
    >
      {column_data.columnHeader ? <h3>{column_data.columnHeader}</h3> : null}
      {rows}
    </div>
  );
}

export default Column;
