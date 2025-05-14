"use client";

import { CardBody, CardContainer, CardItem } from "./ui/3DCard";

const ProfilePic = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group relative w-auto rounded-xl p-6 flex justify-center items-center">
        <CardItem
          translateZ="100"
          className="w-full mt-4 flex justify-center items-center"
        >
          <div className="w-[400px] h-[400px] rounded-full flex items-center justify-center">
            <img
              src="/pic.jpg"
              alt="Profile"
              className="rounded-full w-full h-full object-cover border-[4px] border-white transition-shadow duration-300 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            />
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ProfilePic;
