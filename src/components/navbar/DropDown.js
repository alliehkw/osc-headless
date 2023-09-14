import { Link, Outlet } from "react-router-dom";
function DropDown({ drop_down, isVisible }) {
  const dropDownBlock = drop_down.map((dd, index) => {
    let slug = dd.node.connectedNode.node.slug;
    return (
      <>
        {isVisible ? (
          <ul className="drop-down" key={index}>
            <Link to={slug}>
              <div>
                <p id="drop-down" className="allCaps">
                  {dd.node.label}
                </p>
              </div>
            </Link>
          </ul>
        ) : null}
      </>
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
