import { v4 as uuidv4 } from 'uuid';

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
    title: "ECE 461 NPM grader API",
    description: "My team and I created an API to grade NPM modules for ECE 461 (Software Engineering)",
    image: "img",
    links: {
      "github": "url",
      "demo": "url"
    },
    tags: ["Python", "REST API", "School", "Design"],
  },
  {
    id: uuidv4(),
    title: "Flappy Bird AI",
    description: "Created a flappy bird AI using the NEAT genetic algorithm with TensorFlowjs",
    image: "img",
    links: {
      "github": "url",
      "demo": "url"
    },
    tags: ["JS", "Genetic Algorithm", "Machine Learning"],
  },
  {
    id: uuidv4(),
    title: "Self-Driving Car",
    description: "Created a self-driving car AI & Neural Network visualizer in vanilla JS using a simple genetic algorithm",
    image: "./self-driving-car.png",
    links: {
      "github": "https://github.com/pongpatapee/self-driving-car-js",
      "demo": "https://pongpatapee.github.io/self-driving-car-js/"
    },
    tags: [],
  },
  {
    id: uuidv4(),
    title: "str",
    description: "alskdjfkl;asdfjl;asdkfjl;aksd jfkl;asdj fkl;asdjfkl; js;dklf jk;alsd;klf j;asdklfj kl;asdjfkl;asd j;klasdjf ;lsdajf l;skadjf l;asdkjf ;klasd jf;asldkjf l;kasdjf ;askldjf akl;sdjf ;klasdjf ;lkasdjf kl;sdjf kl;asdjf;klasdjf",
    image: "img",
    links: {
      "github": "url",
      "demo": "url"
    },
    tags: [],
  },
];

export default projectList;