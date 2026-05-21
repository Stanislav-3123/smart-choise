import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import {WriteToUsButton} from "../Buttons/WriteToUsButton.tsx";


const MobileHeader = () => {


    const [isOpen, setIsOpen] = useState(true);
    const handleClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
        setIsOpen(true);
    }
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    return (
        <>
            {
                isOpen ? <div className="mobile_header">
                        <div onClick={scrollToTop}
                             className="ml-4 w-[170.58px] h-[17px] bg-[url('/images/Smart-choice.svg')] bg-cover"/>
                        <div onClick={() => setIsOpen(false)}
                             className=" w-14 h-14 p-4 rounded-[20px] justify-center items-center flex">
                            <div
                                className="w-6 h-6 relative bg-[url('/images/systemIcons/menu.svg')] bg-center bg-cover"/>
                        </div>
                    </div>
                    :
                    <div className="fixed w-full h-full z-40 bg-black bg-opacity-40">
                        <div
                            className="absolute right-0 px-4 py-8 animate-open-mobile-menu z-40 w-4/5 self-end h-full bg-white rounded-tl-[40px] rounded-bl-[40px] flex-col justify-between items-start inline-flex">
                            <div className="h-full flex flex-col justify-between">
                                <div className="w-full flex flex-col gap-8">
                                    <div
                                        className="hover:bg-white duration-300 w-14 h-14 p-4 bg-blue-100 rounded-[40px] absolute top-[8px] right-[8px] justify-start items-start flex flex-col">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                             className="rotate-45"
                                             onClick={() => setIsOpen(true)}
                                             viewBox="0 0 24 24">
                                            <path fill="#000" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
                                        </svg>
                                    </div>
                                    <Link to={'/'} onClick={handleClick}
                                          className="bg-[url('/images/Smart-choice.svg')] w-[170.58px] h-[17px] bg-cover flex self-start"/>
                                    <div className="flex flex-col gap-4">
                                        <NavLink onClick={() => setIsOpen(true)}
                                                 to={"/contacts"} className="navbar_link">CONTACTS</NavLink>
                                        <NavLink onClick={() => setIsOpen(true)}
                                                 to={"/policies"} className="navbar_link">POLICIES</NavLink>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-col gap-4 py-8 border-t-[2px] border-b-[2px] border-slate-300">
                                        <p className="navbar_p">Dictum elit. Et. Molestie tempus vulputate ultricies.
                                            Dictum. Odio.</p>
                                        <p className="navbar_p">(555) 555-55-55</p>
                                        <p className="navbar_p">mail</p>
                                    </div>
                                    <WriteToUsButton setIsOpen={() => setIsOpen(true)}/>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default MobileHeader;

