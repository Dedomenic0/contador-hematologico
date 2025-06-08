interface ButtonConterProps {
    text: string
    func: React.MouseEventHandler<HTMLButtonElement>
    checked?: boolean
    type?: "button" | "destaque"
}

const ButtonConter = ({text, func, type = "button"} : ButtonConterProps) => {
    let style = "p-1 rounded-md bg-green-200 border-green-400 border-5 cursor-pointer"
    if (type === "button") {
        style = "bg-(--cor-ciano-claro) p-1 rounded-md border cursor-pointer"
    }
    return ( 
        <button onClick={func} className={ style }>{text}</button>
     );
}
 
export default ButtonConter;