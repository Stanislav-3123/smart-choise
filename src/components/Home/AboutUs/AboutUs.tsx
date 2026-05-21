import ImagesSlider from "../../Sliders/ImagesSlider.tsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            disable: false,
            once: true,
        });
    }, []);
    return (
        <div className="w-full flex flex-col sm:gap-16">
            <div className="w-full flex sm:flex-row flex-col">
                <div className="fc sm:justify-between sm:w-1/2">
                    <div className="p-4 sm:px-8 sm:gap-8 flex flex-row sm:flex-col justify-between">
                        <p data-aos="fade-right" data-aos-duration="500"
                            className="description_number self-start">(01)</p>
                        <h2 data-aos="fade-up" data-aos-duration="500"
                        >ABOUT US</h2>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-duration="500"
                        className="p-4 sm:px-8 sm:pr-[152px]">Smart Choice B.V. is a gambling company that offers innovative solutions and high-quality services to its clients.</p>
                </div>
                <h3 data-aos="zoom-in-up" data-aos-duration="500"
                    className="p-4 sm:px-8 sm:h-auto sm:w-1/2">Our team is constantly
                    <span className="blue_span">  learning and adapting to the ever-changing landscape </span>
                    of the gambling world, ensuring that we always
                    <span className="blue_span">  stay ahead of the curve.</span></h3>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="500"
                className="overflow-y-hidden sm:overflow-y-visible">
            <ImagesSlider/>
            </div>
        </div>
    );
};

export default AboutUs;