import TextBlock from "./contentTypes/TextBlock.js";
import ImageBlock from "./contentTypes/ImageBlock.js";
import ButtonBlock from "./contentTypes/ButtonBlock.js";
import ProviderBlock from "./contentTypes/ProviderBlock.js";

function Column({ column_data, numberOfColumns }) {
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
          <ImageBlock image_data={row} numberOfColumns={numberOfColumns} />
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
  });
  return <div className="column">{rows}</div>;
}

export default Column;
