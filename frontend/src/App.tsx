import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Layout from "./pages/Layout";
import Games from "./pages/Games";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/games" element={<Games />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
