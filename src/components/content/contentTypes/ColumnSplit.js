function ColumnSplit({ column_split_data }) {
  // Figure out which of the columns is larger
  let leftClass = "left";
  let rightClass = "right";
  if (column_split_data.whichSideIsLarger === "left") {
    leftClass = leftClass + " larger";
  } else {
    rightClass = rightClass + " larger";
  }
  return (
    <div className="column-split">
      <div className={leftClass}>
        {column_split_data.leftSideContentType === "text" ? (
          <div className="text-split">
            {/* TO DO: add in classname for text color  */}
            <p
              dangerouslySetInnerHTML={{
                __html: column_split_data.leftSideText,
              }}
            ></p>
          </div>
        ) : (
          <div className="image-wrapper">
            <img
              src={column_split_data.leftSideImage.node.mediaItemUrl}
              alt={column_split_data.leftSideImage.node.altText}
            />
          </div>
        )}
      </div>
      <div className={rightClass}>
        {column_split_data.rightSideContentType === "text" ? (
          <div className="text-split">
            {/* TO DO: add in classname for text color  */}
            <p
              dangerouslySetInnerHTML={{
                __html: column_split_data.rightSideText,
              }}
            ></p>
          </div>
        ) : (
          <div className="image-wrapper">
            <img
              src={column_split_data.rightSideImage.node.mediaItemUrl}
              alt={column_split_data.rightSideImage.node.altText}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ColumnSplit;
