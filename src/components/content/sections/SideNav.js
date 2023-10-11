import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SideNav({ sideNav, parentSlug }) {
  const { pathname } = useLocation();
  let linkColor = "#112E3D";

  const sortedNav = sideNav.sort((a, b) => a.menuOrder - b.menuOrder);

  let navItems = sortedNav.map((item, index) => {
    let nestedLinks = item.children.nodes;
    let slug = `/${parentSlug}/${item.slug}`;
    if (item.children.nodes.length > 0) {
      console.log(item);
      let sortedNested = nestedLinks.sort((a, b) => a.menuOrder - b.menuOrder);
      nestedLinks = sortedNested.map((nest, index) => {
        return (
          <div key={index}>
            <Link
              to={`/${parentSlug}/${nest.slug}`}
              style={{ color: linkColor }}
            >
              <li>{nest.title}</li>
            </Link>
          </div>
        );
      });
    }
    console.log("nestedLinks", nestedLinks);

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
        {nestedLinks ? nestedLinks : null}
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
