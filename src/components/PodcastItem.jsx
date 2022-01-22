import { Link } from "react-router-dom";

export default function PodcastItem({ id, image, title, publisher }) {
  return (
    <Link to={`/podcasts/${id}`}>
      <div className="stack-y g-3">
        <img src={image} />
        <div>
          <h4>{title}</h4>
          <small>{publisher}</small>
        </div>
      </div>
    </Link>
  );
}
