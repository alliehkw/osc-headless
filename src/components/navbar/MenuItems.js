import { Link, Outlet } from "react-router-dom";
import MenuItem from "./MenuItem.js";
import DropDown from "./DropDown.js";
function MenuItems({ menu_items, drop_downs }) {
  const menuItems = menu_items.map((data, index) => {
    const this_drop_downs = drop_downs[data.node.id];
    let slug;
    if (!this_drop_downs) {
      slug = `/${data.node.connectedNode.node.slug}`;
      if (slug === "/home") {
        slug = "/";
      }
    }
    return (
      <ul className="menu-item" key={index}>
        {slug ? (
          <Link to={slug}>
            <div>
              <MenuItem item_data={data.node} />
            </div>
          </Link>
        ) : (
          <div>
            <MenuItem item_data={data.node} />
            <DropDown drop_down={this_drop_downs} />
          </div>
        )}
      </ul>
    );
  });

  return (
    <div className="navbar">
      <div className="menu-items">{menuItems}</div>
      <Outlet />
    </div>
  );
}

export default MenuItems;
