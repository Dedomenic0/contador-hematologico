import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="flex flex-col ml-40 mt-15">
            <p className="flex">
                <FiChevronRight className="mt-0.5" />
                Clique na letra ao lado esquerdo de cada bloco para editar a tecla correspondente.
            </p>
            <p className="flex">
                <FiChevronRight className="mt-0.5" />
                Clique no nome ao lado direto de cada bloco para editar o nome correspondente.
            </p>
            <p className="flex">
                <FiChevronRight className="mt-0.5" />
                Ao finalizar a edição clique em confirmar para salvar todas as alterações.
            </p>
            <p className="flex">
                <FiChevronRight className="mt-0.5" />
                É possivel alterar o número total de células ao digitar um valor no campo "Limite total de células"
            </p>
            <p className="flex">
                <FiChevronRight className="mt-0.5" />
                Shifit mais a tecla correnspondete a célula desejada para decrementar ao total.
            </p>
        </div>
    );
}

export default Footer;