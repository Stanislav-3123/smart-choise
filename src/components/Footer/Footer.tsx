import LetsTalkButton from "../Buttons/LetsTalkButton.tsx";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer
            className="flex flex-col gap-12 sm:gap-8 sm:p-8 px-4 py-8 items-center sm:items-stretch sm:mb-[160px] w-full rounded-t-[30px] sm:rounded-[30px] bg-white mt-[120px]">
            <div className="fc gap-12 sm:flex-row">
                <div className="w-full sm:pr-[152px] flex flex-col gap-8">
                    <p
                        className="p_gray">Address
                    </p>
                    <p className="sm:pr-[152px]">Schottegatweg Oost 10 Unit 1-9, Bon Bini Business Center, Curacao</p>
                    <div className="sm:self-start">
                        <LetsTalkButton/>
                    </div>
                </div>
                <nav className="w-full flex flex-row gap-8">
                    <div className="flex w-full flex-col gap-8">
                        <p className="p_gray">Navigation</p>
                        <div className="flex flex-col gap-2">
                            <Link className="footer_link" to={'/contacts'}>CONTACTS</Link>
                            <Link className="footer_link" to={'/policies'}>POLICIES</Link>
                        </div>
                    </div>
                    <div className="flex w-full flex-col gap-8">
                        <p className="p_gray">Policies</p>
                        <div className="flex flex-col gap-2">
                            <Link className="footer_link" to={'/policies'}>PRIVACY POLICY</Link>
                            <Link className="footer_link" to={'/policies'}>COOKIES</Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div
                className="text-center text-blue-100 sm:text-[110px] text-[32px] font-bold font-['Syncopate'] uppercase">smart
                choice
            </div>
            <div
                className="sm:justify-end flex text-slate-300 text-sm sm:text-base font-normal font-['Roboto'] sm:leading-relaxed leading-snug">Smart
                Choise © 2024 All
                rights reserved
            </div>
        </footer>
    );
};

export default Footer;
