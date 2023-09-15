import TextBlock from "./contentTypes/TextBlock.js";
import ImageBlock from "./contentTypes/ImageBlock.js";
import ButtonBlock from "./contentTypes/ButtonBlock.js";
import ProviderBlock from "./contentTypes/ProviderBlock.js";

function Column({ column_data }) {
  const rows = column_data.rows.map((row, index) => {
    console.log("row", row.__typename);
    if (
      row.__typename ===
      "FlexibleContentCustomContentBlocksContentSectionColumnRowsText"
    ) {
      return (
        <div className="row" key={index}>
          <TextBlock />
        </div>
      );
    }
    if (
      row.__typename ===
      "FlexibleContentCustomContentBlocksContentSectionColumnRowsImages"
    ) {
      return (
        <div className="row" key={index}>
          <ImageBlock />
        </div>
      );
    }
    if (
      row.__typename ===
      "FlexibleContentCustomContentBlocksContentSectionColumnRowsButtons"
    ) {
      return (
        <div className="row" key={index}>
          <ButtonBlock />
        </div>
      );
    }
    if (
      row.__typename ===
      "FlexibleContentCustomContentBlocksContentSectionColumnRowsProviderBlock"
    ) {
      return (
        <div className="row" key={index}>
          <ProviderBlock />
        </div>
      );
    }
  });
  return <div className="column">{rows}</div>;
}

export default Column;
