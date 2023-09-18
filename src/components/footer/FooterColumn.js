import { Link } from "react-router-dom";

function FooterColumn({ details_data }) {
  const infoLineBlock = details_data.children.map((row, index) => {
    return (
      <div key={index} className="footer-link">
        {row.connectedNode !== null ? (
          <Link to={row.connectedNode.node.slug}>{row.label}</Link>
        ) : (
          <>{row.label}</>
        )}
      </div>
    );
  });
  return (
    <div className="footer-column">
      {details_data.label !== "Footer Practice Details" ? (
        <p className="allCaps footer-title">{details_data.label}</p>
      ) : null}
      {infoLineBlock}
    </div>
  );
}

export default FooterColumn;
