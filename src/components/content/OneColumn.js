import Title from "./contentTypes/Title.js";

function OneColumn({ column_data }) {
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
  });

  return <div className="OneColumn">{columns}</div>;
}

export default OneColumn;
