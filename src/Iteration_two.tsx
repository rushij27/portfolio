import { Download, GithubIcon, LinkedinIcon, Mail, MapPin, Phone } from "lucide-react";
import { useRef } from "react";
import ProfilePhoto from "./assets/images/1677389255776_1__1_-removebg-preview(1)(1).png";
import Angular from "./assets/images/angular.png";
import CSS from "./assets/images/css.png";
import Git from "./assets/images/git.png";
import HTML from "./assets/images/html.png";
import Javascript from "./assets/images/javascript.png";
import MongoDB from "./assets/images/mongo.png";
import React from "./assets/images/react.png";
import Redux from "./assets/images/redux.png";
import Logo from "./assets/images/RJ_-removebg-preview.png";
import Tailwind from "./assets/images/tailwind.png";
import Typescript from "./assets/images/typescript.png";
;

interface ExperienceItemProps {
  year: string;
  title: string;
  company: string;
  description: string[];
}

const Portfolio = () => {
  const contactMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactMeRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollToAbout = () => {
    aboutMeRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen dark:bg-gray-900">
      <header className="container mx-auto py-8 px-4">
        <nav className="flex justify-between items-center space-x-1">
          <div className="w-20 h-20">
            <img src={Logo} alt="Logo" />
          </div>
          <ul className="flex space-x-5 cursor-pointer">
            <li onClick={scrollToAbout} className="hover:text-yellow-400 hover:scale-110">About</li>
            <li onClick={scrollToExperience} className="hover:text-yellow-400 hover:scale-110">Experience</li>
            <li onClick={scrollToContact} className="hover:text-yellow-400 hover:scale-110">Contact</li>
          </ul>
          <div className="cursor-pointer flex items-center space-x-1">
            <GithubIcon className="mr-1 hover:text-yellow-400 hover:scale-125" size={18} onClick={() => window.open("https://github.com/rushij27", "_blank")} />
            <LinkedinIcon className="mr-1 hover:text-yellow-400 hover:scale-125" size={18} onClick={() => window.open("https://www.linkedin.com/in/rushiikeshjagtap/", "_blank")} />
          </div>
        </nav>
      </header>

      <section className="mb-16 bg-black-700 shadow-2xl px-5">
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            <div>
              <div>I'm <h1 className="text-5xl font-bold mb-2 text-yellow-400 font-mono">Rushikesh Jagtap</h1></div>
              <p className="text-xl mb-4">
                Senior Software Engineer
              </p>
              <div>
              </div>
              <button onClick={scrollToExperience} className="cursor-pointer border border-yellow-500 text-yellow-500 px-6 py-2 mb-2 rounded-md transform transition-transform duration-300 hover:scale-110">
                Contact Me
              </button>
            </div>
            <div className="mt-1">
              <button className="cursor-pointer bg-yellow-500 text-black px-6 py-2 rounded-md transform transition-transform duration-300 hover:scale-110">
                <a href="/Rushikesh_Jagtap_Resume.pdf" className="flex flex-row items-center">
                  <Download className="mr-1" size={18} /> Download Resume
                </a>
              </button>
            </div>
          </div>
          <div className="relative mt-2">
            <div className="absolute inset-0 bg-black opacity-25 rounded-full"></div>
            <img src={ProfilePhoto} alt="Rushikesh Jagtap" className="relative rounded-full shadow-lg" />
          </div>
        </div>
      </section>

      <main className="container mx-auto px-5">
        <section className="mb-16 shadow-xl p-4" ref={aboutMeRef}>
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <div className="flex p-4 ">
            <div className="w-1/6 h-1 bg-yellow-500 my-3 mx-1"></div>
            <p className="text-gray-300 mb-4 ml-1 w-3/4">
              I specialize in building and maintaining modern, responsive web
              applications using React, Angular, Redux, JavaScript, TypeScript,
              HTML, and CSS. With a passion for clean code and user-focused
              design, I excel at managing multiple projects and mentoring junior
              developers. My strong problem-solving skills, attention to detail,
              and ability to adapt quickly help me consistently deliver
              high-quality work. I thrive in collaborative environments and
              always seek new opportunities to learn and improve.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 font-poppins">
            <SkillIcon
              name="Angular"
              icon={<img src={Angular} alt="Angular" />}
            />
            <SkillIcon
              name="React"
              icon={<img src={React} alt="React" />}
            />
            <SkillIcon
              name="Javascript"
              icon={<img src={Javascript} alt="Javascript" />}
            />
            <SkillIcon
              name="Typescript"
              icon={<img src={Typescript} alt="Typescript" />}
            />
            <SkillIcon
              name="Redux"
              icon={<img src={Redux} alt="Redux" />}
            />
            <SkillIcon
              name="Git Source Control"
              icon={<img src={Git} alt="Git Source Control" />}
            />
            <SkillIcon
              name="HTML"
              icon={<img src={HTML} alt="HTML" />}
            />
            <SkillIcon
              name="CSS"
              icon={<img src={CSS} alt="CSS" />}
            />
            <SkillIcon
              name="Tailwind CSS"
              icon={<img src={Tailwind} alt="Tailwind CSS" />}
            />
            <SkillIcon
              name="MongoDB"
              icon={<img src={MongoDB} alt="MongoDB" />}
            />
          </div>
        </section>

        <section className="mb-16" ref={experienceRef}>
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <ExperienceItem
            year="2023"
            title="Senior Software Engineer"
            company="Invimatic Technologies, Pune"
            description={[
              "Developed and maintained applications with Tailwind CSS, Formik, and custom components.",
              "Designed, developed, tested, and deployed high-quality applications utilizing Agile methodology.",
              "Managed multiple projects simultaneously while meeting tight deadlines.",
              "Mentored newly hired software engineers through routine coaching and training opportunities.",
              "Added test cases in Cypress for an enterprise-level application.",
              "Analyzed user needs to determine technical requirements."
            ]}
          />
          <ExperienceItem
            year="2021"
            title="Software Engineer"
            company="Invimatic Technologies, Pune"
            description={[
              "Maintained legacy codebase while refactoring parts of the application to use newer technologies like React.js and Angular.",
              "Implemented Redux & Redux-Saga as the management tool in the application.",
              "Worked on Jest test coverage and achieved coverage 90% of all the 3 different applications.",
              "Experience in implementing Formik, Material UI and React Router through out all the projects.",
              "Experience in functional testing new features and defects to verify proper working order.",
              "Utilized version control systems such as Git for tracking changes made in source code over time."
            ]}
          />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-lg mx-auto md:max-w-none" ref={contactMeRef}>
            <div onClick={() => window.open("mailto:imrushi@gmail")} className="cursor-pointer text-yellow-500 bg-gray-800 p-5 flex flex-row justify-center rounded-lg transform transition-transform duration-300 hover:scale-110">
              <Mail className="text-white mr-3" />
              imrushi@gmail.com
            </div>
            <div onClick={() => window.open("tel:+919503432790")} className="cursor-pointer text-yellow-500 bg-gray-800 p-5 flex flex-row justify-center rounded-lg transform transition-transform duration-300 hover:scale-110">
              <Phone className="text-white mr-3" />
              (+91) 9503432790
            </div>
            <div onClick={() => window.open("https://www.google.com/maps/place/Talegaon+Dabhade,+Maharashtra/")} className="cursor-pointer text-yellow-500 bg-gray-800 p-5 flex flex-row justify-center rounded-lg transform transition-transform duration-300 hover:scale-110">
              <MapPin className="text-white mr-3" />
              Pune, India
            </div>
          </div>
        </section>
      </main>

      <div className="flex flex-row justify-center py-4 text-3xl">
        <h3>
          {"<>"} Thanks for Scrolling {"</>"}.
        </h3>
      </div>
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto flex justify-center items-center h-24">
          <p>&copy; 2024 Rushikesh Jagtap. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

const SkillIcon = ({ name, icon }: any) => (
  <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-evenly h-52 hover:bg-yellow-100 hover:text-gray-800 shadow-2xl
  transform transition-transform duration-300 hover:scale-107 cursor-pointer">
    <div className="w-20 h-20">{icon}</div>
    <div className="text-md">{name}</div>
  </div>
);

const ExperienceItem = ({ year, title, company, description }: ExperienceItemProps) => (
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
        {year}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400">{company}</p>
      </div>
    </div>
    <ul className="text-gray-300 ml-16 list-disc">
      {description.map((item, index) => (
        <li key={index} className="mb-1">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// NOTE:: This part is not working. Need to be executed later.

{
  /* <section className="mb-16">
<h2 className="text-2xl font-bold mb-4">Portfolio</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <ProjectCard title="Amazon Scrapper" image="300/200" />
  <ProjectCard title="Modern Architecture" image="300/200" />
  <ProjectCard title="Mountain View" image="300/200" />
</div>
<button className="mt-8 bg-yellow-500 text-black px-6 py-2 rounded-full">
  View More
</button>
</section> */
}

{
  /* <section className="mb-16">
<h2 className="text-2xl font-bold mb-4">Testimonial</h2>
<div className="bg-gray-800 p-6 rounded-lg flex items-center">
  <img
    src="/api/placeholder/100/100"
    alt="Client"
    className="rounded-full mr-6"
  />
  <div>
    <p className="italic mb-2">
      "The design quality, flexibility, documentation and support are
      all absolutely excellent. They are fast, professional and have
      gone above and beyond for me."
    </p>
    <p className="font-semibold">Jasen Ekloran</p>
    <p className="text-gray-400">CEO, Axonas</p>
  </div>
</div>
</section> */
}

//   const ProjectCard = ({ title, image }: any) => (
//     <div className="relative overflow-hidden rounded-lg">
//       <img src={`/api/placeholder/${image}`} alt={title} className="w-full h-48 object-cover" />
//       <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
//         <h3 className="text-lg font-semibold">{title}</h3>
//       </div>
//     </div>
//   );
