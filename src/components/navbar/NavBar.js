import React, { useState, useEffect } from "react";
import MenuItems from "./MenuItems";
function NavBar({ menu_data }) {
  const [menuItems, setMenuItems] = useState([]);
  const [dropDowns, setDropDowns] = useState({});
  // Seperate nav items into parents and their drop down components
  useEffect(() => {
    const menuItemsArray = [];
    const dropDownsObj = {};
    for (const menu_item of menu_data) {
      const { parentId } = menu_item.node;
      if (parentId == null) {
        menuItemsArray.push(menu_item);
      } else {
        if (!dropDownsObj[parentId]) {
          dropDownsObj[parentId] = [];
        }
        dropDownsObj[parentId].push(menu_item);
      }
    }
    setMenuItems(menuItemsArray);
    setDropDowns(dropDownsObj);
  }, []);

  return (
    <div className="navbar">
      <div className="menu-items">
        <MenuItems menu_items={menuItems} drop_downs={dropDowns} />
      </div>
    </div>
  );
}

export default NavBar;
