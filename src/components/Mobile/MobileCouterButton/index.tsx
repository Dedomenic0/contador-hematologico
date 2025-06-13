
interface MobileCouterButtonProps {
    decrement?: boolean;
    keyBoard: string;
    imgSrc: string;
    imgAlt: string;
    cellCount: number;
    cellName: string;
}

const MobileCouterButton = ({ decrement = false, keyBoard, imgSrc, imgAlt, cellCount, cellName }: MobileCouterButtonProps) => {

    const keydownEvent = () => new KeyboardEvent("keydown", {
        key: decrement ? keyBoard : keyBoard.toLowerCase(),
        bubbles: true,
    })
    return (
        <div className="pb-10">
            <button
                onClick={() => {
                    window.dispatchEvent(keydownEvent());
                }}
            >
                <img className="border rounded-[50%]" src={imgSrc} alt={imgAlt} />
                <p className="relative bottom-22 left-19 text-2xl text-red-700 bg-amber-50 w-10 rounded-4xl" >{cellCount}</p>
            </button>
            <p className="-mt-7">{cellName}</p>
        </div>
    );
}

export default MobileCouterButton;