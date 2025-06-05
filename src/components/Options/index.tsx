import Buttom from "../Button";

const Options = () => {
    return (
        <div className="flex flex-col justify-center align-middle text-center ml-20 mr-20">
            <h3 className="p-9 text-(length:--text-size-l) font-bold">OPÇÕES</h3>
            <div className="flex flex-row place-content-between">
                <Buttom src="./botao-simples.png" alt="algumas celulas" children="contador simples" />
                <Buttom src="./botao-completo.png" alt="muitas celulas" children="contador completo" />
                <Buttom src="./botao-editar.png" alt="algumas celulas com um lápis" children="contador personalizado" />
            </div>
        </div>
    );
}

export default Options;