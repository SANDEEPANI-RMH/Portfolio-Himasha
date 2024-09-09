import AboutMe from '../assets/about.jpg';
import {motion} from 'framer-motion';

const About = () => {
    return( 
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About 
            <span className="text-neutral-500"> Me</span>
            </h2>
     <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
         <img src={AboutMe} alt="about" className="rounded-2xl shadow-lg" />
        </div>
        </motion.div>
        <motion.div 
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: 100}}
         transition={{duration: 0.5}}
        className="w-full lg:w-1/2 ">
        <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
            Hi! I'm Himasha Sandeepani, a passionate web developer with a strong focus on creating clean, efficient, and visually appealing websites. My journey into web development started with a fascination for how the web connects people and businesses, and I've since honed my skills in front-end and back-end technologies. I specialize in building responsive, user-friendly applications using modern frameworks like React, .NET, and Tailwind CSS. I thrive on challenges and love crafting solutions that not only meet but exceed client expectations. When I'm not coding, I'm always learning new techniques to stay at the cutting edge of technology.
            </p>
        </div>
        </motion.div>
        </div>
    </div>
    )
};
export default About;