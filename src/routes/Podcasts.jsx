import { useParams } from "react-router-dom";
import { getPodcast } from "../data.js";
import PodcastEpisode from "../components/PodcastEpisode.jsx";

export default function Podcasts({ onPlay }) {
  let { podcastId } = useParams();
  let podcast = getPodcast(podcastId);

  return (
    <div className="stack-y">
      <section className="stack-y">
        <h2>{podcast.title}</h2>
        <div className="flex g-4">
          <img width={150} height={150} src={podcast.image} />
          <p>{podcast.description}</p>
        </div>
      </section>
      <section className="stack-y">
        <h3>Alle afleveringen</h3>
        {podcast.episodes.map((episode) => (
          <PodcastEpisode key={episode.id} {...episode} onPlay={onPlay} />
        ))}
      </section>
    </div>
  );
}
