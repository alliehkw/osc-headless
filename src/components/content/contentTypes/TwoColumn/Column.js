import Title from "./Title.js";
import RichText from "./RichText.js";
import Image from "./Image.js";
import ReviewBlockRotator from "./ReviewBlockRotator.js";
import Buttons from "../Buttons.js";
function Column({ column_data, screenSize }) {
  let columns;
  if (column_data.columnContent) {
    columns = column_data.columnContent.map((column, index) => {
      if (
        column.__typename ===
        "FlexibleContentCustomContentBlocksSectionColumnBlocksTwoColumnColumnColumnContentTitle"
      ) {
        return <Title key={index} title_data={column} />;
      }
      if (
        column.__typename ===
        "FlexibleContentCustomContentBlocksSectionColumnBlocksTwoColumnColumnColumnContentRichTextWysiwyg"
      ) {
        return <RichText key={index} rich_text_data={column} />;
      }
      if (
        column.__typename ===
        "FlexibleContentCustomContentBlocksSectionColumnBlocksTwoColumnColumnColumnContentImage"
      ) {
        return <Image key={index} image_data={column} />;
      }
      if (
        column.__typename ===
        "FlexibleContentCustomContentBlocksSectionColumnBlocksTwoColumnColumnColumnContentRotator"
      ) {
        return <ReviewBlockRotator key={index} review_content={column} />;
      }
      if (
        column.__typename ===
        "FlexibleContentCustomContentBlocksSectionColumnBlocksTwoColumnColumnColumnContentForceContentApart"
      ) {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexGrow: 1,
              height: "100%",
              minHeight: "10px",
            }}
          ></div>
        );
      }
      if (
        column.__typename ===
        "FlexibleContentCustomContentBlocksSectionColumnBlocksTwoColumnColumnColumnContentButtons"
      ) {
        return (
          <Buttons key={index} buttons_data={column} screenSize={screenSize}>
            buttons
          </Buttons>
        );
      }
    });
  }
  return (
    <div
      className={column_data.gap[0]}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {columns}
    </div>
  );
}

export default Column;
