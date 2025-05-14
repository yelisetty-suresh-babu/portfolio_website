import { Timeline } from "../ui/Timeline";

export function TimelineView() {
  const data = [
    {
      title: "2021",
      content: (
        <div>
          <p className=" text-2xl font-extrabold text-white">
            Started Learning C++ and Python
          </p>
          <div className="text-white">
            <div className="flex items-center gap-x-8">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                During my college C++ journey, I first grasped the basics of
                coding, then dove deep into object-oriented concepts like
                classes and inheritance. I also learned how to manage memory
                effectively and became skilled in using data structures,
                algorithms, and the powerful Standard Template Library to build
                robust applications.
              </p>
              <img src="./C++.png" alt="" width={150} height={150} />
            </div>
            <div className="flex items-center gap-x-8">
              <img src="./python.png" alt="" width={150} height={150} />
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                In my Python college curriculum, I started by learning the
                easy-to-read syntax and fundamental programming ideas. I then
                explored key concepts like data structures (lists,
                dictionaries), functions, and object-oriented programming. I
                also gained experience with modules and libraries for various
                tasks, making development quite efficient.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className=" text-2xl font-extrabold text-white">
            Started Learning Java and React
          </p>
          <div className="text-white ">
            <div className="flex items-center gap-x-8 mb-8">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                During my Java college experience, I began by understanding its
                core syntax and the principles of object-oriented programming,
                such as classes, inheritance, and polymorphism. I learned how
                the Java Virtual Machine works and explored essential concepts
                like multithreading, exception handling, and working with
                collections. My studies also covered building applications using
                Java's extensive libraries.
              </p>
              <img src="./java.png" alt="" width={150} height={150} />
            </div>
            <div className="flex items-center gap-x-8 mb-8">
              <img src="./html.png" alt="" width={150} height={150} />
              <img src="./css3.png" alt="" width={150} height={150} />
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                My web development journey began with HTML, where I learned to
                structure web content semantically. Simultaneously, I mastered
                CSS to style these structures, focusing on layout, visual
                aesthetics, and responsive design for various devices. These
                skills provided the essential visual foundation for all my
                subsequent projects.
              </p>
            </div>
            <div className="flex items-center gap-x-8">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Building on this, I moved to JavaScript to add interactivity and
                dynamic functionality to my web pages. I learned to manipulate
                the DOM, handle user events, and make asynchronous requests for
                richer user experiences. My learning then progressed to React, a
                library that enabled me to build complex UIs using reusable
                components and efficiently manage application state, ultimately
                allowing me to create scalable and maintainable web
                applications.
              </p>
              <img src="./javascript.png" alt="" width={150} height={150} />
              <img src="./react.png" alt="" width={200} height={200} />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2023",
      content: (
        <div>
          <p className=" text-2xl font-extrabold text-white mb-8">
            Started Learning NodeJs , MongoDB and MySQL
          </p>
          <div className="text-white ">
            <div className="flex items-center  gap-x-8 mb-8">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                My backend development learning started with Node.js, where I
                grasped how to use JavaScript on the server-side to build
                scalable and efficient applications. I learned about its
                event-driven, non-blocking I/O model and how to handle routing
                and middleware.With the help of NodeJs i have built multiple
                Full-Stack Projects
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                My foray into React Native involved learning how to build
                cross-platform mobile applications using my existing JavaScript
                and React knowledge. I focused on understanding React Native's
                component-based architecture, working with native modules, and
                handling platform-specific differences to create apps that can
                run on both iOS and Android from a single codebase. I also
                explored state management solutions and navigation patterns
                common in mobile development.
              </p>
              <img src="./nodejs.png" alt="" width={150} height={150} />
            </div>
            <div className="flex items-center gap-x-8 mb-8">
              <img src="./mongoDb.png" alt="" width={150} height={150} />
              <img src="./mysql.png" alt="" width={150} height={150} />
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                For data storage, I explored MongoDB, a NoSQL database that
                offered flexibility with its document-based structure, making it
                easy to work with JSON-like data. I learned how to perform CRUD
                operations and understand its schema-less nature. In parallel, I
                also delved into MySQL, a relational database, focusing on
                structured data, SQL queries for data manipulation, and
                understanding database schemas and relationships.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className=" text-2xl font-extrabold text-white mb-4">
            Explored Different Fields like DevOps , Machine Learning
          </p>
          <div className="text-white ">
            <div className="flex items-center gap-x-8 mb-8">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                My exploration of DevOps centered on understanding the
                importance of collaboration and automation in software
                development and operations. I learned about CI/CD pipelines for
                streamlining releases, Infrastructure as Code for managing
                environments, containerization and orchestration for
                scalability, and monitoring tools for system reliability. This
                holistic view highlighted how DevOps aims to optimize the entire
                software lifecycle for efficiency and stability.
              </p>
              <img src="./devops.png" alt="" width={150} height={150} />
            </div>
            <div className="flex items-center gap-x-8 mb-8">
              <img
                src="./machineLearning.png"
                alt=""
                width={150}
                height={150}
              />
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                My machine learning introduction involved grasping core concepts
                like supervised and unsupervised learning and model evaluation.
                I explored key algorithms such as regression, classification,
                and clustering. I also learned the practical skills of training,
                validating, and deploying models using Python and libraries like
                scikit-learn and TensorFlow, enabling me to analyze data and
                build predictive solutions.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024 (Aug) to Now",
      content: (
        <div>
          <p className=" text-2xl font-extrabold text-white mb-4">
            Internship Experience
          </p>
          <div className="text-white ">
            <div className="flex items-center gap-x-8 mb-8">
              <p>
                During my internship at Maximl in Bengaluru, I developed
                solutions with significant impact. I designed the frontend for
                an AI-powered application that assesses safety gear compliance,
                reducing evaluation time from 30 minutes to 2 minutes (15x
                improvement) and contributing to securing 6 crore in funding. I
                also developed a React application to analyze XER files,
                replacing P6 Primavera and improving issue detection efficiency
                by over 60%.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip" id="timeline">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineView;
