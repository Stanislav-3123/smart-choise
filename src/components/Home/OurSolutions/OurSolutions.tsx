import React, {useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const OurSolutions = () => {
    useEffect(() => {
        AOS.init({
            disable: false,
            once: true,
        });
    }, []);
    const [isHovered5, setIsHovered5] = useState<boolean>(false)
    const [isHovered6, setIsHovered6] = useState<boolean>(false)
    const [isHovered7, setIsHovered7] = useState<boolean>(false)
    const [isHovered8, setIsHovered8] = useState<boolean>(false)

    const handleHover5 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered5(true)
        setIsHovered6(false)
        setIsHovered7(false)
        setIsHovered8(false)
    }
    const handleHover6 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered5(false)
        setIsHovered6(true)
        setIsHovered7(false)
        setIsHovered8(false)
    }
    const handleHover7 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered5(false)
        setIsHovered6(false)
        setIsHovered7(true)
        setIsHovered8(false)
    }
    const handleHover8 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered5(false)
        setIsHovered6(false)
        setIsHovered7(false)
        setIsHovered8(true)
    }
    const onMouseLeave = () => {
        setIsHovered5(false)
        setIsHovered6(false)
        setIsHovered7(false)
        setIsHovered8(false)
    }
    return (
        <div data-aos="fade-up" data-aos-duration="500"
            className="w-full h-auto">
            <div
                className="sm:hidden flex flex-col sm:flex-row gap-12 py-8 sm:gap-8 sm:py-16 px-4 sm:px-8 w-full h-auto rounded-[30px] bg-white">
                <div className="sm:w-1/2 fc gap-12 sm:justify-between">
                    <div className="flex flex-row sm:flex-col justify-between sm:gap-8">
                        <p data-aos="fade-right" data-aos-duration="500"
                            className="description_number self-start ">(02)</p>
                        <h2 data-aos="fade-up" data-aos-duration="500"
                        >OUR SOLUTIONS</h2>
                    </div>
                    <p data-aos="flip-up" data-aos-duration="500"
                        className="sm:pr-[152px] ">Our solutions provide safe and secure
                        gaming environment, innovative gaming
                        solutions, improve your gaming experience,
                        and boost your gaming revenue</p>
                </div>
                <div className="flex sm:w-1/2 flex-col gap-8">
                    <div data-aos="zoom-in-up" data-aos-duration="500"
                        className="flex justify-between">
                        <h3 className="self-center  duration-300 text-sky-950">Make Betting Unforgettable</h3>
                        <div
                            className="w-16 sm:w-28 h-16 sm:h-28 bg-[url('/images/imageForCategories/slicedCube.png')] bg-cover"></div>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500"
                        className="flex justify-between">
                        <h3 className="self-center">Innovative Gambling Solutions</h3>
                        <div
                            className="w-16 sm:w-28 h-16 sm:h-28 bg-[url('/images/imageForCategories/spiral.png')] bg-cover"></div>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500"
                        className="flex justify-between">
                        <h3 className="self-center">Boost Your Gambling Revenue</h3>
                        <div
                            className="w-16 sm:w-28 h-16 sm:h-28 bg-[url('/images/imageForCategories/pyramid.png')] bg-cover"></div>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="500"
                        className="flex justify-between">
                        <h3 className="self-center">Future Gambling Solutions</h3>
                        <div
                            className="w-16 sm:w-32 h-16 sm:h-32 bg-[url('/images/imageForCategories/cone.png')] bg-cover"></div>
                    </div>
                </div>
            </div>
            <div
                className="hidden sm:flex flex-col sm:flex-row gap-12 py-8 sm:gap-8 sm:py-16 px-4 sm:px-8 w-full h-auto rounded-[30px] bg-white">
                <div className="sm:w-1/2 fc gap-12 sm:justify-between">
                    <div className="flex flex-row sm:flex-col justify-between sm:gap-8">
                        <p className="description_number self-start ">(02)</p>
                        <h2>OUR SOLUTIONS</h2>
                    </div>
                    <p className="sm:pr-[152px]">Our solutions provide safe and secure
                        gaming environment, innovative gaming
                        solutions, improve your gaming experience,
                        and boost your gaming revenue</p>
                </div>
                <div className="flex sm:w-1/2 flex-col gap-8">
                    <div className="flex relative gap-2 sm:justify-between" onMouseEnter={handleHover5}
                         onMouseLeave={onMouseLeave}>
                        <h3 className={isHovered5 ? "sm:self-center font-[500] duration-300 text-sky-950"
                            : "sm:self-center duration-300 font-[500] text-slate-300"}>
                            Make Betting Unforgettable
                        </h3>
                        <div
                            className={isHovered5 ? "w-16 absolute right-[0px] top-[-45px] duration-300 opacity-1 sm:w-36 h-16 sm:h-36 bg-[url('/images/imageForCategories/slicedCube.png')] bg-cover"
                                : "w-16 opacity-0 absolute right-[0px] top-[-45px] sm:w-28 duration-300 h-16 sm:h-28 bg-[url('/images/imageForCategories/slicedCube.png')] bg-cover"}/>
                    </div>
                    <div className="flex relative gap-2 sm:justify-between" onMouseEnter={handleHover6}
                         onMouseLeave={onMouseLeave}>
                        <h3 className={isHovered6 ? "font-[500] sm:self-center duration-300 text-sky-950"
                            : "font-[500] sm:self-center duration-300 text-slate-300"}>
                            Innovative Gambling Solutions
                        </h3>
                        <div
                            className={isHovered6 ? "w-16 absolute right-[0px] top-[-45px] duration-300 opacity-1 sm:w-36 h-16 sm:h-36 bg-[url('/images/imageForCategories/spiral.png')] bg-cover"
                                : "w-16 opacity-0 absolute right-[0px] top-[-45px] sm:w-28 duration-300 h-16 sm:h-28 bg-[url('/images/imageForCategories/spiral.png')] bg-cover"}/>
                    </div>
                    <div className="flex relative gap-2 sm:justify-between" onMouseEnter={handleHover7}
                         onMouseLeave={onMouseLeave}>
                        <h3 className={isHovered7 ? "font-[500] sm:self-center duration-300 text-sky-950"
                            : "font-[500] sm:self-center duration-300 text-slate-300"}>
                            Boost Your Gambling Revenue
                        </h3>
                        <div
                            className={isHovered7 ? "w-16 absolute right-[0px] top-[-45px] duration-300 opacity-1 sm:w-[150px] h-16 sm:h-[150px] bg-[url('/images/imageForCategories/pyramid.png')] bg-cover"
                                : "w-16 opacity-0 absolute right-[0px] top-[-45px] sm:w-28 duration-300 h-16 sm:h-28 bg-[url('/images/imageForCategories/pyramid.png')] bg-cover"}/>
                    </div>
                    <div className="flex relative gap-2 sm:justify-between" onMouseEnter={handleHover8}
                         onMouseLeave={onMouseLeave}>
                        <h3 className={isHovered8 ? "font-[500] sm:self-center duration-300 text-sky-950"
                            : "font-[500] sm:self-center duration-300 text-slate-300"}>
                            Future Gambling Solutions
                        </h3>
                        <div
                            className={isHovered8 ? "w-16 absolute right-[0px] top-[-45px] duration-300 opacity-1 sm:w-36 h-16 sm:h-36 bg-[url('/images/imageForCategories/cone.png')] bg-cover"
                                : "w-16 opacity-0 absolute right-[0px] top-[-45px] sm:w-28 duration-300 h-16 sm:h-28 bg-[url('/images/imageForCategories/cone.png')] bg-cover"}/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OurSolutions;