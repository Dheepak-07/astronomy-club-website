// src/components/ScrollSection.jsx
import { planets } from "../data/planets";

export default function ScrollSection() {
  return (
    <div className="relative z-10 text-center text-white">
      {planets.map((planet, index) => (
        <section
          key={index}
          className="h-screen flex flex-col items-center justify-center space-y-4"
        >
          <h1 className="text-6xl font-bold drop-shadow-lg">{planet.name}</h1>
          <p className="text-xl max-w-2xl">{planet.description}</p>
        </section>
      ))}
    </div>
  );
}
