import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SideNav({ sideNav, parentSlug }) {
  const { pathname } = useLocation();
  let linkColor = "#112E3D";

  let navItems = sideNav.map((item, index) => {
    let slug = `/${parentSlug}/${item.slug}`;
    if (pathname === slug) {
      linkColor = "#008771";
    } else {
      linkColor = "#112E3D";
    }
    return (
      <div key={index} style={{ textAlign: "left" }}>
        <Link
          to={slug}
          className="allCaps"
          id="side-nav"
          style={{ color: linkColor }}
        >
          {item.title}
        </Link>
      </div>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #C4DAE3",
        padding: "24px",
        gap: "32px",
        marginBottom: "48px",
      }}
    >
      {navItems}
    </div>
  );
}

export default SideNav;
