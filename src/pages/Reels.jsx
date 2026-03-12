import React, { useEffect, useRef } from "react";

import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video5 from "../assets/videos/video5.mp4";
import video6 from "../assets/videos/video6.mp4";
import video7 from "../assets/videos/video7.mp4";
import video8 from "../assets/videos/video8.mp4";
import video9 from "../assets/videos/video9.mp4";
import video10 from "../assets/videos/video10.mp4";
import video11 from "../assets/videos/video11.mp4";
import video12 from "../assets/videos/video.mp4";

const Reels = () => {
  const videosRef = useRef([]);

  const arry = [
    { id: 1, video: video1 },
    { id: 2, video: video8 },
    { id: 3, video: video10 },
    { id: 4, video: video11 },
    { id: 5, video: video9 },
    { id: 6, video: video6 },
    { id: 7, video: video7 },
    { id: 8, video: video2 },
    { id: 9, video: video5 },
    { id: 10, video: video3 },
    { id: 11, video: video4 },
    { id: 12, video: video12 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.7 },
    );

    videosRef.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videosRef.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div className="bg-black h-screen lg:justify-items-center overflow-y-scroll snap-y snap-mandatory">
      {arry.map((item, index) => (
        <div
          key={item.id}
          className="h-screen lg:h-full w-full lg:w-1/2 flex justify-center items-center snap-start"
        >
          <video
            ref={(el) => (videosRef.current[index] = el)}
            src={item.video}
            loop
            // muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Reels;
