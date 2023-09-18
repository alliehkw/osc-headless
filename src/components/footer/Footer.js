import FooterSection from "./FooterSection.js";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

function Footer({ footerItems }) {
  const footerSections = {};
  // Helper function to find children of a parent id
  function findChildren(parentId) {
    const children = [];
    footerItems.forEach((item) => {
      if (item.parentId === parentId) {
        const child = { ...item };
        // Recursively find children of this child
        const nestedChildren = findChildren(item.id);
        if (nestedChildren.length > 0) {
          child.children = nestedChildren;
        }
        children.push(child);
      }
    });
    return children;
  }

  // Find top-level parents (items with parentId === null)
  footerItems.forEach((item) => {
    if (item.parentId === null) {
      const parent = { ...item };
      const children = findChildren(item.id);
      if (children.length > 0) {
        parent.children = children;
      }
      footerSections[item.id] = parent;
    }
  });

  let navImage;
  let practiceDetails;
  let footerLinks;
  for (const key in footerSections) {
    if (footerSections[key].label === "Logo") {
      navImage = footerSections[key];
    } else if (footerSections[key].label === "Footer Practice Details") {
      practiceDetails = footerSections[key];
    } else {
      footerLinks = footerSections[key];
    }
  }

  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-image">
          <Link to="/">
            <div className="nav-image-container" id="footer">
              <img
                src={navImage.customMenuItems.image.node.mediaItemUrl}
                alt={navImage.customMenuItems.image.node.altText}
              />
            </div>
          </Link>
        </div>
        <div className="footer-content">
          <FooterSection
            footer_data={practiceDetails}
            footerSection={"practice-details"}
          />
          <FooterSection footer_data={footerLinks} footerSection={"links"} />
        </div>
        <div className="fine-print">
          <p className="cc">
            © 2023 Spokane Orthopedic Care | Orthopedic Specialists in Spokane.
          </p>
          {/* TO DO: add in link to the privacy policy  */}
          <a className="pp">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
