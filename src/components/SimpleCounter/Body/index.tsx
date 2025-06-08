import ButtonConter from "../../CompleteCounter/ButtonCouter";
import Inputs from "../../CompleteCounter/Inputs";
import useCounter from "../../hooks/useCounter";

const Body = () => {

const { cellList, total, setCellList, setTotal } = useCounter("simple");

function zero() {
        setTotal(0)
        setCellList(atual => atual.map((i) => { return { ...i, value: i.value = 0 } }))
        
    }

    return ( 
        <div>
            <div className="flex justify-center">
            <div className="bg-[url(./Rectangle.png)] w-300 text-center flex flex-col rounded-4xl">
                <div className="flex items-center text-center align-middle justify-center gap-40 max-lg:gap-10">
                    <div className="grid grid-cols-5 p-4">
                        {cellList.map((iten) => (
                            <Inputs key={iten.key} cell={iten.cell} keyBoard={iten.key} value={iten.value.toString()} />
                        ))}
                    </div>
                    <Inputs total={true} cell="Total" keyBoard="" value={(total).toString()} />
                </div>
                <div className="flex justify-center">
                    <ButtonConter func={zero} text="Zerar contador" />
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Body;
