import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from './pages/Home';
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
