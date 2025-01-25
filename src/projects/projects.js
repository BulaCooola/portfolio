import musicgraphImage from "../assets/images/musicgraph.png";
import nutritionai from "../assets/images/nutritionai_2.png";
import opc from "../assets/images/opc.png";
import tourneypro from "../assets/images/tourneypro.png";

export const projects = [
  {
    id: 1,
    title: "MusicGraph",
    description:
      "A GraphQL server for managing music metadata using Apollo, Redis, MongoDB, and React.",
    technologies: ["GraphQL", "Node.js", "React", "Redis", "MongoDB"],
    image: musicgraphImage, // replace with actual image path
    link: "",
  },
  {
    id: 2,
    title: "NutritionAI",
    description:
      "NutritionAI is an AI-driven platform to track food intake and provide personalized dietary suggestions.",
    technologies: ["GeminiAI", "React", "Node.js", "MongoDB"],
    image: nutritionai,
    link: "https://github.com/danzam284/NutritionAI",
  },
  {
    id: 3,
    title: "NCAA Wrestling Optimal Performance Calculator",
    description:
      "A weight calculator for collegiate wrestlers to help estimate their minimum allowed weight when at 5% body fat.",
    technologies: [],
    image: opc,
    link: "http://localhost:5173/portfolio/#/calculator",
  },
  {
    id: 4,
    title: "TourneyPro",
    description:
      "A web application aimed to make bracket generating and tournament managing intuitive and effective.",
    technologies: ["Next.js", "React", "Redis", "ImageMagik", "MongoDB", "Node.js", "Elastisearch"],
    image: tourneypro,
    link: "https://github.com/BulaCooola/TourneyPro",
  },
];

// {
//     id: 3,
//     title: "=",
//     description: "",
//     technologies: [],
//     image: "",
//     link: "",
//   }
