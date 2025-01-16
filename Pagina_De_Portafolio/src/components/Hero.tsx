import { personalInfo } from "../constants/data";
import { motion, Variants } from "framer-motion";
//import photo from "/public/fotomia.jpeg";

const container = (delay: number): Variants => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap justify-center items-center ">
                <div className="sm:w-6/12 lg:w-6/12">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Willy Rivera</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-400 bg-clip-text text-4xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">{personalInfo.bio}</motion.p>
                    </div>
                </div>
                <div className="w-3/12 min-w-60 px-2 py-2">
                    <motion.img
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible"
                        src="/Perfil.jpeg"
                        alt="Willy Rivera"
                        className="rounded-md w-64 h-64 lg:w- lg:h-64" />
                </div>
            </div>
        </div>
    )
};

export default Hero;