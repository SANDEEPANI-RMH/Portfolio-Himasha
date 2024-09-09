import React from 'react'
import { motion } from 'framer-motion'

function Education() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl "> Education </motion.h1>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
          className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">2022-2026 (ongoing)</p>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            className="w-full max-w-xl lg:w-3/4">
                <h1 className="mb-2 font-semibold text-lg"> BSc(Hons) in Information Technology</h1>
                <h6 className="text-lg">University of Moratuwa</h6>
            </motion.div>
           
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div 
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: -100}}
         transition={{duration: 1.5}}
        className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">2012-2020</p>
            </motion.div>
            <motion.div 
             whileInView={{opacity: 1, x: 0}}
             initial={{opacity: 0, x: 100}}
             transition={{duration: 1}}
            className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold text-lg"> WP/GM Galahitiyawa Central College</h6>
                <h6 className="text-lg">Ganemulla</h6>
            </motion.div>
      </div>
      </div>
    </div>
  )
}

export default Education
