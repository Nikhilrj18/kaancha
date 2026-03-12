import React from "react";
import profile from "../assets/images/profile.JPEG";
import Myskill from "../components/Myskill";
import Fotter from "../components/Fotter";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <div className="bg-[#F9B427] w-full h-80  justify-around items-center flex">
        <div>
          <h1 className="text-xl  font-bold text-black">
            Kancha Chandravanshi
          </h1>
          <p className="text-sm mt-2 text-gray-700">Editor | Content Creator</p>
          <hr className="my-4 h-3 border-amber-800" />
        </div>
        <div className="w-42 h-42 rounded-full overflow-hidden object-cover">
          <img src={profile} alt="reload" />
        </div>
      </div>

      <div className="p-4 ">
        <h1 className="text-2xl font-bold m-4 text-center">About Me</h1>

        <p>
          Hello! My name is Kaancha Chandravanshi. I am a creative editor
          skilled in photo and video editing. I enjoy turning simple photos and
          videos into professional and attractive visuals using different
          editing tools. My goal is to create high-quality content that looks
          professional and captures people’s attention.
        </p>

        <div>
          <h1 className="text-2xl font-bold mt-9 p-2 mb-4 text-center">
            Eductaion
          </h1>
          {/* <hr className="h-2 " /> */}

          <div className=" hover:bg-blue-300 lg:w-sm border-2 p-2 ">
            <h1 className="text-[19px]">Pareek collage, Jhotwara jaipur</h1>
            <p>Bachelor of Arts (BA)</p>
            <p>2026-2029</p>
          </div>
        </div>

        <Myskill />
      </div>
      <div>
        <Contact />
        <Fotter />
      </div>
    </div>
  );
};

export default Home;
