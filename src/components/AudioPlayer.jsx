import { useEffect, useRef } from "react";

export default function AudioPlayer({ src }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.play();
  }, [src]);

  return <audio ref={ref} controls src={src}></audio>;
}
