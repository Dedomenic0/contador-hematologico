import { useEffect, useState } from "react";
import { cells } from "../../types";

const useCounter = () => {

    const [cellList, setCellList] = useState(cells)
    const [total, setTotal] = useState(0)
    const [cellTotalCouter, setCellTotalCouter] = useState(100)

    useEffect(() => {
        function onKeyPress(event: KeyboardEvent) {
            console.log(event.key);

            cellList.forEach((e) => {
                if (event.key === e.key.toLowerCase()) {
                    if (total === cellTotalCouter) return;
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
        window.addEventListener("keypress", onKeyPress);
        return () => window.removeEventListener("keypress", onKeyPress);

    }, [cellList])
    return { cellList, total , setCellList, setTotal, setCellTotalCouter}
}

export default useCounter;