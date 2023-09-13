function MenuItem({ item_data, dropDownVisible, setDropDownVisible }) {
  let navImage = item_data.customMenuItems.image;
  // let currentId = item_data.id;
  // const handleMouseEnter = (id) => {
  //   setDropDownVisible({ ...dropDownVisible, [currentId]: true });
  // };

  // const handleMouseLeave = (id) => {
  //   setDropDownVisible({ ...dropDownVisible, [currentId]: false });
  // };
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
    </div>
  );
}

export default MenuItem;
