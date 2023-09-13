import MenuItem from "./MenuItem";
function NavBar({ nav_data }) {
  // TO DO: only make menu items that are the main item. then send in the drop down stuff
  const menuItems = nav_data.map((data, index) => {
    console.log(data);
    return (
      <div className="menu-item" key={index}>
        <MenuItem item_data={data.node} />
      </div>
    );
  });

  return (
    <div className="navbar">
      <div className="menu-items">{menuItems}</div>
    </div>
  );
}

export default NavBar;
