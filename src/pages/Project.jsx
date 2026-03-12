import React from "react";

import img1 from "../assets/images/img2.jpeg";
import img2 from "../assets/images/img1.PNG";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.PNG";
import img6 from "../assets/images/img6.PNG";
import img7 from "../assets/images/img7.jpeg";

import img8 from "../assets/images/img8.jpeg";
import img9 from "../assets/images/img9.PNG";
import img10 from "../assets/images/img10.jpeg";

import img12 from "../assets/images/img12.PNG";
import img13 from "../assets/images/img13.PNG";
import img14 from "../assets/images/img14.jpeg";
import img15 from "../assets/images/img15.jpeg";
import img16 from "../assets/images/img16.PNG";
import img17 from "../assets/images/img17.PNG";
import img18 from "../assets/images/img18.PNG";
import img19 from "../assets/images/img19.PNG";
import img20 from "../assets/images/img20.PNG";
import img21 from "../assets/images/img21.PNG";
import img22 from "../assets/images/img22.PNG";
import img23 from "../assets/images/img23.PNG";
import img24 from "../assets/images/img24.PNG";
import img25 from "../assets/images/img25.PNG";
import img26 from "../assets/images/img26.PNG";
import img27 from "../assets/images/img27.PNG";
import img28 from "../assets/images/img28.PNG";
import img29 from "../assets/images/img29.PNG";
// import img30 from "../assets/images/img30.PNG";
import img31 from "../assets/images/img31.PNG";
// import img33 from "../assets/images/img33.PNG";
import img34 from "../assets/images/img34.PNG";
import img35 from "../assets/images/img35.PNG";
import img36 from "../assets/images/img36.PNG";
// import img37 from "../assets/images/img37.PNG";
import img38 from "../assets/images/img38.PNG";
import img39 from "../assets/images/img39.PNG";
import img40 from "../assets/images/img40.PNG";
import img41 from "../assets/images/img41.PNG";
import img42 from "../assets/images/img42.PNG";



//BOY'S

import img46 from "../assets/images/img50.jpeg";

import img48 from "../assets/images/img48.jpeg";
import img49 from "../assets/images/img49.jpeg";
import img50 from "../assets/images/img46.WEBP";

import img51 from "../assets/images/img51.jpeg";
import img52 from "../assets/images/img52.jpeg";
import img53 from "../assets/images/img53.jpeg";
import img54 from "../assets/images/img54.PNG";
import img55 from "../assets/images/img55.PNG";
import img56 from "../assets/images/img56.PNG";
import img57 from "../assets/images/img57.PNG";



const Project = () => {
  const images = [
  
img1,img2,img3,img4,img5,
img6,img7,img8,img9,img10,
img12,img13,img14,img15,
img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,
img26,img27,img28,img29,
img31,img34,img35,
img36,img38,img39,img40,
img41,img42
];


const images2 = [
img46,img48,img49,img50,img51,img52,img53,img54,img55,img56,img57

];


return (
<div className="max-w-6xl mx-auto py-10 px-4">

<h1 className="text-3xl font-bold text-center mb-8">
My Gallery
</h1>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

{images.map((img, index) => (
<div key={index} className="overflow-hidden rounded-lg shadow-md">

<img
src={img}
alt="gallery"
className="w-full h-60 object-cover hover:scale-110 transition duration-300"
/>

</div>
))}

</div>
<h1 className="text-3xl font-bold text-center mb-8">
BOY'S
</h1>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

{images2.map((img, index) => (
<div key={index} className="overflow-hidden rounded-lg shadow-md">

<img
src={img}
alt="gallery"
className="w-full h-60 object-cover hover:scale-110 transition duration-300"
/>

</div>
))}

</div>

</div>
);
};

export default Project;