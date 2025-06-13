import { useEffect, useState } from "react";
import { cells, cellsSimple, mobileCells } from "../../types";

const useCounter = (type: "full" | "simple" | "mobile") => {

    let list = cells;

    if (type === "simple") {
        list = cellsSimple;
    }
    if (type === "mobile") {
        list = mobileCells;
    }
    
    const [cellList, setCellList] = useState(list)
    const [total, setTotal] = useState(0)
    const [cellTotalCouter, setCellTotalCouter] = useState(100)

    useEffect(() => {
        function onKeyPress(event: KeyboardEvent) {
            cellList.forEach((e) => {
                if (event.key === e.key.toLowerCase()) {
                    if (total === cellTotalCouter) {
                        alert("Contagem finalizada")
                        return;
                    };
                    setCellList(atual => atual.map(iten => {
                        if (iten.key === e.key) {
                            if (e.cell != "Eritroblastos") setTotal(atual => atual + 1)
                            return { ...iten, value: e.value + 1 }
                        }
                        return iten
                    }))
                }
                if (event.key === e.key) {

                    setCellList(atual => atual.map(iten => {
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
        window.addEventListener("keydown", onKeyPress);
        return () => window.removeEventListener("keydown", onKeyPress);

    }, [cellList])
    return { cellList, total, setCellList, setTotal, setCellTotalCouter }
}

export default useCounter;