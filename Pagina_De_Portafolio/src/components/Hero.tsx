import { personalInfo } from "../constants/data";
//import photo from "/public/fotomia.jpeg";
const Hero = () => {
    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap justify-center">
                <div className="w-9/12">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Willy Rivera</h1>
                        <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-400 bg-clip-text text-4xl tracking-tight text-transparent">
                            Full Stack Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{personalInfo.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;