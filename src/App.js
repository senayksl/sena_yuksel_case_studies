import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Page from "./pages/Page";
import ProductType from "./pages/ProductType";
import GroupComponent from "./pages/GroupComponent";
import GroupComponent1 from "./pages/GroupComponent1";
import RectangleComponent from "./pages/RectangleComponent";
import React, {useEffect, useState} from "react";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [search,setSearch]=useState("");

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-type":
        title = "";
        metaDescription = "";
        break;
      case "/group-2":
        title = "";
        metaDescription = "";
        break;
      case "/group-1":
        title = "";
        metaDescription = "";
        break;
      case "/rectangle-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
          'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
      <div>
        <div className="col">
          <Header search={search} setSearch={setSearch}/></div>
        <Routes>
          <Route path="/" element={<Page search={search} setSearch={setSearch} />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
);
}
import Pagination from "./pages/pagination";

import Detail from "./pages/Detail";
import Header from "./pages/header";
export default App;
