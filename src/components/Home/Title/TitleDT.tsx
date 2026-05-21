import {Link} from "react-scroll";
import SliderTitle from "../../Sliders/SliderTitle.tsx";

const TitleDt = () => {

    return (
        <div className="w-[1440px] hidden sm:block">
            <div className="relative fr justify-between px-8 w-full h-[600px]">
                <div className="fc w-[550px] h-full justify-between self-end">
                    <div className="fc pt-[100px] gap-8">
                        <h1 className="animate-flip-down animate-once animate-duration-300 animate-delay-0 animate-ease-in animate-fill-backwards
                        text-neutral-900 text-8xl font-bold font-['Syncopate'] uppercase z-20">SMART</h1>
                        <h2 className="animate-fade-right animate-once animate-duration-500 animate-delay-[600ms] animate-ease-in animate-fill-backwards
                        text-sky-950 text-[32px] font-medium font-['Roboto'] leading-[51.20px] z-20">Smart Choice B.V.
                            is a <br/> modern gambling company</h2>
                    </div>
                    <Link to={"contactForm"} offset={-190} smooth={true} duration={900}
                          className="animate-fade-up animate-once animate-duration-500 animate-delay-[600ms] animate-ease-in animate-fill-backwards
                          w-[400px] cursor-pointer bg-white bg-opacity-20 rounded-[100px] border border-white flex flex-row py-4 px-8 gap-4 ">
                        <p className="w-full self-center text-zinc-700 text-base font-normal font-['Roboto'] leading-relaxed">Do
                            you want to collaborate with us?</p>
                        <button className="w-[200px] flex flex-row gap-2 whitespace-nowrap">
                            <h3 className="self-center text-neutral-900 text-lg font-bold font-['Roboto'] uppercase">let's
                                talk</h3>
                            <svg
                                className="w-[50px] h-[50px] rounded-[100px] p-[12px] bg-rose-600 hover:rotate-0 rotate-[-45deg] duration-300"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path fill="#fff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z"/>
                            </svg>
                        </button>
                    </Link>
                </div>

                <div className="relative animate-mobile_cube_zoom animate-delay-[600ms] animate-fill-backwards">
                    <div
                        className="w-full h-full">
                        <div
                            className="absolute top-[55px] right-[-209px] animate-rotate_full bg-cover bg-[url('/images/image/mainCub.png')] w-[434px] h-[434px] z-30"/>
                    </div>
                </div>

                <div className="fc justify-between ">
                    <div
                        className="relative animate-fade-down animate-once animate-duration-500 animate-delay-[600ms] animate-ease-in animate-fill-backwards">
                        <SliderTitle/>
                    </div>
                    <div className="fc w-[550px] justify-end gap-8">
                        <h1 className="whitespace-nowrap
                        text-neutral-900 text-8xl font-bold font-['Syncopate'] uppercase">CHOICE<span
                            className="text-neutral-900 text-5xl font-bold font-['Syncopate'] self-end  uppercase"> b.v.</span>
                        </h1>
                        <p className="animate-fade-left animate-once animate-duration-500 animate-delay-[600ms] animate-ease-in animate-fill-backwards
                        pr-[100px] text-zinc-700 text-base font-normal font-['Roboto'] leading-relaxed">Our company is a
                            growning iGaming company with expertise in the gambling market. We have experience in B2C
                            niches, which gives us an advantage in this field</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleDt;