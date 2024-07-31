import React from "react";
// import img from "../../assests/images/Rectangle 2771.png";
// import img1 from "../../assests/images/Rectangle 276.png";
// import img2 from "../../assests/images/Rectangle 278.png";
// import img3 from "../../assests/images/Rectangle 279.png";
import OurGoalsBanner from "../../utils/OurGoalsBanner";
import video from "../../assests/videos/WhatsApp Video 2024-07-31 at 1.39.07 PM.webm";
import video1 from "../../assests/videos/WhatsApp Video 2024-07-31 at 1.39.07 PM (1).webm";
import video2 from "../../assests/videos/6.webm";
import video3 from "../../assests/videos/5.webm";
import video4 from "../../assests/videos/4.webm";
import video5 from "../../assests/videos/3.webm";
import video6 from "../../assests/videos/2.webm";
import poster from "../../assests/videos/Screenshot 2024-07-31 154929.png";
import LazyLoad from "react-lazy-load";
function SuccessStories() {
  return (
    <div className="pagecss gap-[2rem]">
      <div className="w-10/12 py-4 pt-[2rem]">
        <h2 className="text-mainHeading font-bold text-navy-blue mobile:text-seconderyHeading">
          Success Stories
        </h2>
        <div className="w-full py-4  grid grid-cols-3 gap-4 mobile:grid-cols-1">
          <LazyLoad>
            <video
              controls
              controlsList="nodownload"
              poster={poster}
              className="rounded-md"
            >
              <source src={video2} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </LazyLoad>
          <LazyLoad>
            <video
              controls
              controlsList="nodownload"
              poster={poster}
              className="rounded-md"
            >
              <source src={video3} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </LazyLoad>
          <LazyLoad>
            <video
              controls
              controlsList="nodownload"
              poster={poster}
              className="rounded-md"
            >
              <source src={video4} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </LazyLoad>
          <LazyLoad>
            <video
              controls
              controlsList="nodownload"
              poster={poster}
              className="rounded-md"
            >
              <source src={video5} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </LazyLoad>
          <LazyLoad>
            <video
              controls
              controlsList="nodownload"
              poster={poster}
              className="rounded-md"
            >
              <source src={video6} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </LazyLoad>
          <LazyLoad>
            <video
              controls
              controlsList="nodownload"
              poster={poster}
              className="rounded-md"
            >
              <source src={video} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </LazyLoad>
          <LazyLoad>
            <video
              controls
              controlsList="nodownload"
              poster={poster}
              className="rounded-md"
            >
              <source src={video1} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </LazyLoad>
        </div>

        {/* <span>
          <h6 className="text-normalHeading font-bold text-black-shade">
            {" "}
            CASE 1
          </h6>
          <p>
            72 Year Male Patient, with Severe Pain and difficulty in walking and
            bowing of legs
          </p>
          <p className="para text-gray">Before Surgery</p>
        </span>
        <div className="w-full py-4  grid grid-cols-3 gap-4 mobile:grid-cols-1">
          <div class="">
            <img
              src={img}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class=" ">
            {" "}
            <img
              src={img1}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class="  ...">
            {" "}
            <img
              src={img2}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class=" col-span-2 ... mobile:col-span-1">
            {" "}
            <img
              src={img3}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class="">
            <img
              src={img}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
        </div>
        <p className="para text-gray">After Surgery</p>
        <div className="w-full py-4  grid grid-cols-3 gap-4 mobile:grid-cols-1">
          <div class="">
            <img
              src={img}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class=" ">
            {" "}
            <img
              src={img1}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class="  ...">
            {" "}
            <img
              src={img2}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
        </div> */}
      </div>{" "}
      {/* <div className="w-10/12 py-4 ">
        <span>
          <h6 className="text-normalHeading font-bold text-black-shade">
            {" "}
            CASE 2
          </h6>
          <p>
            72 Year Male Patient, with Severe Pain and difficulty in walking and
            bowing of legs
          </p>
          <p className="para text-gray">Before Surgery</p>
        </span>
        <div className="w-full py-4  grid grid-cols-3 gap-4 mobile:grid-cols-1">
          <div class="">
            <img
              src={img}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class=" ">
            {" "}
            <img
              src={img1}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class="  ...">
            {" "}
            <img
              src={img2}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class=" col-span-2 ... mobile:col-span-1">
            {" "}
            <img
              src={img3}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class="">
            <img
              src={img}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
        </div>
        <p className="para text-gray">After Surgery</p>
        <div className="w-full py-4  grid grid-cols-3 gap-4 mobile:grid-cols-1">
          <div class="">
            <img
              src={img}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class=" ">
            {" "}
            <img
              src={img1}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class="  ...">
            {" "}
            <img
              src={img2}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>{" "}
      <div className="w-10/12 py-4 ">
        <span>
          <h6 className="text-normalHeading font-bold text-black-shade">
            {" "}
            CASE 3
          </h6>
          <p>
            72 Year Male Patient, with Severe Pain and difficulty in walking and
            bowing of legs
          </p>
          <p className="para text-gray">Before Surgery</p>
        </span>
        <div className="w-full py-4  grid grid-cols-3 gap-4 mobile:grid-cols-1">
          <div class="">
            <img
              src={img}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class=" ">
            {" "}
            <img
              src={img1}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class="  ...">
            {" "}
            <img
              src={img2}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class=" col-span-2 ... mobile:col-span-1">
            {" "}
            <img
              src={img3}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class="">
            <img
              src={img}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
        </div>
        <p className="para text-gray">After Surgery</p>
        <div className="w-full py-4  grid grid-cols-3 gap-4 mobile:grid-cols-1">
          <div class="">
            <img
              src={img}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class=" ">
            {" "}
            <img
              src={img1}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
          <div class="  ...">
            {" "}
            <img
              src={img2}
              alt="success story"
              className="h-[28rem] w-full object-cover rounded-md"
            />
          </div>
        </div>
      </div> */}
      <div className=" w-10/12 py-4">
        <OurGoalsBanner />
      </div>
    </div>
  );
}

export default SuccessStories;
