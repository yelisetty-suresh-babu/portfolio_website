import { Modal } from "antd";
import useWindowSize from "../../hooks/useWindowSize";
import { CloseOutlined } from "@ant-design/icons";
import { IconCloud } from "../ui/IconCloud";

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
      width={width * 0.6}
      styles={{}}
      closeIcon={
        <div className="">
          <CloseOutlined />
        </div>
      }

    >
      <div className="flex items-center justify-between px-5">
        <div className="w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit
          laudantium quidem vitae distinctio quibusdam quo cumque delectus,
          provident quaerat. Blanditiis minus, esse delectus error magnam ipsum
          numquam adipisci quo. Odit a quidem itaque ducimus autem! Quibusdam
          fuga molestias dolorem incidunt praesentium, quidem et. Neque, dolorum
          voluptas! Unde itaque ea ratione nam ex voluptas, minima, rerum
          laudantium adipisci aspernatur omnis? Repudiandae amet voluptate harum
          fuga a! Ut sit magnam iure, eius nostrum vitae. Quos eligendi ratione
          eaque, nemo impedit voluptates. Atque eveniet laboriosam optio, ut
          ipsam incidunt quia eligendi inventore.
        </div>
        <div className="relative flex size-full items-center justify-center overflow-hidden w-[50%]">
          <IconCloud images={images} />
        </div>
      </div>
    </Modal>
  );
};

export default AboutMeModal;
