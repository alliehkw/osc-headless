import DownCarrot from "../../icons/DownCarrot.js";

import { useLocation } from "react-router-dom";
function MenuItem({ item_data, this_drop_downs, navbarHasColor, isButton }) {
  let navImage = item_data.customMenuItems.image;
  let navImageAlt = item_data.customMenuItems.imageAlt;
  // useLocation to determine which page where on to change the navbar colors
  const location = useLocation();
  // console.log("item_data", item_data.customMenuItems.image);
  return (
    // Dynamically render either the label or the image
    <>
      {/* If it's a button, render it as a button  */}
      {isButton ? (
        <button
          // This defines class based off of the defined button color, and the current location
          className={`nav-button ${item_data.customMenuItems.buttonColor} ${
            location.pathname === "/" ? "home" : "notHome"
          }`}
        >
          {item_data.label}
        </button>
      ) : (
        <div>
          {/* If there is a nav image, render the correct version of it based on scroll */}
          <div className="menu-item-label">
            {navImage ? (
              <div className="nav-image-container">
                <img
                  src={
                    navbarHasColor
                      ? navImageAlt.node.mediaItemUrl
                      : navImage.node.mediaItemUrl
                  }
                  alt={
                    navbarHasColor
                      ? navImageAlt.node.altText
                      : navImage.node.altText
                  }
                />
              </div>
            ) : (
              // If no navimage just render the title
              <p className="allCaps drop-down">{item_data.label}</p>
            )}
            {/* If this menu item has drop downs associated with it display a down carrot  */}
            {this_drop_downs ? (
              <DownCarrot
                className={
                  navbarHasColor ? "navbarHasColor" : "navbarTransparent"
                }
              />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

export default MenuItem;
