import { Modal } from "antd";
import useWindowSize from "../../hooks/useWindowSize";
import { CloseOutlined } from "@ant-design/icons";
import { IconCloud } from "../ui/IconCloud";

import { BackgroundBeams } from "../ui/BackgroundBeams";

interface AboutMeModal {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "reactnative",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "solidity",
  "redis",
  "redux",
  "reactrouter",
  "tailwindcss",
  "babel",
  "jsx",
];

const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);
const AboutMeModal = ({ open, setOpen }: AboutMeModal) => {
  const [width] = useWindowSize();
  return (
    <Modal
      title={<div className="text-2xl">About Me</div>}
      closable={{ "aria-label": "Custom Close Button" }}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      footer={false}
      width={width * 0.7}
      styles={{}}
      closeIcon={
        <div className="">
          <CloseOutlined />
        </div>
      }
    >
      <BackgroundBeams className="pointer-events-none fixed top-0 left-0 w-full h-full "></BackgroundBeams>

      <div className="flex items-center  gap-x-20 px-5">
        <div className="w-[60%]">
          <p className="p-2 font-semibold">
            <pre className="text-wrap">
              I am Yelisetty Suresh Babu, a highly motivated and skilled
              Computer Science and Engineering student at SRM University AP, on
              track to graduate in May 2025 with a strong CGPA of 9.26/10. I
              possess a solid foundation in various programming languages and
              technologies, including Python, JavaScript, React, and Node.js,
              and I have hands-on experience with databases and cloud
              technologies.
            </pre>
            <br />
            <pre className="text-wrap">
              During my internship at Maximl in Bengaluru, I developed solutions
              with significant impact. I designed the frontend for an AI-powered
              application that assesses safety gear compliance, reducing
              evaluation time from 30 minutes to 2 minutes (15x improvement) and
              contributing to securing 6 crore in funding. I also developed a
              React application to analyze XER files, replacing P6 Primavera and
              improving issue detection efficiency by over 60%.
            </pre>
            <br />
            <pre className="text-wrap">
              Beyond my academics and professional experiences, I am actively
              involved in extracurricular activities, including achieving a gold
              medal in the 8th Research Day at SRM University AP, and
              contributing to the SRM Coding Club.
            </pre>
          </p>
        </div>
        <div className="relative flex size-full items-center justify-center overflow-hidden w-[30%]">
          <IconCloud images={images} />
        </div>
      </div>
    </Modal>
  );
};

export default AboutMeModal;
