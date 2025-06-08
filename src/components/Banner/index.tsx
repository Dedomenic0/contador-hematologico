const Banner = () => {
    return (
        <div className=" flex bg-[url(/banner-principal.png)] flex-col text-center justify-center items-center h-100 max-2xl:h-80">
            <h2 className="text-(length:--text-size-l) w-300 bg-(--bg-h2) rounded-4xl p-1">
                Faça a contagem de suas lâminas hematologicas de forma simples e rapida, direto do seu computador
            </h2>
            <a href="/completeCounter" className="text-(length:--text-size-l) m-10 bg-(image:--button-gradient) rounded-4xl p-2 pl-5 pr-5">Iniciar contagem agora</a>
        </div>
    );
}

export default Banner;