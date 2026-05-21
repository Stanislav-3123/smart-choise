import NotesSlider from "../../Sliders/NotesSlider.tsx";
import {Link} from "react-scroll";
import {useState, useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const KeyAspects = () => {
    useEffect(() => {
        AOS.init({
            disable: false,
            once: true,
        });
    }, []);

    const [isActive1, setIsActive1] = useState<boolean>(false)
    const [isActive2, setIsActive2] = useState<boolean>(false)
    const [isActive3, setIsActive3] = useState<boolean>(false)
    const [isActive4, setIsActive4] = useState<boolean>(false)
    const [isActive5, setIsActive5] = useState<boolean>(false)

    const onMouseLeave = () => {
        setIsActive1(false)
        setIsActive2(false)
        setIsActive3(false)
        setIsActive4(false)
        setIsActive5(false)
    }
    return (
        <div
            className="w-full overflow-y-hidden sm:overflow-y-visible flex flex-col flex-wrap sm:flex-row gap-12 sm:px-8">
            <div className="fr gap-8 w-full">
                <div className="w-full overflow-y-hidden sm:w-1/2 flex flex-wrap sm:justify-between flex-col gap-12">
                    <div className="sm:px-0 px-4 flex sm:gap-8 sm:flex-col flex-row justify-between">
                        <p data-aos="fade-right" data-aos-duration="500"
                           className="sm:self-start description_number">(05)</p>
                        <h2 data-aos="fade-up" data-aos-duration="500"
                        >KEY ASPECTS</h2>
                    </div>
                    <p data-aos="flip-up" data-aos-duration="500"
                       className="px-4 sm:px-0 sm:pr-[152px] ">In the gambling industry, security and regulation,
                        software and technology,
                        customer support, game variety, and mobile compatibility are key aspects to ensure a safe,
                        innovative, and
                        accessible gambling experience.
                    </p>
                </div>
                <div onMouseEnter={() => setIsActive1(true)} onMouseLeave={onMouseLeave} data-aos="zoom-in"
                     className="hidden sm:block  w-[260px] h-[300px] duration-300 overflow-y-visible relative">
                    {isActive1 ?
                        <div
                            className="z-[1] absolute top-[-200px] animate-key-appear border sm:flex flex-col duration-300 justify-between p-8 rounded-[30px] h-[300px] w-[260px] bg-light_blue"
                        >
                            <div className="key_number">01</div>
                            <div className="flex flex-col duration-300 gap-8">
                                <p className="notes_p">
                                    Security and Regulation
                                </p>
                            </div>
                        </div>
                        : <div
                            className="z-[1] border absolute animate-key-disappear flex-col duration-300 justify-between sm:flex p-8 rounded-[30px] h-[300px] w-[260px] bg-light_blue"
                        >
                            <div className="key_number">01</div>
                            <div className="flex flex-col duration-300 gap-8">
                                <p className="notes_p">
                                    Security and Regulation
                                </p>
                            </div>
                        </div>}

                    {isActive1 ?
                        <p className="h-[300px] animate-key-slide-text duration-300 p-8 flex items-end">
                            Ensuring a safe and fair gambling environment for players.
                        </p> :
                        <p className="h-[300px]  p-8 flex items-end">
                            Ensuring a safe and fair gambling environment for players.
                        </p>}

                </div>
                <div onMouseEnter={() => setIsActive2(true)} onMouseLeave={onMouseLeave} data-aos="zoom-in"
                     data-aos-delay="300"
                     className="hidden sm:block  w-[260px] h-[300px] duration-300 overflow-y-visible relative">
                    {isActive2 ?
                        <div
                            className="z-[2] absolute top-[-200px] animate-key-appear border sm:flex flex-col duration-300 justify-between p-8 rounded-[30px] h-[300px] w-[260px] bg-light_blue"
                        >
                            <div className="key_number">02</div>
                            <div className="flex flex-col duration-300 gap-8">
                                <p className="notes_p">
                                    Software and Technology
                                </p>
                            </div>
                        </div>
                        : <div
                            className="z-[2] border absolute animate-key-disappear flex-col duration-300 justify-between sm:flex p-8 rounded-[30px] h-[300px] w-[260px] bg-light_blue"
                        >
                            <div className="key_number">02</div>
                            <div className="flex flex-col duration-300 gap-8">
                                <p className="notes_p">
                                    Software and Technology
                                </p>
                            </div>
                        </div>}

                    {isActive2 ?
                        <p className="h-[300px] animate-key-slide-text duration-300 p-8 flex items-end">Providing
                            innovative solutions to enhance the gambling experience.
                        </p> :
                        <p className="h-[300px]  p-8 flex items-end">Providing
                            innovative solutions to enhance the gambling experience.
                        </p>}

                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-[35.5px] w-full">
                <div onMouseEnter={() => setIsActive3(true)} onMouseLeave={onMouseLeave} data-aos="zoom-in"
                     className="hidden sm:block  w-[260px] h-[300px] duration-300 overflow-y-visible relative">
                    {isActive3 ?
                        <div
                            className="absolute top-[-200px] animate-key-appear border sm:flex flex-col duration-300 justify-between p-8 rounded-[30px] h-[300px] w-[260px] bg-light_blue"
                        >
                            <div className="key_number">03</div>
                            <div className="flex flex-col duration-300 gap-8">
                                <p className="notes_p">
                                    Customer Support
                                </p>
                            </div>
                        </div>
                        : <div
                            className="z-10 border absolute animate-key-disappear flex-col duration-300 justify-between sm:flex p-8 rounded-[30px] h-[300px] w-[260px] bg-light_blue"
                        >
                            <div className="key_number">03</div>
                            <div className="flex flex-col duration-300 gap-8">
                                <p className="notes_p">
                                    Customer Support
                                </p>
                            </div>
                        </div>}

                    {isActive3 ?
                        <p className="h-[300px] animate-key-slide-text duration-300 p-8 flex items-end">Offering
                            reliable and responsive assistance to players and operators.
                        </p> :
                        <p className="h-[300px]  p-8 flex items-end">Offering reliable
                            and responsive assistance to players and operators.
                        </p>}

                </div>
                <div onMouseEnter={() => setIsActive4(true)} onMouseLeave={onMouseLeave} data-aos="zoom-in"
                     data-aos-delay="300"
                     className="hidden sm:block  w-[260px] h-[300px] duration-300 overflow-y-visible relative">
                    {isActive4 ?
                        <div
                            className="absolute top-[-200px] animate-key-appear border sm:flex flex-col duration-300 justify-between p-8 rounded-[30px] h-[300px] w-[260px] bg-light_blue"
                        >
                            <div className="key_number">04</div>
                            <div className="flex flex-col duration-300 gap-8">
                                <p className="notes_p">
                                    Game Variety
                                </p>
                            </div>
                        </div>
                        : <div
                            className="z-10 border absolute animate-key-disappear flex-col duration-300 justify-between sm:flex p-8 rounded-[30px] h-[300px] w-[260px] bg-light_blue"
                        >
                            <div className="key_number">04</div>
                            <div className="flex flex-col duration-300 gap-8">
                                <p className="notes_p">
                                    Game Variety
                                </p>
                            </div>
                        </div>}

                    {isActive4 ?
                        <p className="h-[300px] animate-key-slide-text duration-300 p-8 flex items-end">Offering
                            a wide range of gambling games to cater to different preferences.
                        </p> :
                        <p className="h-[300px]  p-8 flex items-end">Offering
                            a wide range of gambling games to cater to different preferences.
                        </p>}

                </div>
                <div onMouseEnter={() => setIsActive5(true)} onMouseLeave={onMouseLeave} data-aos="zoom-in"
                     data-aos-delay="600"
                     className="hidden sm:block  w-[260px] h-[300px] duration-300 overflow-y-visible relative">
                    {isActive5 ?
                        <div
                            className="z-20 absolute top-[-200px] animate-key-appear border sm:flex flex-col duration-300 justify-between p-8 rounded-[30px] h-[300px] w-[260px] bg-light_blue"
                        >
                            <div className="key_number">05</div>
                            <div className="flex flex-col duration-300 gap-8">
                                <p className="notes_p">
                                    Mobile Compatibility
                                </p>
                            </div>
                        </div>
                        : <div
                            className="z-20 border absolute animate-key-disappear flex-col duration-300 justify-between sm:flex p-8 rounded-[30px] h-[300px] w-[260px] bg-light_blue"
                        >
                            <div className="key_number">05</div>
                            <div className="flex flex-col duration-300 gap-8">
                                <p className="notes_p">
                                    Mobile Compatibility
                                </p>
                            </div>
                        </div>}

                    {isActive5 ?
                        <p className="h-[300px] animate-key-slide-text duration-300 p-8 flex items-end">Ensuring
                            seamless access to gambling platforms across various devices.
                        </p> :
                        <p className="h-[300px]  p-8 flex items-end">Ensuring seamless access
                            to gambling platforms across various devices.
                        </p>}
                </div>
                <NotesSlider/>
                <div data-aos="zoom-in" data-aos-delay="900"
                     className="w-full sm:w-[260px] px-4 sm:px-0 sm:h-[300px]">
                    <Link to={"contactForm"} offset={-190} smooth={true} duration={900}
                          className="sm:h-[300px] sm:w-[260px] sm:p-8 sm:justify-between cursor-pointer bg-white bg-opacity-20 rounded-[30px] border border-white flex flex-col px-4 py-8 gap-8 w-full">
                        <p className="w-full self-center">Want to write to us? Ask us a question or send your
                            feedback.</p>
                        <button className="flex flex-row gap-2 self-end sm:self-start whitespace-nowrap">
                            <h3 className="self-center text-neutral-900 text-base font-bold font-['Roboto'] uppercase">let's
                                talk</h3>
                            <svg
                                className="w-[50px] h-[50px] rounded-[100px] p-[12px] bg-rose-600 rotate-[-45deg] hover:rotate-[0deg] duration-300"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path fill="#fff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z"/>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default KeyAspects;