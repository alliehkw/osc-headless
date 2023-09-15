import Column from "./Column.js";
import "../../styles/contentblock.css";

function ContentBlock({ content_data }) {
  const columns = content_data.column;
  let contentColumns = columns.map((column, index) => {
    return (
      <div key={index}>
        <Column column_data={column} />
      </div>
    );
  });
  return (
    <div className={`content-block ${content_data.backgroundColor}`}>
      <div className="section-header-container">
        {content_data.sectionHeader ? (
          <h2 className={content_data.headerTextAlignment}>
            {content_data.sectionHeader}
          </h2>
        ) : null}
        {content_data.sectionSubtext ? (
          <p className={`body-text ${content_data.subtextAlignemnt}`}>
            {content_data.sectionSubtext}
          </p>
        ) : null}
      </div>
      <div className="columns">{contentColumns}</div>
    </div>
  );
}

export default ContentBlock;
