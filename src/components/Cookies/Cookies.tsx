import {FC, useEffect, useState} from "react";
import { useLocalStorage } from './../../utils/useLocalStorage.ts'
import {classNames} from "../../utils/classNames.ts";
import {Link} from "react-router-dom";
const Cookies: FC = () => {
    const [agreed, setAgreed] = useLocalStorage('agreedCookies', false)
    const [classes, setClasses] = useState("")
    useEffect(() => {
        setClasses(classNames({ ["hidden"]: agreed, ["animate-fade-up animate-once animate-duration-500 animate-delay-[3000ms] animate-ease-linear animate-fill-backwards z-[40] sm:px-8 sm:w-[900px] sm:h-28 sm:rounded-[40px] sm:bottom-[10px] sm:flex-row  \n" +
            "h-[175px] m-4 sm:m-0 p-4 sm:p-8 bg-white rounded-[40px] flex-col \n" +
            "justify-center items-center gap-4 flex fixed bottom-0"]: !agreed }))
    }, [agreed])
    return (
        <div
            className={classes}>
            <p className="text-center sm:text-start text-neutral-900 text-sm font-normal font-['Roboto'] leading-snug">
                We care about your data, and we’d love to use cookies
                to make your experience better. You can read more information
                about our <Link to={"/policies"} className="text-sky-950 text-sm font-normal font-['Roboto']">COOKIE POLICY</Link>.
            </p>
            <button onClick={() => setAgreed(true)} className="black_button sm:w-[390px]">ACCEPT COOKIES
            </button>
        </div>
    );
};

export default Cookies;

