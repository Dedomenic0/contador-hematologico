import Buttom from "../Button";

const Options = () => {
    return (
        <div className="flex flex-col justify-center align-middle text-center">
            <h3 className="p-9 text-(length:--text-size-l) font-bold max-2xl:p-5">OPÇÕES</h3>
            <div className="flex flex-row place-content-around">
                <Buttom href="/simpleCounter" src="./botao-simples.png" alt="algumas celulas" children="Contador simples" />
                <Buttom href="/completeCounter" src="./botao-completo.png" alt="muitas celulas" children="Contador completo" />
                <Buttom href="/customCounter" src="./botao-editar.png" alt="algumas celulas com um lápis" children="Contador personalizado" />
            </div>
        </div>
    );
}

export default Options;