interface InputsProps {
    cell: string;
    value: string;
    keyBoard: string;
    total?: boolean;
}

const Inputs = ({cell, value, keyBoard, total=false} : InputsProps) => {
    const style = {
        couter: "text-center cursor-default border-2 border-(--cor-roxo) rounded-2xl w-20 text-2xl",
        total: "text-center cursor-default border-3 border-(--azul) rounded-md w-20 text-2xl"
    }

    return ( 
        <div className="flex flex-col items-center">
            <label htmlFor={cell}>{cell}</label>
            <input className={total ? style.total : style.couter} type="text" value={value}/>
            <p>{keyBoard}</p>
        </div>
     );
}
 
export default Inputs;