import { Link, Outlet } from "react-router-dom";
import "../../styles/footer.css";

function Footer({ footerItems }) {
  const footerNav = footerItems.map((item, index) => {
    console.log("item", item);
    return (
      <Link to={item.connectedNode.node.slug}>
        <div className="footer-item" key={index}>
          <p className="allCaps">{item.label}</p>
        </div>
      </Link>
    );
  });
  return (
    <div className="footer-container">
      <div className="footer-content">{footerNav}</div>
    </div>
  );
}

export default Footer;
