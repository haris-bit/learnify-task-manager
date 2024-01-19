// components/HeroSection.js

import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="hero w-full h-full text-white py-16">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Supercharge Your Tasks with Learnify</h1>
                <p className="text-lg md:text-xl mb-8">Unlock your potential and achieve your goals with our powerful platform.</p>
                <a href="#get-started" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white transition duration-300">Get Started</a>

                <Image
                    src="/hero.png"
                    alt="Hero Image"
                    width={500}
                    height={500}
                    className="mx-auto mt-8 rounded-md "
                />
            </div>




        </div>
    );
};

export default HeroSection;
