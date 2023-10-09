import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Main from "./pages/MainPages/Main";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
