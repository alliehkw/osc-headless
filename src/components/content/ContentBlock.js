import Column from "./Column.js";
import "../../styles/contentblock.css";

function ContentBlock({ content_data, review_content }) {
  const columns = content_data.column;
  let numberOfColumns = 0;
  let contentColumns = columns.map((column, index) => {
    numberOfColumns++;
    return (
      <div key={index}>
        <Column
          column_data={column}
          numberOfColumns={numberOfColumns}
          review_content={review_content}
        />
      </div>
    );
  });
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
