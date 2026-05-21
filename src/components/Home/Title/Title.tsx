import SliderSVG from "../../Sliders/SliderSVG.tsx";
import {Link} from "react-scroll";

const Title = () => {

    return (
        <div
            className="overflow-y-hidden w-full mb:h-full h-[587pxpx] sm:hidden flex-col justify-start gap-8 items-start inline-flex">
            <h1 className="px-4 animate-jump-in animate-once animate-duration-300 animate-delay-0 animate-ease-in">SMART
                CHOICE B.V.</h1>
            <h3 className="px-4 animate-fade animate-fill-backwards animate-once animate-duration-300 animate-delay-[300ms] animate-ease-in">Smart
                Smart Choice B.V. is a  modern gambling company</h3>
            <p className="px-4 animate-fade animate-fill-backwards animate-once animate-duration-300 animate-delay-[600ms] animate-ease-in">Our
                company develops software for gambling companies.
                We create high-quality products that help our clients
                improve their business and attract more players.</p>
            <div
                className="mx-auto animate-mobile_cube_zoom animate-fill-backwards animate-delay-[900ms] w-[280px] h-[280px]">
                <div
                    className="mx-auto bg-cover bg-[url('/images/image/mainCub.png')] animate-rotate_full w-[280px] h-[280px]"/>
            </div>
            <div className="px-4">
                <Link to={"contactForm"} offset={-190} smooth={true} duration={900}
                      className="animate-flip-up animate-once animate-duration-[900ms] animate-delay-[900ms] animate-ease-in animate-fill-backwards
                    cursor-pointer bg-white bg-opacity-20 rounded-[100px] border border-white flex flex-row p-4 gap-4 w-full">
                    <p className="w-full self-center">Do you want to collaborate with us?</p>
                    <button className="w-[200px] flex flex-row gap-2 whitespace-nowrap">
                        <h3 className="self-center text-neutral-900 text-base font-bold font-['Roboto'] uppercase">let's
                            talk</h3>
                        <svg
                            className="w-[50px] h-[50px] rounded-[100px] p-[12px] bg-rose-600 hover:rotate-[-45deg] duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="#fff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z"/>
                        </svg>
                    </button>
                </Link>
            </div>
            <SliderSVG/>
        </div>
    );
};

export default Title;