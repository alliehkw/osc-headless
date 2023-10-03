import { Box } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import OneColumn from "./OneColumn.js";

function ContentBlock({ content_data, review_content }) {
  // const theme = useTheme();
  // console.log("content_data", content_data);
  const columnBlocks = content_data.columnBlocks;
  // console.log("content_data", content_data);
  let contentColumns = columnBlocks.map((column, index) => {
    // TO DO: handle other column block types!!
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumn"
    ) {
      return (
        <div key={index}>
          <OneColumn column_data={column.oneColumn} />
        </div>
      );
    }
  });
  return (
    // TO DO: add in custom padding dynamically !!
    <Box className={`section ${content_data.backgroundColor[0]}`}>
      {contentColumns}
    </Box>
  );
}

export default ContentBlock;
