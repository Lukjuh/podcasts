export default function PodcastEpisode({
  image,
  title,
  description,
  audio,
  pub_date_ms,
  audio_length_sec,
  onPlay,
}) {
  const getMS = (sec) => {
    const min = new Date(sec * 1000).toISOString().substr(14, 2);
    const seconds = new Date(sec * 1000).toISOString().substr(17, 2);

    return `${min} min ${seconds} sec`;
  };

  const getDate = (timestamp) => {
    return new Intl.DateTimeFormat("nl-NL", {
      month: "short",
      day: "numeric",
    }).format(new Date(timestamp));
  };

  return (
    <div className="flex g-4">
      <img width={100} height={100} src={image} />
      <div className="stack-y g-2">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="flex g-2 items-center">
          <button className="btn-play" onClick={onPlay} data-src={audio}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              height="24"
              width="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <div className="text-muted">
            {getDate(pub_date_ms)} - {getMS(audio_length_sec)}
          </div>
        </div>
      </div>
    </div>
  );
}
