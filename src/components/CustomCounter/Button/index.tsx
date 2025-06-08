interface ButtonConterProps {
    text: string
    func: React.MouseEventHandler<HTMLButtonElement>
    checked?: boolean
    type?: "button" | "destaque"
}

const ButtonConter = ({text, func, type = "button"} : ButtonConterProps) => {
    let style = "p-2 rounded-md bg-green-200 border-green-400 border-5 cursor-pointer shadow-md shadow-gray-800 items-center hover:bg-green-300 hover:border-green-500"
    if (type === "button") {
        style = "bg-white p-2 rounded-md border border-blue-400 border-3 cursor-pointer shadow-md shadow-gray-800 items-center hover:bg-gray-200 hover:border-blue-500"
    }
    return ( 
        <button onClick={func} className={ style }>{text}</button>
     );
}
 
export default ButtonConter;