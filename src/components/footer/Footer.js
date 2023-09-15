import { Link, Outlet } from "react-router-dom";
import "../../styles/footer.css";

function Footer({ footerItems }) {
  const footerNav = footerItems.map((item, index) => {
    return (
      <div key={index}>
        <Link to={item.connectedNode.node.slug}>
          <div className="footer-item">
            <p className="allCaps">{item.label}</p>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <div className="footer-container">
      <div className="footer-content">{footerNav}</div>
    </div>
  );
}

export default Footer;
