import myPic from "../assets/myPic.jpg";

const About = () => {
  const content = {
    header: (
      <h1 className="text-2xl mb-2">
        Hi, I'm Dan. 
        <br />
        An undergraduate Computer Engineering student at Purdue with an emphasis in
        Software Engineering and Machine Learning.
      </h1>
    ),

    details: (
      <p>
        I'm an International student from Thailand
      </p>
    ),

    img: myPic,
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="flex justify-center items-center max-w-6xl border">
        <img src={content.img} alt="my profile"
            className="rounded-lg max-w-lg mr-10" />

        <div className="h-full">
          {content.header}
          <p>{content.details}</p>
          {content.test}
        </div>
      </div>
    </div>
  );
};

export default About;
