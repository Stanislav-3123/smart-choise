import {Link} from "react-scroll";
import {useEffect, useState} from "react";

export const FloatingButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    const handleClick = () => {
        setTimeout(() => {
            setIsVisible(false);
        }, 1000);
        setTimeout(() => {
            setIsVisible(true);
        }, 10000);
    };

    return (
        <Link onClick={handleClick} to={'contactForm'} offset={-180} smooth={true} duration={900}
              className={isVisible ? "floating_button animate-fade-up animate-once animate-duration-500 animate-delay-0 animate-ease-in animate-fill-backwards" : "floating_button hidden"}>
            WRITE TO US
        </Link>
    )
};