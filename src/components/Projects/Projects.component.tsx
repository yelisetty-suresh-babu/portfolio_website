import { useState } from "react";
import { CardContainer, CardBody, CardItem } from "../ui/3DCard";
import { TextGenerateEffect } from "../ui/TextGenerate";
import { Button } from "antd";
import { createStyles } from "antd-style";
import {
  GithubOutlined,
  LinkOutlined,
  CodeOutlined,
  DatabaseOutlined,
  ApiOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { projects } from "./projectsData";

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      position: relative;
      box-shadow: 0 0 10px rgba(98, 83, 225, 0.3);
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
        box-shadow: 0 0 20px rgba(98, 83, 225, 0.5);
      }

      > span {
        position: relative;
        z-index: 1;
      }
    }
  `,
}));

const Projects = () => {
  const { styles } = useStyle();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Projects", icon: <CodeOutlined /> },
    { key: "fullstack", label: "Full Stack", icon: <ApiOutlined /> },
    { key: "frontend", label: "Frontend", icon: <CodeOutlined /> },
    { key: "backend", label: "Backend", icon: <DatabaseOutlined /> },
    { key: "mobile", label: "Mobile", icon: <MobileOutlined /> },
    {
      key: "Web3",
      label: "Web3",
      icon: (
        <div className="flex item-center justify-center h-[20px]">
          <img src="public/solidity.svg" />
        </div>
      ),
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  return (
    <div className="min-h-screen w-full bg-[#111] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <TextGenerateEffect
            className="font-white"
            words="My Projects"
            size="text-5xl"
            duration={1}
          />
          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Explore my latest work and contributions to various projects. Each
            project showcases different technologies and problem-solving
            approaches.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 justify-center p-2 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10">
            {categories.map((category) => (
              <Button
                key={category.key}
                type={selectedCategory === category.key ? "primary" : "default"}
                className={`${
                  selectedCategory === category.key
                    ? styles.linearGradientButton
                    : "bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                } transition-all duration-200 font-medium`}
                onClick={() => setSelectedCategory(category.key)}
                icon={category.icon}
                size="large"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          {filteredProjects.map((project) => (
            <CardContainer
              key={project.id}
              className="w-full"
              containerClassName="py-2"
            >
              <CardBody className="relative bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-0 h-[520px] flex flex-col overflow-hidden group">
                {/* Gradient Overlay */}
                <div className="absolute !h-[230px] inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Project Image/Icon */}
                <CardItem
                  translateZ="50"
                  className="w-full !h-[230px] relative overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 flex items-center justify-center relative">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
                      <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-200"></div>
                      <div className="absolute bottom-4 right-4 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
                    </div>

                    {/* Category Icon */}
                    <div className="text-7xl text-white/40 group-hover:text-white/60 transition-colors duration-300 relative z-10">
                      {project.categories.includes("fullstack") && (
                        <ApiOutlined />
                      )}
                      {project.categories.includes("frontend") && (
                        <CodeOutlined />
                      )}
                      {project.categories.includes("backend") && (
                        <DatabaseOutlined />
                      )}
                      {project.categories.includes("mobile") && (
                        <MobileOutlined />
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/20 font-medium">
                        {project.categories[0].charAt(0).toUpperCase() +
                          project.categories[0].slice(1)}
                      </span>
                    </div>
                  </div>
                </CardItem>

                {/* Project Content */}
                <CardItem translateZ="60" className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-xs text-white/70 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.githubUrl && (
                      <Button
                        type="default"
                        icon={<GithubOutlined />}
                        href={project.githubUrl}
                        target="_blank"
                        className="flex-1 h-10 bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-200 font-medium"
                      >
                        View Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        type="primary"
                        icon={<LinkOutlined />}
                        href={project.liveUrl}
                        target="_blank"
                        className={`${styles.linearGradientButton} flex-1 h-10 font-medium`}
                      >
                        Live Demo
                      </Button>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <Button
                        type="default"
                        disabled
                        className="flex-1 h-10 bg-white/5 border-white/10 text-white/40 font-medium !text-white"
                      >
                        Private Project
                      </Button>
                    )}
                  </div>
                </CardItem>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-all duration-500 pointer-events-none"></div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl text-white/20 mb-4">
              <CodeOutlined />
            </div>
            <h3 className="text-xl text-white/60 mb-2">No projects found</h3>
            <p className="text-gray-500">
              Try selecting a different category to see more projects.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
