import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div
        className="flex flex-col justify-center items-center h-screen
                  text-black bg-white light-dark-theme"
      >
        <h1 className="text-6xl mb-10 font-bold font-bubblyPixel">
          Welcome to my Portfolio!
        </h1>
        <Link to="/about">
          <button className="home-btn">About Me</button>
        </Link>
        <Link to="/experience">
          <button className="home-btn">Experience</button>
        </Link>
        <Link to="/projects">
          <button className="home-btn">Projects</button>
        </Link>
        <Link to="/contact">
          <button className="home-btn">Contact Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
