import React from "react";

const Myskill = () => {
  const skills = [
    "Video Editing",
    "Color Grading",
    "Motion Graphics",
    "Sound Editing",
    "YouTube Video Editing",
    "Instagram Reels Editing",
    "Thumbnail Designing",
    "Photo Editing",
  ];

  return (
    <section className="w-full py-16 mt-8 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <p className="font-semibold text-gray-700">{skill}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Myskill;