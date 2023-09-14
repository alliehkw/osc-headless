import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import MenuItem from "./MenuItem.js";
import DropDown from "./DropDown.js";
function MenuItems({
  menu_items,
  drop_downs,
  dropDownVisible,
  setDropDownVisible,
  navbarHasColor,
}) {
  // Split up the menu items between the text based and the button based so we can
  // format them in different divs
  const [textMenuItems, setTextMenuItems] = useState([]);
  const [buttonMenuItems, setButtonMenuItems] = useState([]);

  useEffect(() => {
    for (let item of menu_items) {
      if (item.customMenuItems.isThisAButton) {
        let formerButtonMenuItems = buttonMenuItems;
        formerButtonMenuItems.push(item);
        setButtonMenuItems(formerButtonMenuItems);
      } else {
        let formerTextMenuItems = textMenuItems;
        formerTextMenuItems.push(item);
        setTextMenuItems(formerTextMenuItems);
      }
    }
  }, [menu_items]);

  const handleMouseEnter = (id) => {
    setDropDownVisible({ ...dropDownVisible, [id]: true });
  };

  const handleMouseLeave = (id) => {
    setDropDownVisible({ ...dropDownVisible, [id]: false });
  };

  const textMenu = textMenuItems.map((data, index) => {
    const currentId = data.id;
    const this_drop_downs = drop_downs[currentId];
    let slug;
    if (!this_drop_downs) {
      slug = `/${data.connectedNode.node.slug}`;
      if (slug === "/home") {
        slug = "/";
      }
    }
    return (
      <div
        className="hover-container"
        key={index}
        onMouseEnter={() => handleMouseEnter(currentId)}
        onMouseLeave={() => handleMouseLeave(currentId)}
      >
        <div className="menu-item">
          <ul>
            {slug ? (
              <Link to={slug}>
                <div>
                  <MenuItem
                    item_data={data}
                    this_drop_downs={false}
                    navbarHasColor={navbarHasColor}
                    isButton={false}
                  />
                </div>
              </Link>
            ) : (
              <div>
                <MenuItem
                  item_data={data}
                  this_drop_downs={this_drop_downs}
                  navbarHasColor={navbarHasColor}
                  isButton={false}
                />
                {/* Hide / show drop down based on if its visible or not  */}
                <DropDown
                  drop_down={this_drop_downs}
                  isVisible={dropDownVisible[currentId]}
                />
              </div>
            )}
          </ul>
        </div>
      </div>
    );
  });

  const buttonMenu = buttonMenuItems.map((data, index) => {
    let slug = `/${data.connectedNode.node.slug}`;

    return (
      <div className="button-element" key={index}>
        <div className="menu-item">
          <ul>
            <Link to={slug}>
              <div>
                <MenuItem
                  item_data={data}
                  this_drop_downs={false}
                  navbarHasColor={navbarHasColor}
                  isButton={true}
                />
              </div>
            </Link>
          </ul>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="menu-items">{textMenu}</div>
      <div className="menu-items">{buttonMenu}</div>
      <Outlet />
    </>
  );
}

export default MenuItems;
