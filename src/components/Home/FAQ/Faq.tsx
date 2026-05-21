import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const Faq = () => {

    useEffect(() => {
        AOS.init({
            disable: false,
            once: true,
        });
    }, []);

    return (
        <div className="flex flex-col p-4 sm:p-8 gap-12 ">
            <div className="fc gap-12 sm:flex-row sm:gap-8">
                <div className="sm:w-1/2 flex flex-row justify-between sm:flex-col sm:gap-8">
                    <p data-aos="fade-right" data-aos-duration="500"
                       className="description_number sm:self-start">(03)</p>
                    <h2 data-aos="fade-up" data-aos-duration="500"
                    >FAQ</h2>
                </div>
                <h3 data-aos="flip-up" data-aos-duration="500"
                    className="sm:w-1/2">We have collected the most
                    <span className="blue_span"> frequently asked questions </span>
                    for you. </h3>
            </div>
            <div
                className="py-8 sm:hover:pl-8 sm:hover:gap-0 duration-500 flex flex-col sm:flex-row gap-8 border-b border-slate-300">
                <div className="fc sm:w-1/2 gap-8">
                    <button className="faq_button">differences</button>
                    <h4 className="sm:pr-[152px]">What is the difference between online and offline gambling?</h4>
                </div>
                <p className="sm:w-1/2 sm:self-end">Online gambling takes place on the internet, while offline
                    gambling occurs in physical locations such as casinos or betting shops.</p>
            </div>
            <div
                className="py-8 sm:hover:pl-8 sm:hover:gap-0 duration-300 flex flex-col sm:flex-row gap-8 border-b border-slate-300">
                <div className="fc sm:w-1/2 gap-8">
                    <button className="faq_button">benefits</button>
                    <h4 className="sm:pr-[152px]">What are the benefits of using gambling software solutions?</h4>
                </div>
                <p className="sm:w-1/2 sm:self-end">Gambling software solutions provide a secure, convenient and
                    user-friendly
                    platform for players to enjoy their favorite games.
                    They also offer advanced features and analytics to help operators manage their business more
                    effectively.</p>
            </div>
            <div
                className="py-8 sm:hover:pl-8 sm:hover:gap-0 duration-300 flex flex-col sm:flex-row gap-8 border-b border-slate-300">
                <div className="fc sm:w-1/2 gap-8">
                    <button className="faq_button">safety</button>
                    <h4 className="sm:pr-[152px]">How can I ensure that my gambling experience is safe and secure?</h4>
                </div>
                <p className="sm:w-1/2 sm:self-end">To ensure a safe and secure gambling experience, always play at
                    reputable and
                    licensed gambling sites. Look for trusted payment methods, strong security measures and customer
                    support options.</p>
            </div>
            <div
                className="py-8 sm:hover:pl-8 sm:hover:gap-0 duration-300 flex flex-col sm:flex-row gap-8 border-b border-slate-300">
                <div className="fc sm:w-1/2 gap-8">
                    <button className="faq_button">types</button>
                    <h4 className="sm:pr-[152px]">What are the different types of gambling games available?</h4>
                </div>
                <p className="sm:w-1/2 sm:self-end">There are various types of gambling games available, including
                    slots,
                    table games (such as roulette, blackjack, poker), sports betting, lotteries and bingo.</p>
            </div>
            <div
                className="py-8 sm:hover:pl-8 sm:hover:gap-0 duration-300 flex flex-col sm:flex-row gap-8 border-b border-slate-300">
                <div className="fc sm:w-1/2 gap-8">
                    <button className="faq_button">chances</button>
                    <h4 className="sm:pr-[152px]">How can I improve my chances of winning in gambling?</h4>
                </div>
                <p className="sm:w-1/2 sm:self-end">There is no guaranteed way to win in gambling, as it is a game of
                    chance. However,
                    you can improve your chances by understanding the rules of the game, setting a budget, and using
                    strategies appropriate
                    for the specific game you are playing.20:25</p>
            </div>

        </div>
    );
};

export default Faq;