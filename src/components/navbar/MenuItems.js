import MenuItem from "./MenuItem.js";
import DropDown from "./DropDown.js";
function MenuItems({ menu_items, drop_downs }) {
  const menuItems = menu_items.map((data, index) => {
    const this_drop_downs = drop_downs[data.node.id];
    return (
      <div className="menu-item" key={index}>
        <MenuItem item_data={data.node} />
        <DropDown drop_down={this_drop_downs} />
      </div>
    );
  });

  return (
    <div className="navbar">
      <div className="menu-items">{menuItems}</div>
    </div>
  );
}

export default MenuItems;
