import React from "react";

const Video = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "0",
        paddingBottom: "56.25%",
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/s36nTLjmbTQ"
        title="Vine Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Video;
