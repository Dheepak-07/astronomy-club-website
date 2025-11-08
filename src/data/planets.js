import mercuryTexture from "./mercury.jpg";
import venusTexture from "./venus.jpg";
import earthTexture from "./earth.jpg";
import marsTexture from "./mars.jpg";
import jupiterTexture from "./jupiter.jpg";
import saturnTexture from "./saturn.jpg";
import uranusTexture from "./uranus.jpg";
import neptuneTexture from "./neptune.jpg";

// --- KEY CHANGE: All `size` values have been increased ---

export const planets = [
  {
    name: "Mercury",
    texture: mercuryTexture,
    size: 1.5, // was 0.8
    rotationSpeed: 0.01,
    description: "The smallest planet, closest to the Sun.",
  },
  {
    name: "Venus",
    texture: venusTexture,
    size: 1.9, // was 1.2
    rotationSpeed: 0.008,
    description: "A hot world shrouded in thick clouds of sulfuric acid.",
  },
  {
    name: "Earth",
    texture: earthTexture,
    size: 2.0, // was 1.3
    rotationSpeed: 0.02,
    description: "Our home — the only known planet with life.",
  },
  {
    name: "Mars",
    texture: marsTexture,
    size: 1.7, // was 1.0
    rotationSpeed: 0.018,
    description: "The red planet, famous for its iron oxide soil.",
  },
  {
    name: "Jupiter",
    texture: jupiterTexture,
    size: 3.0, // was 2.5 (This is now the maximum size)
    rotationSpeed: 0.025,
    description: "The largest planet, a gas giant with raging storms.",
  },
  {
    name: "Saturn",
    texture: saturnTexture,
    size: 2.8, // was 2.2
    rotationSpeed: 0.02,
    description: "Known for its beautiful ring system.",
  },
  {
    name: "Uranus",
    texture: uranusTexture,
    size: 2.4, // was 1.8
    rotationSpeed: 0.015,
    description: "An ice giant with a tilted axis of rotation.",
  },
  {
    name: "Neptune",
    texture: neptuneTexture,
    size: 2.3, // was 1.7
    rotationSpeed: 0.017,
    description: "A windy and cold planet at the edge of our solar system.",
  },
];