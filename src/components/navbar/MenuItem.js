import DownCarrot from "../../icons/DownCarrot.js";

function MenuItem({ item_data, this_drop_downs, navbarHasColor }) {
  let navImage = item_data.customMenuItems.image;
  let navImageAlt = item_data.customMenuItems.imageAlt;
  if (navImageAlt) {
    console.log("navImageAlt", navImageAlt.node.mediaItemUrl);
    console.log("mavbarHasColor", navbarHasColor);
  }
  return (
    // Dynamically render either the label or the image
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
              navbarHasColor ? navImageAlt.node.altText : navImage.node.altText
            }
          />
        </div>
      ) : (
        <p className="allCaps drop-down">{item_data.label}</p>
      )}
      {/* If this menu item has drop downs associated with it display a down carrot  */}
      {this_drop_downs ? (
        <DownCarrot
          className={navbarHasColor ? "navbarHasColor" : "navbarTransparent"}
        />
      ) : null}
    </div>
  );
}

export default MenuItem;
