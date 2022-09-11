import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="flex flex-col justify-center items-center">
        <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-lg font-bold font-bubblyPixel mb-3">
          Dan Peerapatanapokin
        </h1>
        <h2 className="lg:text-5xl md:text-3xl sm:text-xl text-lg font-bubblyPixel mb-5 ">
          Welcome to my Portfolio!
        </h2>
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
