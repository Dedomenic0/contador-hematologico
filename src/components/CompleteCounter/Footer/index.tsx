interface FooterProps {
    simple?: boolean
}

const Footer = ({ simple = false } : FooterProps) => {

    const src = simple ? "./Rectangle21.png" : "./keyBoard.png"

    return ( 
        <div className="flex flex-col">
            <p className="p-15 pb-1">Pressione a tecla correspondente a cada célula para <strong>acrecentar</strong> ao seu total.</p>
            <p className="p-15 pt-1">Pressione <strong>Shift</strong> mais a tecla correspondente a célula para <strong>decrementar</strong> ao seu total.</p>
            <img className="w-100 ml-40" src={src} alt="teclado" />
        </div>
     );
}
 
export default Footer;