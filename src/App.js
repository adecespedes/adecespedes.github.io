import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Home />
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
