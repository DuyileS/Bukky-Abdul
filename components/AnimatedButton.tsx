import { Icon } from "@iconify/react";

const AnimatedButton = () => {
    return (
        <div className="group relative overflow-hidden inline-flex w-fit items-center bg-secondary py-1 cursor-pointer transition duration-300">
            <div className="absolute top-0 left-0 flex justify-center items-center pl-1 w-10 h-full bg-secondary group-hover:bg-secondary-400 z-0 transition-all duration-500 group-hover:w-full"></div>
            <p className="text-primary text-xs tracking-widest uppercase pl-6 font-semibold z-10 transition duration-500 group-hover:text-primary-700 group-hover:animate-bounce-once group-hover:translate-x-0">
                Book Bukky Abdul
            </p>
            <div className="flex justify-center items-center w-10 h-10 mr-2 relative z-10">
                <Icon icon="material-symbols:arrow-right-alt" className="w-4 h-8 text-primary" />
            </div>
        </div>
    );
};

export default AnimatedButton;
