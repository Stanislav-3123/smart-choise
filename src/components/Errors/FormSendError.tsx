
const FormSendError = () => {
    return (
        <div
            className="animate-jump-in animate-once animate-duration-500 animate-delay-0 animate-ease-linear
            absolute sm:relative bottom-0 z-10 sm:block w-[350px] sm:w-[400px] h-[85px] p-4 bg-rose-200 rounded-[20px] border border-rose-600 justify-between items-start inline-flex">
            <div
                className="justify-center grow shrink basis-0 text-rose-600 text-base font-normal font-['Roboto'] leading-relaxed">Your
                form has not been submitted. <br/> Please try again.
            </div>
        </div>
    );
};

export default FormSendError;