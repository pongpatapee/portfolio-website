import myPic from "../assets/myPic.jpg";

const About = () => {
  return (
    <div className="about">
      <h1>About me</h1>
      <img src={myPic} alt="my profile" />
    </div>
  );
};

export default About;
