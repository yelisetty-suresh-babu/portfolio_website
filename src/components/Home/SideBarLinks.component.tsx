import { Tooltip } from "antd";

const sideBarData = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/yelisetty-suresh-333759221/",
    imgLink: "./linkedin.svg",
  },
  {
    title: "Github",
    link: "https://github.com/yelisetty-suresh-babu",
    imgLink: "./github.svg",
  },
  {
    title: "Email",
    link: "mailto:yelisettysuresh2@gmail.com",
    imgLink: "./email.svg",
  },
  {
    title: "Resume",
    link: "https://drive.google.com/file/d/1TAQAY8yhdDOFFcbrDamK_z8xvjHcZEp3/view?usp=sharing",
    imgLink: "./link.svg",
  },
];

interface SideBarButtonProps {
  title: string;
  link: string;
  imgLink: string;
}
const SideBarButton = ({ title, link, imgLink }: SideBarButtonProps) => {
  return (
    <Tooltip placement="left" title={title}>
      <a href={link} target="_blank">
        <img
          src={imgLink}
          alt={title}
          width={48}
          height={52}
          className="rounded-2xl p-2 bg-none transition-shadow duration-300 shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        />
      </a>
    </Tooltip>
  );
};

const SideBarLinks = () => {
  return (
    <div className="absolute right-0 pr-6 gap-y-10 flex flex-col">
      {sideBarData.map((data) => {
        return (
          <SideBarButton
            key={data.title}
            imgLink={data.imgLink}
            link={data.link}
            title={data.title}
          />
        );
      })}
    </div>
  );
};

export default SideBarLinks;
