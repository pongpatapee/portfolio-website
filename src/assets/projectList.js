import { v4 as uuidv4 } from 'uuid';
// import carImg from './imgs/self-driving-car.png';

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
    description: "str",
    image: "img",
    links: {
      "github": "https://github.com/pongpatapee/portfolio-website",
      "demo": "https://pongpatapee.github.io/portfolio-website/"
    },
    tags: ["JS", "React"],
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
    description: "str",
    image: "img",
    links: {
      "github": "url",
      "demo": "url"
    },
    tags: [],
  },
  {
    id: uuidv4(),
    title: "ECE 461 NPM Trustworthy Module Registry (Part 2)",
    description: "",
    image: "img",
    links: {
      "github": "url",
      "demo": ""
    },
    tags: [],
  },
  {
    id: uuidv4(),
    title: "NSTDA Internship",
    description: "",
    image: "img",
    links: {
      "github": "url",
      "demo": ""
    },
    tags: [],
  },
  {
    id: uuidv4(),
    title: "Flappy Bird AI",
    description: `Created a flappy bird AI by implementing the NEAT genetic algorithm 
                  with TensorFlowjs`,
    image: "img",
    links: {
      "github": "https://github.com/pongpatapee/Flappy-Bird-AI",
      "demo": ""
    },
    tags: ["JS", "Genetic Algorithm", "Machine Learning"],
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
    title: "something name WebDev Bootcamp",
    description: "",
    image: "img",
    links: {
      "github": "url",
      "demo": ""
    },
    tags: [],
  },
  {
    id: uuidv4(),
    title: "Undergraduate ML research",
    description: "",
    image: "img",
    links: {
      "github": "url",
      "demo": ""
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
    image: "img",
    links: {
      "github": "url",
      "demo": ""
    },
    tags: [],
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
    title: "str",
    description: "str",
    image: "img",
    links: {
      "github": "url",
      "demo": "url"
    },
    tags: [],
  },
];

export default projectList;