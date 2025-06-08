import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="flex flex-col ml-40 mt-15">
            <p className="flex gap-1">
                <FiChevronRight className="mt-0.5" />
                Clique no caractere ao lado esquerdo de cada bloco para editar a tecla correspondente.
            </p>
            <p className="flex gap-1">
                <FiChevronRight className="mt-0.5" />
                Clique no nome ao lado direto de cada bloco para editar seu nome.
            </p>
            <p className="flex gap-1">
                <FiChevronRight className="mt-0.5" />
                Ao finalizar a edição clique em <strong> confirmar </strong> para salvar todas as alterações.
            </p>
            <p className="flex gap-1">
                <FiChevronRight className="mt-0.5" />
                É possível alterar o número total de células ao digitar um valor no campo <strong> "Limite total de células"</strong>.
            </p>
            <p className="flex gap-1">
                <FiChevronRight className="mt-0.5" />
                <strong>Shifit </strong> + tecla correnspondete a célula desejada para <strong>decrementar</strong> ao total.
            </p>
        </div>
    );
}

export default Footer;