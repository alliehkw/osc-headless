import React, { useState, useEffect } from "react";
import MenuItems from "./MenuItems";

import "../../styles/navbar.css";
function NavBar({ menu_data }) {
  const [menuItems, setMenuItems] = useState([]);
  const [dropDowns, setDropDowns] = useState({});
  const [dropDownVisible, setDropDownVisible] = useState({});
  // State to hold the value of the navcolor - based on scroll
  const [navbarHasColor, setNavbarHasColor] = useState(false);
  // Seperate nav items into parents and their drop down components
  useEffect(() => {
    const menuItemsArray = [];
    const dropDownsObj = {};
    for (const menu_item of menu_data) {
      const { parentId } = menu_item;
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
  }, [menu_data]);

  // Create an object to track whether the drop downs are visible or not
  useEffect(() => {
    const updatedDropDownVisible = {};
    menuItems.forEach((data) => {
      const this_drop_downs = dropDowns[data.id];
      if (this_drop_downs) {
        updatedDropDownVisible[data.id] = false;
      }
    });
    setDropDownVisible(updatedDropDownVisible);
  }, [menuItems, dropDowns]);

  // Change navbar color state based on scroll location
  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbarHasColor(true);
    } else {
      setNavbarHasColor(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <div
      className={navbarHasColor ? "navbar-container color" : "navbar-container"}
    >
      <div className="navbar">
        <MenuItems
          menu_items={menuItems}
          drop_downs={dropDowns}
          dropDownVisible={dropDownVisible}
          setDropDownVisible={setDropDownVisible}
          navbarHasColor={navbarHasColor}
        />
      </div>
    </div>
  );
}

export default NavBar;
