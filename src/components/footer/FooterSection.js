import FooterColumn from "./FooterColumn.js";
function FooterSection({ footer_data, footerSection }) {
  return (
    <>
      {footerSection === "practice-details" ? (
        <div className="practice-details">
          <FooterColumn details_data={footer_data} />
        </div>
      ) : (
        <div className="footer-links">
          {footer_data.children.map((column, index) => {
            return (
              <div key={index}>
                <FooterColumn details_data={column} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default FooterSection;
