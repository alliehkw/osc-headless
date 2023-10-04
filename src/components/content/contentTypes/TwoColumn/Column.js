import Title from "./Title.js";
import RichText from "./RichText.js";
import Image from "./Image.js";
function Column({ column_data }) {
  let columns = column_data.columnContent.map((column, index) => {
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksTwoColumnColumnColumnContentTitle"
    ) {
      return <Title key={index} title_data={column} />;
    }
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksTwoColumnColumnColumnContentRichText"
    ) {
      return <RichText key={index} rich_text_data={column} />;
    }
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksTwoColumnColumnColumnContentImage"
    ) {
      return <Image key={index} image_data={column} />;
    }
  });
  return (
    <div
      className={column_data.gap[0]}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {columns}
    </div>
  );
}

export default Column;
