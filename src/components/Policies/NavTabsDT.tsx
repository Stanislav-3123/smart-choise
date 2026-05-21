import {Link} from "react-scroll";
import {useEffect, useState} from "react";

const NavTabsMobile = () => {
    const [isActiveFirst, setIsActiveFirst] = useState<boolean>(true)
    const [isActiveSecond, setIsActiveSecond] = useState<boolean>(false)
    const [isActiveThird, setIsActiveThird] = useState<boolean>(false)
    const [isActiveFourth, setIsActiveFourth] = useState<boolean>(false)
    const [isVisibleNavTabs, setIsVisibleNavTabs] = useState<boolean>(true)
    const handleLinkFirst = () => {
        if (window.scrollY >= 0 && window.scrollY < 600) {
            setIsVisibleNavTabs(true)
            setIsActiveFirst(true);
            setIsActiveSecond(false)
            setIsActiveThird(false)
            setIsActiveFourth(false)
        } else if (window.scrollY >= 600 && window.scrollY < 1200) {
            setIsVisibleNavTabs(true)
            setIsActiveFirst(false);
            setIsActiveSecond(true)
            setIsActiveThird(false)
            setIsActiveFourth(false)
        } else if (window.scrollY >= 1200 && window.scrollY < 1500) {
            setIsVisibleNavTabs(true)
            setIsActiveFirst(false);
            setIsActiveSecond(false)
            setIsActiveThird(true)
            setIsActiveFourth(false)
        } else if (window.scrollY >= 1500 && window.scrollY < 1900) {
            setIsVisibleNavTabs(true)
            setIsActiveFirst(false);
            setIsActiveSecond(false)
            setIsActiveThird(false)
            setIsActiveFourth(true)

        } else if (window.scrollY > 2100) {
            setIsVisibleNavTabs(false);
        }

    }
    useEffect(() => {
        window.addEventListener("scroll", handleLinkFirst);
        return () => {
            window.removeEventListener("scroll", handleLinkFirst);
        };
    }, []);

    return (
        <>{isVisibleNavTabs ?
            <div
                className="w-[530px] h-auto self-start p-8 shadow-lg  sticky top-[105px] z-20 whitespace-nowrap flex-wrap bg-blue-100 rounded-[20px] justify-start items-start gap-4 hidden sm:inline-flex">
                <Link to={'first'} offset={-180} smooth={true}
                      className={isActiveFirst ? "active-police-button" : "police_button"}>
                    <div
                        className="">Privacy
                        Policies
                    </div>
                </Link>
                <Link to={'second'} offset={-160} smooth={true}
                      className={isActiveSecond ? "active-police-button" : "police_button"}>
                    <div
                        className="">Privacy
                        Disclosure of risks
                    </div>
                </Link>
                <Link to={'third'} offset={-160} smooth={true}
                      className={isActiveThird ? "active-police-button" : "police_button"}>
                    <div
                        className="">Privacy
                        Commissions and fees
                    </div>
                </Link>
                <Link to={'fourth'} offset={-160} smooth={true}
                      className={isActiveFourth ? "active-police-button" : "police_button"}>
                    <div
                        className="">Privacy
                        Terms of use
                    </div>
                </Link>
            </div>
            : null}
        </>

    );
};

export default NavTabsMobile;