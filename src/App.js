import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Main from "./pages/MainPages/Main";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/LoginPage/Login";
import Registration from "./pages/RegistrationPage/Registration";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/main" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
