import { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import w from "/public/W_logo.jpg"; // Ajusta la ruta según tu estructura de proyecto

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="text-white shadow-lg">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={w} alt="logo" className="h-10 w-10 rounded-full mr-2" />
                    <a href="/" className="text-2xl font-bold">MyBrand</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:underline">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:underline">About</a>
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:underline">Services</a>
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:underline">Contact</a>
                </div>

                {/* Icons for Social Media */}
                <div className="hidden md:flex items-center space-x-4 text-2xl">
                    <FaLinkedin />
                    <FaGithub />
                    <FaSquareXTwitter />
                    <FaInstagram />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 border-solid border-2 border-gray-200">
                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Home</a>
                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">About</a>
                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Services</a>
                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Contact</a>
                    <div className="flex justify-center space-x-4 py-4 text-2xl">
                        <FaLinkedin />
                        <FaGithub />
                        <FaSquareXTwitter />
                        <FaInstagram />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
