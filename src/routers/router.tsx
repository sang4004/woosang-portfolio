// Libraries
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "@/pages/Main";

// Pages
function Router() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 이동 시 스크롤 맨 위로 이동
  }, [location.pathname]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default Router;
