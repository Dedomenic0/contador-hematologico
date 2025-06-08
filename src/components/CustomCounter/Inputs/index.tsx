interface InputsProps {
    id?:string;
    cell: string;
    value: number;
    keyBoard: string;
    total?: boolean;
    onChange1?: React.ChangeEventHandler<HTMLInputElement>;
    onChange2?: React.ChangeEventHandler<HTMLInputElement>;
}

const Inputs = ({cell, value, keyBoard, total=false, onChange1, onChange2, id} : InputsProps) => {
    const style = {
        couter: "text-center cursor-default border-2 border-(--cor-roxo) rounded-2xl w-20 text-2xl bg-white",
        total: "text-center cursor-default border-3 border-(--azul) rounded-md w-20 text-2xl bg-(--cor-ciano-claro)",
    }

    return ( 
        <div className={total ? "flex flex-col items-center p-2" : "flex flex-row items-center p-2" }>
            <input id={id} className="w-6 text-center placeholder:text-black" type="text"  readOnly={false} placeholder={keyBoard} onChange={onChange1} maxLength={1}/>
            <input id={id} className={total ? style.total : style.couter} type="text" value={value} readOnly/>
            <input id={id} className="w-25 text-center placeholder:text-black" type="text" placeholder={cell} onChange={onChange2}/>
        </div>
     );
}
 
export default Inputs;