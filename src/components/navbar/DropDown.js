import { Link, Outlet } from "react-router-dom";
function DropDown({ drop_down }) {
  //  TO DO: add in links and such after dynamically creating the pages
  const dropDownBlock = drop_down.map((dd, index) => {
    let slug = dd.node.connectedNode.node.slug;
    return (
      <ul className="drop-down" key={index}>
        <Link to={slug}>
          <div>
            <p>{dd.node.label}</p>
          </div>
        </Link>
      </ul>
    );
  });
  return (
    <div className="drop-down">
      {dropDownBlock}
      <Outlet />
    </div>
  );
}

export default DropDown;
