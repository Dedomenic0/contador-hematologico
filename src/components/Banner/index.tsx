const Banner = () => {
    return (
        <div>
            <div className="flex bg-[url(/banner-principal.png)] bg-no-repeat flex-col text-center justify-center items-center bg-cover bg-center h-100 max-2xl:h-80 max-sm:hidden">
                <h2 className="text-(length:--text-size-l) w-300 bg-(--bg-h2) rounded-4xl p-1 max-2xl:w-250">
                    Faça a contagem de suas lâminas hematológicas de forma simples e rápida, direto do seu computador.
                </h2>
                <a href="/completecounter" className="text-(length:--text-size-l) m-10 bg-(image:--button-gradient) rounded-4xl p-2 px-5">Iniciar contagem agora</a>
            </div>
            <div className="hidden items-center flex-col justify-center bg-[url(/banner-mobile.png)] bg-center bg-no-repeat bg-cover h-[90svh] max-sm:flex">
                <h2 className="text-3xl bg-(--bg-h2) rounded-4xl p-1 text-center w-90">
                    Faça a contagem de suas lâminas hematológicas de forma simples e rápida, na palma de sua mão.
                </h2>
                <a href="/mobilecounter" className="text-(length:--text-size-l) text-center m-10 bg-(image:--button-gradient) rounded-4xl p-2 pl-5 pr-5">
                    Iniciar agora
                </a>
                <p className="bg-white text-center w-full absolute top-[93svh] ">Para uma versão completa acesse em um computador.</p>
            </div>
        </div>
    );
}

export default Banner;