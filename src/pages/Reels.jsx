import React, { useEffect, useRef } from "react";

const Reels = () => {
  const videosRef = useRef([]);

  const arry = [
    { id: 1, video: "/videos/video1.mp4" },
    { id: 2, video: "/videos/video8.mp4" },
    { id: 3, video: "/videos/video10.mp4" },
    { id: 4, video: "/videos/video11.mp4" },
    { id: 5, video: "/videos/video9.mp4" },
    { id: 6, video: "/videos/video6.mp4" },
    { id: 7, video: "/videos/video7.mp4" },
    { id: 8, video: "/videos/video2.mp4" },
    { id: 9, video: "/videos/video5.mp4" },
    { id: 10, video: "/videos/video3.mp4" },
    { id: 11, video: "/videos/video4.mp4" },
    { id: 12, video: "/videos/video12.mp4" },
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
      { threshold: 0.7 }
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
          
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Reels;