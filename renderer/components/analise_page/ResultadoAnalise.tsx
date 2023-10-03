
export default function ResultadoAnalise(props){
    const infos = props.infos

    const handlerFecharComponent = () =>{
        props.fecharResultados()
    }
    return(
        <>
            <div className="fixed w-full h-full z-10 bg-slate-800 overflow-y-scroll">
                <div className="flex w-3/4 mx-auto my-5">
                    <div className="text-white flex justify-between w-full">
                        <button onClick={handlerFecharComponent} className="flex self-end hover:underline text-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-5 h-5 mb-1.5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>

                            Voltar
                        </button>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <div className=" bg-slate-50 w-3/4 h-auto mx-auto rounded-lg">
                    <div className="flex text-center text-2xl p-12 flex-col justify-center">
                        <h1 className="text-3xl mb-4"><b>Resultados da Análise:</b></h1>
                        <span>ID: {infos.ID}</span>
                        <span>Coliform: {infos.coliform}</span>
                        <span>E-Coli: {infos.eColi}</span>

                    </div>

                    <div className="flex justify-center pb-3 w-full h-auto">
                        <img 
                            className="w-[60%] h-[60%] rounded-lg"
                            src={infos.img}/>
                    </div>

                    <div className="flex justify-end mr-20 pb-3">
                        <button
                            onClick={handlerFecharComponent}    
                            className="block text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-3 text-center h-12"
                        >Voltar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}