import {Link} from "react-scroll";
import ContactFormNoNumber from "../ContactForm/ContactFormNoNumber.tsx";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const ContactsPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [])
    useEffect(() => {
        AOS.init({
            disable: false,
            once: true,
        });
    }, []);
    return (
        <div className="overflow-y-hidden w-full sm:px-8 flex flex-col gap-[120px]">
            <div className="relative w-full px-4 sm:mt-[160px] mt-[120px] flex flex-col sm:flex-row gap-8">
                <div className="flex sm:w-1/2 flex-col gap-8">
                    <h2 className="animate-jump-in animate-once animate-duration-300 animate-delay-0 animate-ease-in
                    text-neutral-900 text-[32px] sm:text-[64px] font-bold font-['Syncopate']">CONTACTS</h2>
                    <h3 className="animate-fade animate-fill-backwards animate-once animate-duration-300 animate-delay-[300ms] animate-ease-in sm:pr-[162px]">Smart Choice B.V. is a modern gambling company</h3>
                </div>
            
                <div className="sm:w-1/2">
                    <div className="flex flex-col">
                        <div
                            className="sm:hover:pl-[30px] duration-300 animate-fade animate-fill-backwards animate-once animate-duration-300 animate-delay-[300ms] animate-ease-in
                            flex-col flex py-8 gap-8 sm:justify-between border-b-2 sm:flex-row border-slate-300">
                            <div className="fc gap-8">
                                <button className="faq_button">WRITE US</button>
                                <h4>Email address</h4>
                            </div>
                            <p className=" sm:self-end">info@smartchoice-bv.com</p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col animate-fade animate-fill-backwards animate-once animate-duration-300 animate-delay-[600ms] animate-ease-in">
                        <div
                            className="sm:hover:pl-[30px] sm:hover:gap-0 duration-500 flex-col flex py-8 gap-8 sm:justify-between border-b-2 sm:flex-row border-slate-300">
                            <div className="fc gap-8 sm:w-1/2">
                                <button className="faq_button">FIND US</button>
                                <h4>Address</h4>
                            </div>
                            <p className="sm:self-end sm:w-1/2 duration-500">Schottegatweg Oost 10 Unit 1-9, Bon Bini
                                Business Center,
                                Curacao</p>
                        </div>
                    </div>
                </div>

                <Link data-aos="zoom-in-up" data-aos-duration="500"
                      to={"contactForm"} offset={-190} smooth={true} duration={900}
                      className="sm:absolute sm:w-[400px]  bottom-0 cursor-pointer bg-white bg-opacity-20 rounded-[100px] border border-white flex flex-row p-4 sm:px-8 gap-4 w-full">
                    <p className="w-full self-center">Do you want to collaborate with us?</p>
                    <button className="w-[200px] flex flex-row gap-2 whitespace-nowrap">
                        <h3 className="self-center text-neutral-900 text-base font-bold font-['Roboto'] uppercase">let's
                            talk</h3>
                        <svg
                            className="w-[50px] h-[50px] rounded-[100px] p-[12px] bg-rose-600 hover:rotate-[0deg] rotate-[-45deg] duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="#fff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z"/>
                        </svg>
                    </button>
                </Link>
            </div>
            <ContactFormNoNumber/>
        </div>
    );
};

export default ContactsPage;