import ThemeBtn from '../components/ThemeBtn';

const Home = () => {
  return (
    <div className="home">
      <ThemeBtn />
      <div className="flex flex-col justify-center items-center h-screen
                      text-black dark:text-white bg-white dark:bg-black">
        <h1 className="text-6xl mb-10 font-bold font-bubblyPixel">
          Welcome to my Portfolio!
        </h1>
        <button className="btn">About Me</button>
        <button className="btn">Experience</button>
        <button className="btn">Projects</button>
        <button className="btn">Contact Me</button>
      </div>
    </div>
  );
};

export default Home;
