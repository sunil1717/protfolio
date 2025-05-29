import React from 'react'
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";



import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  
  SiPython,
  SiReact
  
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaCode } from "react-icons/fa"; 

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-700" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "C", icon: <FaCode className="text-blue-700" /> },
  { name: "Java", icon: <DiJava className="text-red-600" /> },
  { name: "Python", icon: <SiPython className="text-blue-400" /> },
  { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
];



const projects = [
  {
    name: "MERN Chat App",
    image: "/chatpic.png",
    link: "https://chat-app-f-three.vercel.app/",
  },
  {
    name: "E-commerce Dashboard",
    image: "/e-comm.png",
    link: "https://e-comm-frontend-chi.vercel.app/",
  },
  {
    name: "My Portfolio Website",
    image: "protpic.png",
    link: "",
  },
  {
    name: "Dj Business Manage",
    image: "/sunildj1.png",
    link: "https://sunildj-f.vercel.app/",
  },
];

const Homepage = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  return (
    <div >
     
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20  text-white">
         {/* Text Section - Left */}
      <motion.div
        className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#b6ff00] drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Sunil Kumar Sahoo
        </motion.h1>
         <motion.h1
          className="text-xl md:text-2xl  text-gray-300 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
         Computer Science student at GITA Autonomous College, Bhubaneswar. I specialize in full-stack web development using the MERN stack and have a strong interest in machine learning and love building efficient, user-friendly applications.
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I'm a{" "}
          <span className="text-[#b6ff00] font-semibold">
            <Typewriter
              words={["Developer", "Coder", "Tech Enthusiast"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>
        </motion.p>

        <motion.a
          href="https://www.linkedin.com/in/sunil-kumar-sahoo17"
          whileHover={{ scale: 1, boxShadow: "0px 0px 10px #b6ff00" }}
          className="inline-block mt-6 px-6 py-3 bg-[#b6ff00] text-black rounded-full  transition duration-300"
          
        >
          Contact Me
        </motion.a>
      </motion.div>

      {/* Image Section - Right */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#b6ff00] shadow-[0_10px_30px_#b6ff00]">
          <img
            src="/my-pic.jpg" 
            alt="Sunil Kumar Sahoo"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      </section>
      
       {/* -----------------------------------------------------About section ------------------------------------------------------------------- */}
       <section id="about" className="   py-20 px-5 md:px-20  text-gray-100 " >
            <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-[#b6ff00]">About Me</h2>

        <p className="text-center text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
          Hi, I'm <span className="font-semibold">Sunil Kumar Sahoo</span> — a passionate Full-Stack Developer with{" "}
          <span className="text-[#b6ff00] font-semibold">1 year of professional experience</span> building dynamic and responsive web applications.  
          I've successfully developed <span className="text-[#b6ff00] font-semibold">3+ MERN stack projects</span>, crafting seamless user experiences and efficient backends.
          I thrive on solving problems and turning ideas into reality using modern web technologies like React, Node.js, MongoDB, and more.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-center text-[#b6ff00]">Skills</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl shadow-md cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white border ${
                selectedSkill === index ? "ring-4 ring-[#b6ff00]" : ""
              }`}
              whileHover={{ rotate: 5,scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: -10 }}
              onClick={() => setSelectedSkill(index)}
            >
              <div className="text-5xl mb-2">{skill.icon}</div>
              <p className="text-sm text-black font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
       </section>
       {/* ----------------------------------------------------Project section ------------------------------------------------------*/}
      <section id="project" className="  py-10 px-5 md:px-20 md:py-20  text-gray-50">
           <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#b6ff00] mb-10">My Projects</h2>

        <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {projects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black  rounded-xl overflow-hidden  hover:shadow-xl transition-shadow duration-1000 border-1 border-[#b6ff00] shadow-[0_0_5px_#b6ff00]"
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.97 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-50 mb-2">
                  {project.name}
                </h3>
               

              </div>
            </motion.a>
          ))}
        </div>
      </div>
      </section>
      
      
    </div>
  )
}

export default Homepage