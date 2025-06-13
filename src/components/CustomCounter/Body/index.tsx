import { cellsCustom, type CellsObject } from "../../../types";
import Inputs from "../Inputs";
import useCounterCustom from "../../hooks/useCounterCustom";
import Button from "../Button";

const Body = () => {
     const { cellList, total, setCellList, setTotal, setCellTotalCouter } = useCounterCustom();

     function zero() {
        setTotal(0)
        setCellList((atual: CellsObject[]) => atual.map((i) => { 
            return { ...i, value: i.value = 0 } 
        }))
    }

    function restore() {
        localStorage.setItem("custom", JSON.stringify(cellsCustom));
        zero();
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col bg-(image:--bg-custom-gradient) p-10 rounded-2xl shadow-xl shadow-gray-500 items-center">
                <h2 className="text-2xl underline">Contador personalizável</h2>
                <div className="flex gap-40 max-lg:gap-10">
                    <div className="grid grid-cols-2 p-4 gap-x-20">
                        {cellList.map((i: CellsObject) => (
                            <Inputs
                                id={(i.id ?? '').toString()}
                                cell={i.cell}
                                keyBoard={i.key}
                                value={i.value}
                                key={i.id}
                                onChange1={(e) => {
                                    cellsCustom.map(i => {
                                        if (i.id?.toString() === e.target.id) {
                                            i.key = e.target.value.toLocaleUpperCase()
                                            localStorage.setItem("custom", JSON.stringify(cellsCustom))
                                        }
                                    })
                                }}
                                onChange2={(e) => {
                                    cellsCustom.map(i => {
                                        if (i.id?.toString() === e.target.id) {
                                            i.cell = e.target.value.toLocaleUpperCase()
                                            localStorage.setItem("custom", JSON.stringify(cellsCustom))
                                        }
                                    })
                                }}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-20 justify-center items-center">
                        <Inputs cell="TOTAL" value={total} keyBoard="" total={true} />
                        <div className="flex flex-col items-center">
                            <label htmlFor="limit">Limite total de células</label>
                            <input
                                className="placeholder:text-black border p-1 w-17 h-10 text-center text-2xl rounded-sm bg-white"
                                type="text"
                                id="limit"
                                placeholder="100"
                                maxLength={3}
                                inputMode="numeric"
                                pattern="[0-9]*"
                                onChange={(event) => {
                                    if(event.target.value === "") {
                                        setCellTotalCouter(100)
                                    }
                                    if(Number(event.target.value)){
                                        setCellTotalCouter(Number(event.target.value))
                                    }
                                } }
                            />
                        </div>
                        <div className=" flex gap-20">
                            <Button text="Confirmar" func={zero} type="destaque"/>
                            <Button text="Zerar contador" func={zero} />
                            <Button text="Restaurar" func={restore} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
