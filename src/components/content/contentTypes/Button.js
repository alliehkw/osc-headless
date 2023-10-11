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
        <button className={`${button_data.buttonBackgroundColor}btn`}>
          <Link to={button_data.pageLink.node.slug} className="link-text">
            {button_data.buttonText}
          </Link>
        </button>
      ) : (
        <button
          className={`${button_data.buttonBackgroundColor}btn`}
          style={{ width: buttonWidth, paddingLeft: buttonPadding }}
        >
          <a type="button" href={url} target="_blank" rel="noopener noreferrer" className="link-text">
            {button_data.buttonText}
          </a>
        </button>
      )}
    </>
  );
}

export default Button;
