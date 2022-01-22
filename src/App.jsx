import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import Podcasts from "./routes/Podcasts";
import AudioPlayer from "./components/AudioPlayer";
import { useState } from "react";

function App() {
  const [src, setSrc] = useState("");

  const onPlay = (e) => {
    setSrc(e.target.dataset.src);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/podcasts/:podcastId"
              element={<Podcasts onPlay={onPlay} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className="audio">
        <AudioPlayer src={src} />
      </div>
    </>
  );
}

export default App;
