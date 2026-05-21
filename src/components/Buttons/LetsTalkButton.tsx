
import {Link} from "react-scroll";

const LetsTalkButton = () => {
    return (
        <Link to={"contactForm"} offset={-190} smooth={true} duration={900}
            className="w-full flex flex-row gap-2 justify-end whitespace-nowrap">
            <h3 className="self-center text-neutral-900 text-base font-bold font-['Roboto'] uppercase">let's
                talk</h3>
            <svg
                className="w-[50px] h-[50px] rounded-[100px] p-[12px] bg-rose-600 hover:rotate-[0deg] rotate-[-45deg] duration-300"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="#fff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z"/>
            </svg>
        </Link>
    );
};

export default LetsTalkButton;