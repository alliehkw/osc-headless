import Title from "./contentTypes/Title.js";
import RichText from "./contentTypes/RichText.js";
import Buttons from "./contentTypes/Buttons.js";
import Image from "./contentTypes/Image.js";
import Video from "./contentTypes/Video.js";
import Accolades from "./contentTypes/Accolades.js";

function OneColumn({ column_data, class_data, screenSize }) {
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
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumnOneColumnButtons"
    ) {
      return (
        <div key={index}>
          <Buttons buttons_data={column} />
        </div>
      );
    }
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumnOneColumnImage"
    ) {
      return (
        <div key={index}>
          <Image image_data={column} screenSize={screenSize} />
        </div>
      );
    }
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumnOneColumnVideo"
    ) {
      return (
        <div key={index}>
          <Video video_data={column} screenSize={screenSize} />
        </div>
      );
    }
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumnOneColumnAccolades"
    ) {
      return (
        <div key={index}>
          <Accolades accolade_data={column} screenSize={screenSize} />
        </div>
      );
    }
    if (
      column.__typename ===
      "FlexibleContentCustomContentBlocksSectionColumnBlocksOneColumnOneColumnSpacer"
    ) {
      console.log("column", column.spacerSize[0]);
      return (
        <div key={index}>
          <div className={column.spacerSize[0]}></div>
        </div>
      );
    }
  });

  return <div className={`OneColumn ${class_data}`}>{columns}</div>;
}

export default OneColumn;
