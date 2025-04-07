import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div > 
            <Header />
            <div className="mx-15">
            <h1 className="text-[74px] w-[1000px] mx-15 my-20">We believe in making better landscapes, cityscapes, and buildings for all people.</h1>
            <img src="../src/assets/about1.jpg" alt="About Us" />




            <div className="flex justify-start gap-[600px] my-20">
                <div>
                    <p className="text-4xl">ABOUT US</p>
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        <p className="font-semibold text-5xl w-[900px] mb-10">We have a high degree of diverse assignments. Projects are widely spread and take place in a variety of contexts. </p>
                    </div>
                    <div className="flex gap-20">
                        <p className="text-xl w-[350px]">Our portfolio spans a wide spectrum of real estate projects, from urban high-rises to curated suburban projects. We pride ourselves on adapting to the unique demands of each community and local context.</p>
                        <p className="text-xl w-[350px]">For the past 10 years, we’ve taken on a wide range of projects. We thrive on the challenge of developing in various settings from city cores to new neighbourhoods.</p>
                    </div>
                </div>
            </div>
            </div>

            <div className="bg-[#197278] flex gap-[200px] justify-center h-[300px] items-center">
                <div className="text-center">
                    <p className="text-2xl text-gray-400">Developments</p>
                    <p className="text-7xl font-semibold text-white">120+</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl text-gray-400">Active Projects</p>
                    <p className="text-7xl font-semibold text-white">12</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl text-gray-400">Cities</p>
                    <p className="text-7xl font-semibold text-white">16</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl text-gray-400">Years of Experience</p>
                    <p className="text-7xl font-semibold text-white">10</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl text-gray-400">Project Value</p>
                    <p className="text-7xl font-semibold text-white">$3.2B</p>
                </div>
            </div>

            <div className="mx-15 my-20">
            <div className="flex justify-start gap-20 mt-10">
                <div className="flex flex-col w-[650px]">
                    <img src="../src/assets/about2.jpg" alt="About Us" className="mb-5" />
                    <p className="text-4xl font-semibold">NUMA</p>
                    <p className="text-2xl">Vancouver, BC</p>
                </div>
                <div className="flex flex-col w-[650px]">
                    <img src="../src/assets/about3.jpg" alt="About Us" className="mb-5" />
                    <p className="text-4xl font-semibold">PINNACLE WEST</p>
                    <p className="text-2xl">Vancouver, BC</p>
                </div>
                <div className="flex flex-col w-[294px]">
                    <img src="../src/assets/about4.jpg" alt="About Us" className="mb-5" />
                    <p className="text-4xl font-semibold">OPUS</p>
                    <p className="text-2xl">Vancouver, BC</p>
                </div>
            </div>
            <div className="flex justify-start gap-10 mt-10">
                <div className="flex flex-col w-[294px]">
                    <img src="../src/assets/about5.jpg" alt="About Us" className="mb-5" />
                    <p className="text-4xl font-semibold">LUMEN</p>
                    <p className="text-2xl">Vancouver, BC</p>
                </div>
                <div className="flex flex-col w-[650px]">
                    <img src="../src/assets/about6.jpg" alt="About Us" className="mb-5" />
                    <p className="text-4xl font-semibold">FORMA HEIGHTS</p>
                    <p className="text-2xl">Vancouver, BC</p>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}
