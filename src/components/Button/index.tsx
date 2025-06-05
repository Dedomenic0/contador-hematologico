interface ButtomProps {
    src: string;
    alt: string;
    children: string;
}

const Buttom = ({ src, alt, children } : ButtomProps) => {
    return ( 
        <a href="#" className="flex flex-col items-center" >
            <img src={src} alt={alt} />
            <p className="text-3xl">{children}</p>
        </a>
     );
}
 
export default Buttom;