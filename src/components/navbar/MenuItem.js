import DownCarrot from "../../icons/DownCarrot.js";

function MenuItem({ item_data, this_drop_downs, navbarHasColor }) {
  let navImage = item_data.customMenuItems.image;
  console.log(item_data);
  return (
    // Dynamically render either the label or the image
    <div className="menu-item">
      {navImage ? (
        <div className="nav-image-container">
          <img src={navImage.node.mediaItemUrl} alt={navImage.node.altText} />
        </div>
      ) : (
        <p className="allCaps">{item_data.label}</p>
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
