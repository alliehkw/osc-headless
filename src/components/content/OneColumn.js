import Title from "./contentTypes/Title.js";
import RichText from "./contentTypes/RichText.js";

function OneColumn({ column_data }) {
  //   console.log("column_data", column_data);
  let columns = column_data.map((column, index) => {
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumnOneColumnTitle"
    ) {
      return (
        <div key={index}>
          <Title title_data={column} />
        </div>
      );
    }
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumnOneColumnRichText"
    ) {
      return (
        <div key={index}>
          <RichText rich_text_data={column} />
        </div>
      );
    }
  });

  return <div className="OneColumn">{columns}</div>;
}

export default OneColumn;
