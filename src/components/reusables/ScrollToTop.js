import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [prevPathname, setPrevPathname] = useState(null);

  useEffect(() => {
    // Check if the current pathname and the previous pathname are both in the list of paths to exclude
    const excludedPaths = [
      "/patient-education/hip",
      "/patient-education/shoulder",
      "/patient-education/knee",
      "/patient-education/pre-op-preparation",
      "/patient-education/post-op-recovery",
    ];

    if (
      !excludedPaths.includes(pathname) ||
      !excludedPaths.includes(prevPathname)
    ) {
      window.scrollTo(0, 0);
    }

    // Update the previous pathname
    setPrevPathname(pathname);
  }, [pathname]);

  return null;
}
