import Column from "./Column.js";
import "../../styles/contentblock.css";

function ContentBlock({ content_data }) {
  const columns = content_data.column;
  console.log("content_data", content_data);
  let numberOfColumns = 0;
  let contentColumns = columns.map((column, index) => {
    numberOfColumns++;
    return (
      <div key={index}>
        <Column column_data={column} numberOfColumns={numberOfColumns} />
      </div>
    );
  });
  console.log("content_data.sectionHeader", content_data.sectionHeader);
  return (
    <div className={`content-block ${content_data.backgroundColor} `}>
      {content_data.sectionHeader || content_data.sectionSubtext ? (
        <div
          className={`section-header-container ${content_data.headerAlignment}`}
        >
          {content_data.sectionHeader ? (
            <h2 className={`${content_data.headerWidth}`}>
              {content_data.sectionHeader}
            </h2>
          ) : null}
          {content_data.sectionSubtext ? (
            <p className={`body-text ${content_data.headerWidth}`}>
              {content_data.sectionSubtext}
            </p>
          ) : null}
        </div>
      ) : null}
      <div className="columns">{contentColumns}</div>
    </div>
  );
}

export default ContentBlock;
