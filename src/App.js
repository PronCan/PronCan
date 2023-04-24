import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import "./App.css";
import "./css/reset.scss";
import "./css/common.scss";
import Context from "./component/Context";
import Index from "./component/Index";
import About from "./component/About";
import About_m from "./component/About_m";
import Work from "./component/Work";

function App() {
  return (
    <Context>
      <BrowserView>
        <BrowserRouter basename="/PronCan">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </BrowserRouter>
      </BrowserView>
      <MobileView>
        <BrowserRouter basename="/PronCan">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About_m />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </BrowserRouter>
      </MobileView>
    </Context>
  );
}

export default App;
