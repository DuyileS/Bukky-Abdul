import { Icon } from "@iconify/react";

const AnimatedButton = () => {
    return (
        <button className="group relative overflow-hidden flex items-center bg-secondary py-1  transition duration-300">
            <div className="absolute flex justify-center items-center pl-1 w-10 h-full bg-secondary-500 group-hover:bg-secondary-400 z-0 transition-all duration-500 group-hover:w-full"></div>
            <p className="text-black text-xs tracking-widest uppercase pl-6 font-semibold z-10 transition duration-500 group-hover:text-gray-800 group-hover:animate-bounce-once group-hover:translate-x-0">
                Book Bukky Abdul
            </p>
            <div className="flex justify-center items-center w-10 h-10 mr-2 relative z-10">
                <Icon icon="material-symbols:arrow-right-alt" className="w-4 h-8 text-gray-800" />
            </div>
        </button>
    );
};

export default AnimatedButton;
