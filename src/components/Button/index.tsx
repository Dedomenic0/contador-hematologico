interface ButtonProps {
    src: string;
    alt: string;
    children: string;
    href?: string;
}

const Buttom = ({ src, alt, children, href} : ButtonProps) => {
    return ( 
        <a href={href} className="flex flex-col items-center w-100" >
            <img src={src} alt={alt} />
            <p className="text-3xl">{children}</p>
        </a>
     );
}
 
export default Buttom;