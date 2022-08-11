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
    title: "ECE 461 NPM grader API",
    description: "My team and I created an API to grade NPM modules for ECE 461 (Software Engineering)",
    image: "img",
    links: {
      "github": "url",
      "demo": ""
    },
    tags: ["Python", "REST API", "School", "Design"],
  },
  {
    id: uuidv4(),
    title: "Flappy Bird AI",
    description: "Created a flappy bird AI using the NEAT genetic algorithm with TensorFlowjs",
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
    description: "Created a self-driving car AI & Neural Network visualizer in vanilla JS using a simple genetic algorithm",
    image: images['self-driving-car.png'],
    links: {
      "github": "https://github.com/pongpatapee/self-driving-car-js",
      "demo": "https://pongpatapee.github.io/self-driving-car-js/"
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
];

export default projectList;