import { Link } from "react-router-dom";
function Button({ button_data, blockWidth, screenSize }) {
  let url;
  if (button_data.linkType === "url") {
    url = button_data.url;
  } else if (button_data.linkType === "document" && button_data.document) {
    url = button_data.document.nodes[0].mediaItemUrl;
  }
  let buttonWidth = "auto";
  let buttonPadding = null;
  console.log("screenSize", screenSize);
  if (blockWidth === "singleLine") {
    buttonWidth = "fit-content";
    buttonPadding = "0";
    if (screenSize.width < 600) {
      buttonWidth = "auto";
    }
  }
  return (
    <>
      {button_data.linkType === "page" ? (
        <button className={button_data.buttonBackgroundColor}>
          <Link to={button_data.pageLink.node.slug}>
            {button_data.buttonText}
          </Link>
        </button>
      ) : (
        <button
          className={button_data.buttonBackgroundColor}
          style={{ width: buttonWidth, paddingLeft: buttonPadding }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            {button_data.buttonText}
          </a>
        </button>
      )}
    </>
  );
}

export default Button;
