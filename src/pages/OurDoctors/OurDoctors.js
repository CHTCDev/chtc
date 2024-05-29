import React from "react";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import OurGoalsBanner from "../../utils/OurGoalsBanner";

function OurDoctors() {
  return (
    <div className="pagecss gap-[2rem]">
      <div className="w-10/12 py-4 pt-[3rem] grid grid-cols-2 gap-4 mobile:grid-cols-1 md:grid-cols-1">
        <div className="flex items-start justify-center flex-col gap-2">
          <h2 className="text-mainHeading font-bold text-navy-blue">
            Meet Our Doctor
          </h2>
        </div>
      </div>
      <div className="w-10/12 grid grid-cols-3 gap-4 mobile:flex scroll_x md:w-11/12">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
      <div className=" w-10/12 py-4">
        <OurGoalsBanner />
      </div>
    </div>
  );
}

export default OurDoctors;
