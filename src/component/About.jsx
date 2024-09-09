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
            Hi, I’m Himasha, a 3rd-year Information Technology student at the University of Moratuwa. I have a deep passion for web development, especially in technologies like React and .NET, which I've applied in various projects. I thrive on creating clean, efficient, and intuitive web applications, and I’m always eager to learn new things. Currently, I’m exploring the world of machine learning and looking forward to blending it with my web development skills to build smarter, data-driven applications.</p>
        </div>
        </motion.div>
        </div>
    </div>
    )
};
export default About;