import { useEffect, useState } from "react";
import { type CellsObject } from "../../types";

const useCounterCustom = () => {
        const custom = localStorage.getItem("custom");
        const list = custom ? JSON.parse(custom) : null;
    
    
    const [cellList, setCellList] = useState(list)
    const [total, setTotal] = useState(0)
    const [cellTotalCouter, setCellTotalCouter] = useState(100)

    useEffect(() => {
        setCellList(list)
    },[custom])

    useEffect(() => {
        function onKeyPress(event: KeyboardEvent) {
            cellList.forEach((e: CellsObject) => {
                if (event.key === e.key.toLowerCase()) {
                    if (total === cellTotalCouter) {
                        alert("Contagem finalizada")
                        return;
                    };
                    setCellList((atual: CellsObject[]) => atual.map(iten => {
                        if (iten.key === e.key) {
                            if (e.cell != "Eritroblastos") setTotal(atual => atual + 1)
                            return { ...iten, value: e.value + 1 }
                        }
                        return iten
                    }))
                }
                if (event.key === e.key) {

                    setCellList((atual : CellsObject[]) => atual.map(iten => {
                        if (iten.key === e.key) {
                            if (e.value === 0 || total === 0) return iten;
                            if (e.cell !== "Eritroblastos") setTotal(atual => atual - 1);
                            return { ...iten, value: e.value - 1 }
                        }
                        return iten;
                    }))
                }
            })
        }
        window.addEventListener("keypress", onKeyPress);
        return () => window.removeEventListener("keypress", onKeyPress);

    }, [cellList])
    return { cellList, total, setCellList, setTotal, setCellTotalCouter }
}

export default useCounterCustom;