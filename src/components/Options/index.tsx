import Buttom from "../Button";

const Options = () => {
    return (
        <div className="flex flex-col justify-center align-middle text-center max-sm:hidden">
            <h3 className="p-9 text-(length:--text-size-l) font-bold max-2xl:p-2 max-2xl:text-4xl">OPÇÕES</h3>
            <div className="flex flex-row place-content-around">
                <Buttom href="/simplecounter" src="./botao-simples.png" alt="algumas celulas" children="Contador simples" />
                <Buttom href="/completecounter" src="./botao-completo.png" alt="muitas celulas" children="Contador completo" />
                <Buttom href="/customcounter" src="./botao-editar.png" alt="algumas celulas com um lápis" children="Contador personalizado" />
            </div>
        </div>
    );
}

export default Options;