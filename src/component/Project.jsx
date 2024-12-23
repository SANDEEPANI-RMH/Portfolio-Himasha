import React from 'react'
import Medical from '../assets/medical.jpg'
import Transport from '../assets/transport.jpg'
import Cake from '../assets/Cake.jpg'
import Notes from '../assets/Notes.jpeg'
import Portfolio from '../assets/portfolio.jpg'
import { motion } from 'framer-motion'

function Project() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
      className="my-20 text-center text-4xl" >Projects</motion.h2>  
      <div className="my-8 flex flex-wrap lg:justify-center">
        <div className="w-full lg:w-1/4">
         <motion.img
         whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
         src={Medical} alt="medical" className="mb-6 rounded" width={150} height={150}/>
        </div>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 1}}
        className="w-full max-w-xl lg:w-3/4">
            <h1 className="mb-2 font-semibold text-lg">  PATIENT MONITORING SYSTEM</h1>
            <h6 >(FIRST YEAR HARDWARE PROJECT- GROUP)</h6>
            <p className="mb-4 text-neutral-400">Developed a wearable device to measure human blood pressure,
 heart rate, body temperature and oxygen saturation level. 
Developed a web application to display data taken for 30 days in
 graphs.</p>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">MySql</span>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">PHP</span>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">Boostrap</span>    
        </motion.div>
      </div>

      <div className="my-8 flex flex-wrap lg:justify-center">
        <div className="w-full lg:w-1/4">
         <motion.img 
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: -100}}
         transition={{duration: 1}}
         src={Transport} alt="medical" className="mb-6 rounded" width={150} height={150}/>
        </div>
        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 1}}
        className="w-full max-w-xl lg:w-3/4">
            <h1 className="mb-2 font-semibold text-lg">  TRANSPORT E TICKETING SYSTEM</h1>
            <h6 >(Second YEAR SOFTWARE PROJECT- GROUP)</h6>
            <p className="mb-4 text-neutral-400">This project is Based on web development frameworks. we
 develop an online ticket booking platform for buses and trains.
 That allows passengers to book their tickets by searching their
 destination.</p>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">ReactJs</span>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">ASP.NET</span>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">Boostrap</span> 
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">MSSQL</span>    
        </motion.div>
      </div>



      <div className="my-8 flex flex-wrap lg:justify-center">
        <div className="w-full lg:w-1/4">
         <motion.img 
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: -100}}
         transition={{duration: 1}}
         src={Cake} alt="medical" className="mb-6 rounded" width={150} height={150}/>
        </div>
        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 1}}
        className="w-full max-w-xl lg:w-3/4">
            <h1 className="mb-2 font-semibold text-lg">  QUEENS OF CAKE website</h1>
            <h6 >(Completed-Group)</h6>
            <p className="mb-4 text-neutral-400">Building an e-commerce platform to simplify cake ordering, leveraging a scalable microservice architecture for performance and modularity. . My contributions include developing the home page, implementing the admin product management section, and building the cart system with dynamic functionality.
            </p>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">ReactJs</span>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">Node.js</span>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">MongoDB</span> 
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">Express.js</span>    
        </motion.div>
      </div>



      <div className="my-8 flex flex-wrap lg:justify-center">
        <div className="w-full lg:w-1/4">
         <motion.img 
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: -100}}
         transition={{duration: 1}}
         src={Notes} alt="medical" className="mb-6 rounded" width={150} height={150}/>
        </div>
        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 1}}
        className="w-full max-w-xl lg:w-3/4">
            <h1 className="mb-2 font-semibold text-lg">  NOTE APP</h1>
            <h6 >(Completed-Individual)</h6>
            <p className="mb-4 text-neutral-400">A task management application that allows users to create, edit, delete, and organize notes with tagging functionality for easy filtering. The app includes user authentication for secure access, tag-based filtering, seamless API requests using Axios, and efficient error handling and validation to enhance usability and performance.
            </p>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">ReactJs</span>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">Node.js</span>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">MongoDB</span>   
        </motion.div>
      </div>

      <div className="my-8 flex flex-wrap lg:justify-center">
        <div className="w-full lg:w-1/4">
         <motion.img 
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: -100}}
         transition={{duration: 1}}
         src={Portfolio} alt="medical" className="mb-6 rounded" width={150} height={150}/>
        </div>
        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 1}}
        className="w-full max-w-xl lg:w-3/4">
            <h1 className="mb-2 font-semibold text-lg">PORTFOLIO WEBSITE</h1>
            <h6 >(Completed-Individual)</h6>
            <p className="mb-4 text-neutral-400">A website designed to showcase my work and skills in software development. It highlights a range of projects, offering an interactive and visually appealing way to explore my abilities. The portfolio includes smooth animations and a responsive layout for an enhanced user experience, and it is deployed on Vercel for live access.
            </p>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">NextJs</span>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">Framer Motion</span>
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">TailwindCSS</span> 
 <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm fonr-medium text-purple-900">Vercel</span>   
        </motion.div>
      </div>

    </div>
  )
}

export default Project
