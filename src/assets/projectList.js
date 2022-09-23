import { v4 as uuidv4 } from 'uuid';
import raspberryRemote from './imgs/raspberrypi-remote-lightswitch.gif'

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));

/*
Sample Item
  {
    id: uuidv4(),
    title: "str",
    description: "str",
    image: "img",
    links: {
      "github": "url",
      "demo": "url"
    },
    tags: [],
  },
*/ 

const projectList = [
  {
    id: uuidv4(),
    title: "This Website! (Portfolio Website)",
    description: "A react project to showcase some of the projects I've worked on",
    image: images['portfolio.png'],
    links: {
      "github": "https://github.com/pongpatapee/portfolio-website",
      "demo": "https://pongpatapee.github.io/portfolio-website/"
    },
    tags: ["JS", "React"],
  },
  {
    id: uuidv4(),
    title: "Discrepancies among Pre-trained Deep Neural Networks", 
    description: `
                Published paper in ESEC/FSE 2022 for investigating the discrepancies
                and relability of various pre-trained Deep Neural Networks across different 
                model zoos. 
                `,
    image: images['ECE-595-Proj.png'],
    links: {
      "github": "https://github.com/d57montes/model-zoos-research",
      "demo": "https://www.conference-publishing.com/download.php?Event=FSE22IVR&Paper=2d22393f48e38fceafafd3e49ed38a&Version=submitted"
    },
    tags: [],
  },
  {
    id: uuidv4(),
    title: "TensorFlow Model Garden ML Undergrad Research",
    description: `Collaborating with Google to re-impelment state of the art ML 
                  models to contribute to their TensorFlow Model Garden. 
                  Leading the YOLO team to re-implement the YOLOX model
                  in TensorFlow.
                  
                  `,
    image: images['TFMG.jpg'],
    links: {
      "github": "",
      "demo": ""
    },
    tags: [],
  },
  {
    id: uuidv4(),
    title: "Litter Detection AI",
    description: `3rd place Hackathon project: Desgined a raspberry PI camera system 
                  to aid in cleaning up the Purdue campus. The camera system module
                  is meant to be installed on autonomous bots that are already
                  roaming around campus. The camera system is designed to take pictures
                  every few seconds and sends a request to Microsoft's Azure Object Detection
                  to see if any litter has been detected. When litter is detected the raspberry PI
                  would map its current location. The locations are visualized through a frontend 
                  react app and shows a preview of the litter. 
                  `,
    image: images["ecomake-map.png"],
    links: {
      "github": "https://github.com/pongpatapee/Litter-Detection-A-EYE",
    },
    tags: [],
  },
  {
    id: uuidv4(),
    title: "ECE 461 NPM Module Trustworthiness Grader (Part 1)",
    description: `Given the customer's requirements and constraints
                  my team and I designed a CLI tool that would grade an
                  NPM module. The CLI tool would extract information from
                  the NPM modules' npmjs page and its GitHub repositories.
                  The NPM modules were graded based on these metrics: Bus Factor, Ramp Up, Correctness, Responsiveness, Liscensing
                  `,
    image: images['ECE-461-Proj1.png'],
    links: {
      "github": "https://github.com/Purdue-ECE-461/project-1-project-1-2",
      "demo": ""
    },
    tags: [],
  },
  {
    id: uuidv4(),
    title: "ECE 461 NPM Trustworthy Module Registry (Part 2)",
    description: `
                  Using the NPM module grader CLI tool from part 1. My team and I
                  Designed a backend application that allows users to have access to
                  a Trustworhty Module Registry. In which only NPM modules that has a certain grade
                  can be stored. This allow users store trustworthy modules they can use for their project.
                  The backend was created using Flask and the system was deployed to Google's App engine using GCP.
                  `,
    image: images['ECE-461-Proj2.png'],
    links: {
      "github": "https://github.com/Purdue-ECE-461/project-2-project-2-2",
      "demo": ""
    },
    tags: [],
  },
  {
    id: uuidv4(),
    title: "NSTDA Internship",
    description: `
                Summer 2021 Internship: At the time there was on-going research that COVID-19 patients
                would emit certain aersol compounds from their breath. The premise of my project was to
                see if it is possible to detect these compounds with an Electronic Nose and use an ML 
                Classifier to rapidly test for COVID-19 infection. Thus, the project I worked on was
                using an Electronic Nose to classify different scents.
                `,
    image: images['NSTDA-Soap-Classification.png'],
    links: {
      "github": "https://github.com/pongpatapee/NSTDA-Internship",
      "demo": ""
    },
    tags: [],
  },
  {
    id: uuidv4(),
    title: "Self-Driving Car",
    description: `Created a self-driving car AI & Neural Network visualizer in vanilla JS 
                  using a simple genetic algorithm`,
    image: images['self-driving-car.png'],
    links: {
      "github": "https://github.com/pongpatapee/self-driving-car-js",
      "demo": "https://pongpatapee.github.io/self-driving-car-js/"
    },
    tags: [],
  },
  {
    id: uuidv4(),
    title: "Raspberry PI Remote Light Switch",
    description: `Deployed a Flask webserver on the raspberry PI to listen to requests
                  to control servo motors to switch the lights on/off. Interact with 
                  Light switch through the Flask website on any device (phones, tablets, computers)
                  `,
    image: raspberryRemote,
    links: {
      "github": "https://github.com/pongpatapee/Raspberry-Pi-Light-Switch",
      "demo": ""
    },
    tags: [],
  },
  {
    id: uuidv4(),
    title: "Odin Project Etch a Sketch",
    description: "Build an Etch a Sketch canvas with JS & CSS",
    image: images['Odin-Etch-a-Sketch.png'],
    links: {
      "github": "https://github.com/pongpatapee/Odin-Etch-a-Sketch",
      "demo": "https://pongpatapee.github.io/Odin-Etch-a-Sketch/"
    },
    tags: ["web dev", "JS", "HTML", "CSS"],
  },
  {
    id: uuidv4(),
    title: "Odin Project Landing Page",
    description: "Build a landing page layout with CSS",
    image: images['Odin-landing-page.png'],
    links: {
      "github": "https://github.com/pongpatapee/Odin-Landing-Page-Project",
      "demo": "https://pongpatapee.github.io/Odin-Landing-Page-Project/"
    },
    tags: ["web dev", "HTML", "CSS"],
  },
  // {
  //   id: uuidv4(),
  //   title: "Flappy Bird AI",
  //   description: `Created a flappy bird AI by implementing the NEAT genetic algorithm 
  //                 with TensorFlowjs`,
  //   image: "img",
  //   links: {
  //     "github": "https://github.com/pongpatapee/Flappy-Bird-AI",
  //     "demo": ""
  //   },
  //   tags: ["JS", "Genetic Algorithm", "Machine Learning"],
  // },
  // {
  //   id: uuidv4(),
  //   title: "Colt Steele's Web Developer Bootcamp",
  //   description: "",
  //   image: "img",
  //   links: {
  //     "github": "url",
  //     "demo": ""
  //   },
  //   tags: [],
  // },
  // {
  //   id: uuidv4(),
  //   title: "Discord Bot",
  //   description: "str",
  //   image: "img",
  //   links: {
  //     "github": "",
  //     "demo": ""
  //   },
  //   tags: [],
  // },
];

export default projectList;