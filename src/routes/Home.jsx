import { recommendations } from "../data.js";
import PodcastItem from "../components/PodcastItem";

export default function Home() {
  return (
    <div>
      {recommendations.map((recommendation) => (
        <section key={recommendation.id} className="stack-y">
          <h2>{recommendation.name}</h2>
          <div className="grid grid-columns g-4">
            {recommendation.items.map((item) => (
              <PodcastItem key={item.id} {...item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
