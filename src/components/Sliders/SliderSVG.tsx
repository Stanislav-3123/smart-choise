import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
const SliderSVG = () => {
    useEffect(() => {
        AOS.init({
            disable: false,
            once: true,
        });
    }, []);
    return (
        <div
            className="overflow-y-hidden self-stretch h-full justify-start items-start inline-flex">
            <div className="flex gap-2 px-4">
                <div data-aos="flip-up" data-aos-offset="140" data-aos-duration="1000" data-aos-delay="0"
                    className="px-4 w-[200px] py-[25px] flex-col rounded-[40px] bg-white justify-start items-start gap-[26px] inline-flex">
                    <div
                        className="w-[120px] h-[120px] mx-auto bg-[url('/images/iconsForCard/lines.svg')] bg-cover"/>
                    <p className="text-sky-950 text-base font-semibold font-['Roboto'] leading-relaxed">Innovative
                        software solutions
                    </p>
                </div>
                <div data-aos="flip-up" data-aos-offset="140" data-aos-duration="1000" data-aos-delay="500"
                    className="px-4 w-[200px] py-[25px] flex-col rounded-[40px] bg-white justify-start items-start gap-[26px] inline-flex">
                    <div
                        className="w-[120px] h-[120px] mx-auto bg-[url('/images/iconsForCard/circles.svg')] bg-cover"/>
                    <p className="text-sky-950 text-base font-semibold font-['Roboto'] leading-relaxed">High-quality
                        products for your business
                    </p>
                </div>
                <div data-aos="flip-up" data-aos-offset="140" data-aos-duration="1000" data-aos-delay="1000"
                    className="px-4 w-[200px] py-[25px] flex-col rounded-[40px] bg-white justify-start items-start gap-[26px] inline-flex">
                    <div className="w-[120px] h-[120px] mx-auto bg-[url('/images/iconsForCard/cub.svg')] bg-cover"/>
                    <p className="text-sky-950 text-base font-semibold font-['Roboto'] leading-relaxed">Experienced
                        team and full confidentiality
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SliderSVG;