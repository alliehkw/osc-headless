import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./Page.js";
function PageContent({ content_data, review_content, screenSize }) {
  const pagesBlock = content_data.map((page, index) => {
    // Create Routes. Ensure that the home page has route "/"
    let route;
    if (page.isFrontPage) {
      route = "/";
    } else {
      route = `/${page.slug}`;
    }
    return (
      <Route
        key={index}
        path={route}
        element={
          <Page
            page_data={page}
            review_content={review_content}
            screenSize={screenSize}
          />
        }
      />
    );
  });
  return (
    <div className="content-container">
      <Routes>{pagesBlock}</Routes>
    </div>
  );
}

export default PageContent;
