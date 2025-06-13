import MobileCouterButton from "../MobileCouterButton";
import useCounter from "../../hooks/useCounter";
import SwitchButton from "../SwitchButton";
import { useState } from "react";

const MobileCouter = () => {

    const { cellList, total, setCellList, setTotal } = useCounter("mobile");

    function zero() {
        setTotal(0)
        setCellList(atual => atual.map((i) => { return { ...i, value: i.value = 0 } }))
    }

    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className="bg-[url(/mobile/bg.png)] h-[80svh]">
            <div className="flex justify-around py-5 bg-[#ffffffb4] my-5 rounded-4xl">
                <SwitchButton onChecked={setIsChecked} />
                <div className="text-center">
                    <p className="mr-2">Zerar</p>
                    <button onClick={zero}>
                        <img src="/mobile/reset-button.png" alt="botão de reset" />
                    </button>
                </div>
                <div className="text-center w-15">
                    <p>Total</p>
                    <span className="text-4xl">{total}</span>
                </div>
            </div>
            <div className="grid grid-cols-3 items-center text-center ">
                {cellList.map((cell) => (
                    <MobileCouterButton
                        cellCount={cell.value}
                        cellName={cell.cell}
                        imgSrc={cell.img ?? ""}
                        imgAlt={`celula hematologica ${cell.cell}`}
                        keyBoard={cell.key}
                        key={cell.cell}
                        decrement={isChecked}
                    />
                ))}
            </div>
        </div>
    );
}

export default MobileCouter;