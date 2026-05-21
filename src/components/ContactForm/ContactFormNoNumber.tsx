import {Link} from "react-router-dom";
import Modal from "../Modal/Modal.tsx";
import React, {useState, useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FormSendError from "../Errors/FormSendError.tsx";

const ContactForm = () => {
    useEffect(() => {
        AOS.init({
            disable: false,
            once: true,
        });
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const openThanksModal = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [checked, setChecked] = useState<boolean>(false);
    const [errorName, setErrorName] = useState<boolean>(false);
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<boolean>(false);
    const [checkboxError, setCheckboxError] = useState<boolean>(true);
    const [isFailedSent, setIsFailedSent] = useState<boolean>(false);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    async function sendEmail(e: { preventDefault: () => void }) {
        e.preventDefault();
        if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "" && checked) {
            try {
                const res = await fetch("http://localhost:8006/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": 'application/json'
                    }, body: JSON.stringify({
                        name, email, message
                    })
                });
                if (res.status === 201) {
                    openThanksModal();
                } else {
                    console.log(res.status)
                }
            } catch (error) {
                console.log(error);
                setIsFailedSent(true);
                setTimeout(() => {
                    setIsFailedSent(false);
                }, 5000);
            }
            setName('');
            setEmail('');
            setMessage('');
            setChecked(false);
            setErrorName(false);
            setErrorEmail(false);
            setErrorMessage(false);
            setCheckboxError(true);
        } else {
            setErrorName(true);
            setErrorEmail(true);
            setErrorMessage(true);
        }
        if (!checked) {
            setCheckboxError(false);
        }
    }

    return (
        <div
            className="py-8 px-4 sm:px-8 sm:inline-flex flex flex-col sm:flex-row w-full bg-white rounded-[30px] gap-12 sm:gap-8">
            <div className="fc gap-12 sm:w-1/2 sm:justify-between">
                    <h2 data-aos="fade-up" data-aos-duration="500"
                    >CONTACT FORM</h2>
                {isFailedSent ? <FormSendError/> : null}
                <h3 data-aos="flip-up" data-aos-duration="500"
                    className="sm:pr-[152px]"><span className="blue_span">Fill out this form</span> and we will contact
                    you shortly.</h3>
            </div>
            <form id={"contactForm"} data-aos="zoom-in" data-aos-duration="500"
                  className="w-full sm:w-1/2 p-4 bg-blue-100 rounded-[20px] flex-col justify-start items-start gap-4 inline-flex">
                <input type="text" name="name" value={name} onChange={handleNameChange} placeholder="NAME"
                       className={errorName ? "input_error" : "input"}/>
                <input type="text" name="email" value={email} onChange={handleEmailChange}
                       placeholder="EMAIL OR PHONE NUMBER" className={errorEmail ? "input_error" : "input"}/>
                <textarea placeholder="MESSAGE" name="message" onChange={handleMessageChange} value={message}
                          className={errorMessage ? "textarea_error" : "textarea"}></textarea>
                <div className="sm:w-full w-full fc gap-4 sm:flex-row sm:justify-between">
                    <div className="flex gap-2 content-center">
                        <input type="checkbox" name="checkbox" onChange={() => {
                            setChecked(!checked)
                            setCheckboxError(true)
                        }} checked={checked} className="self-center accent-blue-100"/>
                        <p className={checkboxError ? "self-center " : "self-center red_underline"}>
                            I have read and accept the
                            <Link className={checkboxError ? "pp_link " : "pp_link red_underline"}
                                  to={"/policies"}> Privacy Policy</Link>
                            {/*{checkboxError ? null*/}
                            {/* : <span className="required_title">title is required</span >}*/}
                        </p>
                    </div>
                    <div onClick={sendEmail} className="flex flex-row gap-2 self-end">
                        <h3 className="self-center text-neutral-900 sm:text-lg text-base font-bold font-['Roboto'] uppercase">SEND</h3>
                        <svg
                            className="w-[50px] h-[50px] rounded-[100px] p-[12px] bg-rose-600 rotate-[-45deg] hover:rotate-[0deg] duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="#fff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z"/>
                        </svg>
                    </div>
                </div>
            </form>
            {isOpen ? <Modal onClose={handleClose}/> : null}
        </div>
    );
};

export default ContactForm;

