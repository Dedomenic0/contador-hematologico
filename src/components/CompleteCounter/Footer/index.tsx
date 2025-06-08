const Footer = () => {
    return ( 
        <div className="flex flex-col">
            <p className="p-15 pb-1">Precione a tecla correspondente a cada celula para <strong>acresentar</strong> ao seu total.</p>
            <p className="p-15 pt-1">Precione <strong>Shift</strong> mais a tecla correspondente a celula para <strong>decrementar</strong> ao seu total.</p>
            <img className="w-100 ml-40"src="./keyBoard.png" alt="teclado" />
        </div>
     );
}
 
export default Footer;