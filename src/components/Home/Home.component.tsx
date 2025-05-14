import { Button, ConfigProvider, Space } from "antd";
import useWindowSize from "../../hooks/useWindowSize";

import { createStyles } from "antd-style";
import ProfilePic from "./ProfilePic.component";
import { TextGenerateEffect } from "../ui/TextGenerate";
import SideBarLinks from "./SideBarLinks.component";

import { useState } from "react";
import AboutMeModal from "./AboutMeModal.component";
import { ConfettiButton } from "../ui/Confetti";

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      position: relative;
      box-shadow: 0 0 10px rgba(98, 83, 225, 0.3); /* Default shadow */
      transition: box-shadow 0.3s ease;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s ease;
        border-radius: inherit;
        z-index: 0;
      }

      &:hover {
        box-shadow: 0 0 20px rgba(98, 83, 225, 0.5); /* Stronger glow on hover */
      }

      > span {
        position: relative;
        z-index: 1;
      }
    }
  `,
}));

const Home = () => {
  const [width, height] = useWindowSize();
  const { styles } = useStyle();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
      theme={{
        components: {
          Modal: {
            // contentBg: "#111",
            // headerBg: "#111",
          },
        },
      }}
    >
      <div
        className="text-white flex  items-center   px-40 gap-x-24"
        style={{
          height: height - 112,
          width: width,
        }}
      >
        <div className="flex flex-col items-start gap-y-6">
          <AboutMeModal open={open} setOpen={setOpen} />

          <div className="relative">
            <ConfettiButton>
              <TextGenerateEffect
                className=" font-white"
                words="Yelisetty Suresh"
                size="text-6xl"
                duration={1}
              />
            </ConfettiButton>
          </div>

          <TextGenerateEffect
            className=" font-white"
            words="MERN Developer"
            size="text-3xl"
            duration={2}
          />

          <Space className="pl-2">
            <Button
              type="primary"
              size="large"
              className=""
              onClick={() => setOpen(true)}
            >
              <span className="font-bold">About Me</span>
            </Button>
          </Space>
        </div>

        <ProfilePic />

        <SideBarLinks />
      </div>
    </ConfigProvider>
  );
};

export default Home;
