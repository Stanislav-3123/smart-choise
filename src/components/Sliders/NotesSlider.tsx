import {useState, useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const NotesSlider = () => {

        useEffect(() => {
            AOS.init({
                disable: false,
                once: true,
            });
        }, []);
    const [isActive1, setIsActive1] = useState<boolean>(true)
    const [isActive2, setIsActive2] = useState<boolean>(true)
    const [isActive3, setIsActive3] = useState<boolean>(true)
    const [isActive4, setIsActive4] = useState<boolean>(true)
    const [isActive5, setIsActive5] = useState<boolean>(true)
    return (
        <div data-aos="fade-left" data-aos-duration="500"
            className="sm:hidden h-[320px] justify-start items-start inline-flex overflow-y-hidden w-full">
            <div className="flex flex-row gap-4 px-4">
                <div onClick={() => setIsActive1(!isActive1)}
                     className={isActive1 ? "border relative flex flex-col duration-200 justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-light_blue"
                         : "border duration-200 relative flex flex-col justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-blue-100 border-white"}>
                    <div className="flex relative">
                        <div
                            className="w-[50px] h-[50px] absolute right-[-22px] top-[-22px] p-[13px] bg-blue-100 rounded-[100px]">
                            <svg className={isActive1 ? "duration-200" : "duration-200 rotate-45"}
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill={isActive1 ? "#44699F" : "#181717"} d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
                            </svg>
                        </div>
                        <div className="text-slate-300 text-base font-bold font-['Syncopate']">01</div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {isActive1 ? <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
                                Security and Regulation
                            </p>
                            : <p>Ensuring a safe and fair gambling environment for players.</p>}
                    </div>
                </div>
                <div onClick={() => setIsActive2(!isActive2)}
                     className={isActive2 ? "border relative flex flex-col duration-200 justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-light_blue"
                         : "border duration-200 relative flex flex-col justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-blue-100 border-white"}>
                    <div className="flex relative">
                        <div
                            className="w-[50px] h-[50px] absolute right-[-22px] top-[-22px] p-[13px] bg-blue-100 rounded-[100px]">
                            <svg className={isActive2 ? "duration-200" : "duration-200 rotate-45"}
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill={isActive2 ? "#44699F" : "#181717"} d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
                            </svg>
                        </div>
                        <div className="text-slate-300 text-base font-bold font-['Syncopate']">02</div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {isActive2 ? <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
                                Software and Technology
                            </p>
                            : <p>Providing innovative solutions to enhance the gambling experience.</p>}
                    </div>
                </div>
                <div onClick={() => setIsActive3(!isActive3)}
                     className={isActive3 ? "border relative flex flex-col duration-200 justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-light_blue"
                         : "border duration-200 relative flex flex-col justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-blue-100 border-white"}>
                    <div className="flex relative">
                        <div
                            className="w-[50px] h-[50px] absolute right-[-22px] top-[-22px] p-[13px] bg-blue-100 rounded-[100px]">
                            <svg className={isActive3 ? "duration-200" : "duration-200 rotate-45"}
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill={isActive3 ? "#44699F" : "#181717"} d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
                            </svg>
                        </div>
                        <div className="text-slate-300 text-base font-bold font-['Syncopate']">03</div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {isActive3 ? <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
                                Customer Support
                            </p>
                            : <p>Offering reliable and responsive assistance to players and operators.</p>}
                    </div>
                </div>
                <div onClick={() => setIsActive4(!isActive4)}
                     className={isActive4 ? "border relative flex flex-col duration-200 justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-light_blue"
                         : "border duration-200 relative flex flex-col justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-blue-100 border-white"}>
                    <div className="flex relative">
                        <div
                            className="w-[50px] h-[50px] absolute right-[-22px] top-[-22px] p-[13px] bg-blue-100 rounded-[100px]">
                            <svg className={isActive4 ? "duration-200" : "duration-200 rotate-45"}
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill={isActive4 ? "#44699F" : "#181717"} d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
                            </svg>
                        </div>
                        <div className="text-slate-300 text-base font-bold font-['Syncopate']">04</div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {isActive4 ? <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
                                Game Variety
                            </p>
                            : <p>Offering a wide range of gambling games to cater to different preferences.</p>}
                    </div>
                </div>
                <div onClick={() => setIsActive5(!isActive5)}
                     className={isActive5 ? "border relative flex flex-col duration-200 justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-light_blue"
                         : "border duration-200 relative flex flex-col justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-blue-100 border-white"}>
                    <div className="flex relative">
                        <div
                            className="w-[50px] h-[50px] absolute right-[-22px] top-[-22px] p-[13px] bg-blue-100 rounded-[100px]">
                            <svg className={isActive5 ? "duration-200" : "duration-200 rotate-45"}
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill={isActive5 ? "#44699F" : "#181717"} d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
                            </svg>
                        </div>
                        <div className="text-slate-300 text-base font-bold font-['Syncopate']">05</div>
                    </div>
                    <div className="flex flex-col gap-8">
                        {isActive5 ? <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
                                Mobile Compatibility
                            </p>
                            : <p>Ensuring seamless access to gambling platforms across various devices.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotesSlider;

// import {useState} from "react";
//
// const NotesSlider = () => {
//     const [isActive1, setIsActive1] = useState<boolean>(true)
//     const [isActive2, setIsActive2] = useState<boolean>(true)
//     const [isActive3, setIsActive3] = useState<boolean>(true)
//     const [isActive4, setIsActive4] = useState<boolean>(true)
//     const [isActive5, setIsActive5] = useState<boolean>(true)
//     return (
//
//
//             <div
//                 className="sm:hidden w-full overflow-y-hidden self-stretch h-[320px] justify-start items-start inline-flex">
//                 <div className="flex overflow-y-hidden gap-4 px-4">
//                     <div onClick={() => setIsActive1(!isActive1)}
//                          className={isActive1 ? "border relative flex flex-col duration-200 justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-light_blue"
//                              : "border duration-200 relative flex flex-col justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-blue-100 border-white"}>
//                         <div className="flex relative">
//                             <div
//                                 className="w-[50px] h-[50px] absolute right-[-22px] top-[-22px] p-[13px] bg-blue-100 rounded-[100px]">
//                                 <svg className={isActive1 ? "duration-200" : "duration-200 rotate-45"}
//                                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
//                                      viewBox="0 0 24 24">
//                                     <path fill={isActive1 ? "#44699F" : "#181717"}
//                                           d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
//                                 </svg>
//                             </div>
//                             <div className="text-slate-300 text-base font-bold font-['Syncopate']">01</div>
//                         </div>
//                         <div className="flex flex-col gap-8">
//                             {isActive1 ?
//                                 <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
//                                     Secure payment processing for a safe and secure gaming environment
//                                 </p>
//                                 : <p>Mollis nisi eget eleifend platea amet,
//                                     mattis et odio. Sed integer ornare odio. Dictumst.
//                                     Lorem sed vulputate odio. Pulvinar sapie.</p>}
//                         </div>
//                     </div>
//                     <div onClick={() => setIsActive2(!isActive2)}
//                          className={isActive2 ? "border relative flex flex-col duration-200 justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-light_blue"
//                              : "border duration-200 relative flex flex-col justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-blue-100 border-white"}>
//                         <div className="flex relative">
//                             <div
//                                 className="w-[50px] h-[50px] absolute right-[-22px] top-[-22px] p-[13px] bg-blue-100 rounded-[100px]">
//                                 <svg className={isActive2 ? "duration-200" : "duration-200 rotate-45"}
//                                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
//                                      viewBox="0 0 24 24">
//                                     <path fill={isActive2 ? "#44699F" : "#181717"}
//                                           d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
//                                 </svg>
//                             </div>
//                             <div className="text-slate-300 text-base font-bold font-['Syncopate']">02</div>
//                         </div>
//                         <div className="flex flex-col gap-8">
//                             {isActive2 ?
//                                 <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
//                                     User-friendly interface for an enhanced gaming experience
//                                 </p>
//                                 : <p>Mollis nisi eget eleifend platea amet,
//                                     mattis et odio. Sed integer ornare odio. Dictumst.
//                                     Lorem sed vulputate odio. Pulvinar sapie.</p>}
//                         </div>
//                     </div>
//                     <div onClick={() => setIsActive3(!isActive3)}
//                          className={isActive3 ? "border relative flex flex-col duration-200 justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-light_blue"
//                              : "border duration-200 relative flex flex-col justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-blue-100 border-white"}>
//                         <div className="flex relative">
//                             <div
//                                 className="w-[50px] h-[50px] absolute right-[-22px] top-[-22px] p-[13px] bg-blue-100 rounded-[100px]">
//                                 <svg className={isActive3 ? "duration-200" : "duration-200 rotate-45"}
//                                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
//                                      viewBox="0 0 24 24">
//                                     <path fill={isActive3 ? "#44699F" : "#181717"}
//                                           d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
//                                 </svg>
//                             </div>
//                             <div className="text-slate-300 text-base font-bold font-['Syncopate']">03</div>
//                         </div>
//                         <div className="flex flex-col gap-8">
//                             {isActive3 ?
//                                 <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
//                                     High-quality graphics for an immersive gaming experience
//                                 </p>
//                                 : <p>Mollis nisi eget eleifend platea amet,
//                                     mattis et odio. Sed integer ornare odio. Dictumst.
//                                     Lorem sed vulputate odio. Pulvinar sapie.</p>}
//                         </div>
//                     </div>
//                     <div onClick={() => setIsActive4(!isActive4)}
//                          className={isActive4 ? "border relative flex flex-col duration-200 justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-light_blue"
//                              : "border duration-200 relative flex flex-col justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-blue-100 border-white"}>
//                         <div className="flex relative">
//                             <div
//                                 className="w-[50px] h-[50px] absolute right-[-22px] top-[-22px] p-[13px] bg-blue-100 rounded-[100px]">
//                                 <svg className={isActive4 ? "duration-200" : "duration-200 rotate-45"}
//                                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
//                                      viewBox="0 0 24 24">
//                                     <path fill={isActive4 ? "#44699F" : "#181717"}
//                                           d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
//                                 </svg>
//                             </div>
//                             <div className="text-slate-300 text-base font-bold font-['Syncopate']">04</div>
//                         </div>
//                         <div className="flex flex-col gap-8">
//                             {isActive4 ?
//                                 <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
//                                     Reliable gameplay for player trust and satisfaction
//                                 </p>
//                                 : <p>Mollis nisi eget eleifend platea amet,
//                                     mattis et odio. Sed integer ornare odio. Dictumst.
//                                     Lorem sed vulputate odio. Pulvinar sapie.</p>}
//                         </div>
//                     </div>
//                     <div onClick={() => setIsActive5(!isActive5)}
//                          className={isActive5 ? "border relative flex flex-col duration-200 justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-light_blue"
//                              : "border duration-200 relative flex flex-col justify-between p-8 rounded-[30px] h-[300px] w-[300px] bg-blue-100 border-white"}>
//                         <div className="flex relative">
//                             <div
//                                 className="w-[50px] h-[50px] absolute right-[-22px] top-[-22px] p-[13px] bg-blue-100 rounded-[100px]">
//                                 <svg className={isActive5 ? "duration-200" : "duration-200 rotate-45"}
//                                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
//                                      viewBox="0 0 24 24">
//                                     <path fill={isActive5 ? "#44699F" : "#181717"}
//                                           d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
//                                 </svg>
//                             </div>
//                             <div className="text-slate-300 text-base font-bold font-['Syncopate']">05</div>
//                         </div>
//                         <div className="flex flex-col gap-8">
//                             {isActive5 ?
//                                 <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
//                                     Real-time analytics for optimized gaming experiences
//                                 </p>
//                                 : <p>Mollis nisi eget eleifend platea amet,
//                                     mattis et odio. Sed integer ornare odio. Dictumst.
//                                     Lorem sed vulputate odio. Pulvinar sapie.</p>}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//     );
// };
//
// export default NotesSlider;