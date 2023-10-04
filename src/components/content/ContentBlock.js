import { Box } from "@mui/material";
import OneColumn from "./SectionTypes/OneColumn.js";
import ThreeColumn from "./SectionTypes/ThreeColumn.js";

function ContentBlock({ content_data, review_content, screenSize }) {
  const columnBlocks = content_data.columnBlocks;

  let contentColumns = columnBlocks.map((column, index) => {
    // TO DO: handle other column block types!!
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumn"
    ) {
      return (
        <div key={index}>
          <OneColumn
            column_data={column.oneColumn}
            class_data={content_data.gap[0]}
            screenSize={screenSize}
          />
        </div>
      );
    }
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksThreeColumn"
    ) {
      return (
        <div key={index}>
          <ThreeColumn
            three_column_data={column.threeColumn}
            screenSize={screenSize}
          />
        </div>
      );
    }
  });
  return (
    // TO DO: add in custom padding dynamically !!
    <Box className={`section ${content_data.backgroundColor[0]} `}>
      {contentColumns}
    </Box>
  );
}

export default ContentBlock;
