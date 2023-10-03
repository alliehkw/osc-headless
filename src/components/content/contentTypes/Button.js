import { Link } from "react-router-dom";
function Button({ button_data }) {
  let url;
  if (button_data.linkType === "url") {
    url = button_data.url;
  } else if (button_data.linkType === "document" && button_data.document) {
    url = button_data.document.nodes[0].mediaItemUrl;
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
        <button className={button_data.buttonBackgroundColor}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {button_data.buttonText}
          </a>
        </button>
      )}
    </>
  );
}

export default Button;
