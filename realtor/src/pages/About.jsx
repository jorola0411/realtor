export default function About() {
    return (
        <>
            <div className="max-w-7xl mx-auto">

                <h1 className="text-4xl md:text-6xl lg:text-[74px] max-w-4xl  my-20 text-center md:text-left">
                    We believe in making better landscapes, cityscapes, and buildings for all people.
                </h1>
                <img src="../src/assets/about1.jpg" alt="About Us" className="w-full h-auto mb-16" />

                <div className="flex flex-col md:flex-row md:justify-between gap-10 my-20 p-10">
                    <div>
                        <p className="text-3xl md:text-4xl font-bold">ABOUT US</p>
                    </div>
                    <div className="flex flex-col gap-5 md:max-w-4xl">
                        <p className="font-semibold text-2xl md:text-4xl">
                            We have a high degree of diverse assignments. Projects are widely spread and take place in a variety of contexts.
                        </p>
                        <div className="flex flex-col md:flex-row gap-10">
                            <p className="text-lg md:text-xl md:w-1/2">
                                Our portfolio spans a wide spectrum of real estate projects, from urban high-rises to curated suburban projects. We pride ourselves on adapting to the unique demands of each community and local context.
                            </p>
                            <p className="text-lg md:text-xl md:w-1/2">
                                For the past 10 years, we’ve taken on a wide range of projects. We thrive on the challenge of developing in various settings from city cores to new neighbourhoods.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#197278] py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
                    <div>
                        <p className="text-lg text-gray-400">Developments</p>
                        <p className="text-4xl font-bold text-white">120+</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-400">Active Projects</p>
                        <p className="text-4xl font-bold text-white">12</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-400">Cities</p>
                        <p className="text-4xl font-bold text-white">16</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-400">Years of Experience</p>
                        <p className="text-4xl font-bold text-white">10</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-400">Project Value</p>
                        <p className="text-4xl font-bold text-white">$3.2B</p>
                    </div>
                </div>
            </div>

            <div className="sm:mx-7 sm:my-10 md:mx-15 md:my-20">
                <div className="flex flex-col md:flex-row justify-start md:gap-20 mt-10">
                    <div className="flex flex-col md:w-[650px] mb-10 md:mb-0">
                        <img src="../src/assets/about2.jpg" alt="Numa Property Image" className="mb-5" />
                        <p className="text-2xl md:text-4xl font-semibold">NUMA</p>
                        <p className="text-lg md:text-2xl">Vancouver, BC</p>
                    </div>
                    <div className="flex flex-col md:w-[650px] mb-10 md:mb-0">
                        <img src="../src/assets/about3.jpg" alt="Pinnacle Property Image" className="mb-5" />
                        <p className="text-2xl md:text-4xl font-semibold">PINNACLE WEST</p>
                        <p className="text-lg md:text-2xl">Vancouver, BC</p>
                    </div>
                    <div className="flex flex-col md:w-[294px]">
                        <img src="../src/assets/about4.jpg" alt="Opus Property Image" className="mb-5" />
                        <p className="text-2xl md:text-4xl font-semibold">OPUS</p>
                        <p className="text-lg md:text-2xl">Vancouver, BC</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-start gap-10 mt-10">
                    <div className="flex flex-col md:w-[294px] mb-10 md:mb-0">
                        <img src="../src/assets/about5.jpg" alt="Lumen Property Image" className="mb-5" />
                        <p className="text-2xl md:text-4xl font-semibold">LUMEN</p>
                        <p className="text-lg md:text-2xl">Vancouver, BC</p>
                    </div>
                    <div className="flex flex-col md:w-[650px]">
                        <img src="../src/assets/about6.jpg" alt="Forma Property Image" className="mb-5" />
                        <p className="text-2xl md:text-4xl font-semibold">FORMA HEIGHTS</p>
                        <p className="text-lg md:text-2xl">Vancouver, BC</p>
                    </div>
                </div>
            </div>
        </>
    );
}
