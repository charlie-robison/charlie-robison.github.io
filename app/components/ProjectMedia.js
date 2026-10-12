"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ProjectMedia({ project }) {
  const localVideoRef = useRef(null);
  const youtubeFrameRef = useRef(null);

  useEffect(() => {
    if (project.videoType === "local" && localVideoRef.current) {
      const video = localVideoRef.current;
      const tryPlay = () => {
        video.play().catch(() => {});
      };

      tryPlay();
      video.addEventListener("loadeddata", tryPlay);
      return () => video.removeEventListener("loadeddata", tryPlay);
    }

    return undefined;
  }, [project.videoType, project.videoSrc]);

  if (project.noMedia) {
    return null;
  }

  if (project.videoType === "youtube") {
    const requestYouTubePlay = () => {
      const frame = youtubeFrameRef.current;
      if (!frame || !frame.contentWindow) {
        return;
      }

      frame.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "mute", args: [] }),
        "*",
      );
      frame.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*",
      );
    };

    return (
      <div className="project-image">
        <iframe
          ref={youtubeFrameRef}
          src={project.videoSrc}
          title={`${project.name} video`}
          loading="eager"
          onLoad={requestYouTubePlay}
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  if (project.videoType === "local") {
    return (
      <div className="project-image">
        <video
          ref={localVideoRef}
          src={project.videoSrc}
          autoPlay
          muted
          playsInline
          loop
          controls
          preload="auto"
        />
      </div>
    );
  }

  return (
    <div className="project-image">
      <Image src={project.image} alt={project.name} width={760} height={430} />
    </div>
  );
}
