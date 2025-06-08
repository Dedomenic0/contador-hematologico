import { FiChevronsLeft } from 'react-icons/fi';

interface HeaderProps {
    retur?: boolean
}

const Header = ({ retur=false }: HeaderProps) => {

    const style =  retur ? 'text-5xl mt-1' : 'text-5xl mt-1 hidden'

    return (
        <div className="p-10">
            <a className="flex" href="/">
            <FiChevronsLeft className={style}/>
                <h1 className="text-(length:--text-size-l)"><strong className="text-(--cor-ciano)">CONTADOR</strong> HEMATOLÓGICO</h1>
            </a>
        </div>
    );
}

export default Header;