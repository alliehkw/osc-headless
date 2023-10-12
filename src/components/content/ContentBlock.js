import { Box } from "@mui/material";
import OneColumn from "./sections/OneColumn.js";
import TwoColumn from "./sections/TwoColumn.js";
import ThreeColumn from "./sections/ThreeColumn.js";

function ContentBlock({ content_data, screenSize, sectionPadding }) {
  let sectionType = "section";
  if (!sectionPadding) {
    sectionType = null;
  }

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
      "FlexibleContentCustomContentBlocksSectionColumnBlocksTwoColumn"
    ) {
      return (
        <div key={index}>
          <TwoColumn
            column_data={column.column}
            column_layout={column.columnLayout}
            column_alignment={column.contentVerticalJustification}
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
    <Box className={`${sectionType} ${content_data.backgroundColor[0]}`}>
      {contentColumns ? contentColumns : null}
    </Box>
  );
}

export default ContentBlock;
