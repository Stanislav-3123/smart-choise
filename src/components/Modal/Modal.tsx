const Modal = ({onClose}: { onClose: () => void }) => {
    return (
        <div className="fixed w-full inset-0 flex flex-col items-center justify-center z-30 bg-black bg-opacity-40">
            <div className="animate-ping animate-once animate-duration-500 animate-delay-0 animate-ease-linear animate-reverse animate-fill-backwards
            absolute sm:static sm:w-[480px] w-full bottom-0 py-8 px-4 fc gap-8 bg-white sm:rounded-[30px] rounded-t-[30px]">
                <div className="relative w-full  fc gap-8">
                    <div className="fr justify-center relative">
                        <h3>THANK YOU</h3>
                        <div onClick={onClose}
                            className="sm:cursor-pointer w-[50px] h-[50px] absolute right-[-8px] bottom-3 p-[13px] bg-blue-100 rounded-[100px]">
                            <svg className={"duration-200 rotate-45"}
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill="#181717" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="self-center fc">
                        <p className="self-center text-zinc-700 text-base font-normal font-['Roboto'] leading-relaxed">Your
                            form has been successfully submitted!</p>
                        <span
                            className="self-center text-light_blue text-base font-normal font-['Roboto'] leading-relaxed">We will contact you shortly!</span>
                    </div>
                    <button onClick={onClose} className="black_button">OKAY</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;