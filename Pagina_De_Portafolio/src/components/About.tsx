import IMAGES from "../images/images";
import { personalInfo } from "../constants/data";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="w-9/12 rounded-2xl" src={IMAGES.about} alt="about"/>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{personalInfo.about}</p>
                    </div>
                 </div>
            </div>
        </div>
    )
};

export default About;