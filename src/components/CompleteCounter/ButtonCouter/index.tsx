interface ButtonConterProps {
    text: string
    func: React.MouseEventHandler<HTMLButtonElement>
    checked?: boolean
    type?: "button" | "select"
}

const ButtonConter = ({text, func, checked, type = "button"} : ButtonConterProps) => {
    let style = checked ? "bg-cyan-300 p-1 rounded-md border-b-2 cursor-pointer m-1" : "bg-none p-1 rounded-md border cursor-pointer m-1"
    if (type === "button") {
        style = "bg-(--cor-ciano-claro) p-1 rounded-md border cursor-pointer"
    }
    return ( 
        <button onClick={func} className={ style }>{text}</button>
     );
}
 
export default ButtonConter;