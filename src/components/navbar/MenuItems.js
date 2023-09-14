// import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import MenuItem from "./MenuItem.js";
import DropDown from "./DropDown.js";
function MenuItems({
  menu_items,
  drop_downs,
  dropDownVisible,
  setDropDownVisible,
}) {
  // console.log(drop_downs);
  const handleMouseEnter = (id) => {
    setDropDownVisible({ ...dropDownVisible, [id]: true });
  };

  const handleMouseLeave = (id) => {
    setDropDownVisible({ ...dropDownVisible, [id]: false });
  };
  const menuItems = menu_items.map((data, index) => {
    const currentId = data.node.id;
    const this_drop_downs = drop_downs[currentId];
    let slug;
    if (!this_drop_downs) {
      slug = `/${data.node.connectedNode.node.slug}`;
      if (slug === "/home") {
        slug = "/";
      }
    }
    return (
      <div
        className="menu-item"
        key={index}
        onMouseEnter={() => handleMouseEnter(currentId)}
        onMouseLeave={() => handleMouseLeave(currentId)}
      >
        <ul>
          {slug ? (
            <Link to={slug}>
              <div>
                <MenuItem item_data={data.node} />
              </div>
            </Link>
          ) : (
            <div>
              <MenuItem
                item_data={data.node}
                dropDownVisible={dropDownVisible}
                setDropDownVisible={setDropDownVisible}
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
    );
  });
  return (
    <>
      <div className="menu-items">{menuItems}</div>
      <Outlet />
    </>
  );
}

export default MenuItems;
