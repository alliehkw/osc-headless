import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./Page.js";
function Content({ content_data }) {
  const pagesBlock = content_data.map((page, index) => {
    // Create Routes. Ensure that the home page has route "/"
    // console.log("page", page);
    let route;
    if (page.isFrontPage) {
      route = "/";
    } else {
      route = `/${page.slug}`;
    }
    return (
      <Route key={index} path={route} element={<Page page_data={page} />} />
    );
  });
  return (
    <div className="content-container">
      <Routes>{pagesBlock}</Routes>
    </div>
  );
}

export default Content;
