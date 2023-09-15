import { Link, Outlet } from "react-router-dom";
function DropDown({ drop_down, isVisible }) {
  const dropDownBlock = drop_down.map((dd, index) => {
    let slug = dd.connectedNode.node.slug;
    return (
      <div key={index}>
        {isVisible ? (
          <ul className="drop-down">
            <Link to={slug}>
              <div>
                <p id="drop-down" className="allCaps">
                  {dd.label}
                </p>
              </div>
            </Link>
          </ul>
        ) : null}
      </div>
    );
  });
  return (
    <div className="drop-downs">
      {dropDownBlock}
      <Outlet />
    </div>
  );
}

export default DropDown;
