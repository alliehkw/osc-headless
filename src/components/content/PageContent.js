import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./Page.js";
function PageContent({ content_data, screenSize }) {
  console.log("content_data", content_data);

  const pagesBlock = content_data.map((page, index) => {
    // Create Routes. Ensure that the home page has route "/"
    let route;
    let parent = null;
    if (page.isFrontPage) {
      route = "/";
    } else if (page.parent === null) {
      route = `/${page.slug}`;
    } else {
      route = `/${page.parent.node.slug}/${page.slug}`;
      parent = content_data.find((item) => item.id === page.parent.node.id);
    }

    return (
      <Route
        key={index}
        path={route}
        element={
          <Page page_data={page} screenSize={screenSize} parent={parent} />
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
