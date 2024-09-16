import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ToggleComponent from "./components/toggle/ToggleComponent";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<ToggleComponent />} />
        <Route exact path="/toggle" element={<ToggleComponent />} />
        <Route exact path="/contact" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
