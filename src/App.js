import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
