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
      <div className="">
        <p>
          I've been studying at Purdue for three years. During that time I have been apart of
          2 research team: "Image Based Mobile Applications" and "TensorFlow Model Garden".
          I am currently still active in TensorFlow Model Garden where we research cutting edge
          Machine Learning models such as YOLOX
        </p>
        <p>
          I've also had the opportunity to work as a Software Engineer for Interos Inc., where I was part
          of the Backend and API team. The summer before that I worked as a Software Engineer in the Python ML team 
          for NSTDA (National Science and Technology Development Agency).
        </p>
        <p>
          I love to create things so,
          I've taught myself web development through online tutorials and udemy web development bootcamps 
        </p>
      </div>
    ),

    img: myPic,
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="flex justify-center items-center max-w-6xl">
        <img src={content.img} alt="my profile"
            className="rounded-lg max-w-lg mr-10 shadow-lg" />

        <div className="h-full">
          {content.header}
          {content.details}
        </div>
      </div>
    </div>
  );
};

export default About;
