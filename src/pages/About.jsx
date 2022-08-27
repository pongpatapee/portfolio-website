import myPic from "../assets/imgs/myPic.jpg";

const About = () => {
  const content = {
    header: (
      <h1 className="lg:text-2xl md:text-xl text-lg font-bold mb-2">
        Hi! My name is Dan
        <br />
        I'm an undergraduate Computer Engineering student at Purdue with an
        emphasis in Software Engineering and Machine Learning.
      </h1>
    ),

    details: (
      //[&>*] targets div's children
      <div className="[&>*]:mb-4 lg:text-base md:text-sm text-xs">
        <p>
          I am passionate about technology, problem-solving, and innovation. I
          enjoy building things and have taught myself Software Development
          through online tutorials and bootcamps.
        </p>
        <p>
          I've been studying at Purdue for three years. During that time I have
          been apart of 2 research teams. Currently I am working in the
          TensorFlow Model Garden team, where we collaborate with Google to
          contribute Machine Learning model implementations in TensorFlow to
          their Model Garden (Repository for ML models).
        </p>
        <p>
          I've also had the opportunity to intern as a Software Engineer for&#160;
          <a
            href="https://www.interos.ai/"
            className="hover:underline text-blue-600"
          >
            Interos Inc.
          </a>
          , a growing company revolutionizing supply-chain management. 
          I worked there as part of the Backend &#38; API team, mainly focusing on
          maintaining Backend infrastructure and addressing production bugs.
        </p>
      </div>
    ),
    skills: [],

    img: myPic,
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex justify-center items-center max-w-6xl">
        <img
          src={content.img}
          alt="my profile"
          className="rounded-lg max-w-lg mr-10 shadow-lg"
        />

        <div className="h-full">
          {content.header}
          {content.details}
        </div>
      </div>
    </div>
  );
};

export default About;
