import React from 'react'
import Medical from '../assets/medical.jpg'
import Transport from '../assets/transport.jpg'
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
    </div>
  )
}

export default Project
