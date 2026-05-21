import Flickity from "react-flickity-component";

const flickityOptions = {
    initialIndex: 0
}
export default function SliderTitle() {
    return (
        <Flickity
        className='slider'
        elementType='div'
        options={flickityOptions}
        static
        >
            <div
                className="mr-2 px-4 w-[200px] py-[25px] flex-col rounded-[40px] bg-white justify-start items-start gap-[26px] inline-flex">
                <div
                    className="w-[120px] h-[120px] mx-auto bg-[url('/images/iconsForCard/lines.svg')] bg-cover"/>
                <p className="text-sky-950 text-base font-semibold font-['Roboto'] leading-relaxed">Boost your gambling business
                </p>
            </div>
            <div
                className="mr-2 px-4 w-[200px] py-[25px] flex-col rounded-[40px] bg-white justify-start items-start gap-[26px] inline-flex">
                <div
                    className="w-[120px] h-[120px] mx-auto bg-[url('/images/iconsForCard/circles.svg')] bg-cover"/>
                <p className="text-sky-950 text-base font-semibold font-['Roboto'] leading-relaxed">High-quality products for your business
                </p>
            </div>
            <div
                className="px-4 w-[200px] py-[25px] flex-col rounded-[40px] bg-white justify-start items-start gap-[26px] inline-flex">
                <div className="w-[120px] h-[120px] mx-auto bg-[url('/images/iconsForCard/cub.svg')] bg-cover"/>
                <p className="text-sky-950 text-base font-semibold font-['Roboto'] leading-relaxed">Experienced team and confidentiality
                </p>
            </div>
        </Flickity>
    );
}



