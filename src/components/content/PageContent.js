import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./Page.js";
function PageContent({ content_data, screenSize }) {
  const pagesBlock = content_data.map((page, index) => {
    // Create Routes. Ensure that the home page has route "/"
    let route;
    let parent = null;
    if (page.isFrontPage) {
      route = "/";
    } else if (page.parent === null) {
      route = `/${page.slug}`;
    } else if (page.ancestors.nodes.length === 1) {
      route = `/${page.parent.node.slug}/${page.slug}`;
      parent = content_data.find((item) => item.id === page.parent.node.id);
    } else {
      route = `/${page.ancestors.nodes[1].slug}/${page.slug}`;
      parent = content_data.find(
        (item) => item.id === page.ancestors.nodes[1].id
      );
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
      {content_data ? <Routes>{pagesBlock}</Routes> : null}
    </div>
  );
}

export default PageContent;
