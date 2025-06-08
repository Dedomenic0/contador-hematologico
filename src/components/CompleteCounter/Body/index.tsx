import ButtonConter from "../ButtonCouter";
import Inputs from "../Inputs";
import useCounter from "../../hooks/useCounter";
import { useState } from "react";

const buttonChecked = [
    {
        id: 1,
        check: false,
        total: 100
    },
    {
        id: 2,
        check: false,
        total: 200
    },
    {
        id: 3,
        check: false,
        total: 300
    }
]

const Body = () => {

    const { cellList, total, setCellList, setTotal, setCellTotalCouter } = useCounter();

    const [button, setButton] = useState(buttonChecked)

    function totalCouter(id: number) {
        setButton(atual => atual.map((i) => {
            if(i.id === id) {
                return {...i, check: i.check = true}
            }
            if(i.check && i.id !== id) {
                return {...i, check: i.check = false}
            }
            return i
        }))
    }

    function zero() {
        setTotal(0)
        setCellList(atual => atual.map((i) => { return { ...i, value: i.value = 0 } }))
        
    }

    return (
        <div className="flex justify-center">
            <div className="bg-[url(./Rectangle.png)] w-300 text-center flex flex-col rounded-4xl">
                <div className="flex items-center text-center align-middle justify-center gap-40 max-lg:gap-10">
                    <div className="grid grid-cols-5 p-4">
                        {cellList.map((iten) => (
                            <Inputs key={iten.key} cell={iten.cell} keyBoard={iten.key} value={iten.value.toString()} />
                        ))}
                    </div>
                    <Inputs total={true} cell="Total" keyBoard="" value={(total).toString()} />
                    <div className="flex flex-col">
                        {button.map((i) => (<ButtonConter
                            func={() => {
                                setCellTotalCouter(i.total)
                                totalCouter(i.id)
                            }}
                            text={"total: " + i.total.toString()}
                            checked={i.check}
                            type="select"
                        />))}
                    </div>
                </div>
                <div className="flex justify-center">
                    <ButtonConter func={zero} text="Zerar contador" />
                </div>
            </div>
        </div>
    );
}

export default Body; 