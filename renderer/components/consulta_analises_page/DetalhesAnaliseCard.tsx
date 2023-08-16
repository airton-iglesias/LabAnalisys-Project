export default function DetalhesAnaliseCard({setOffDetalhesPaciente, id, foto ,nome, email, cpf}){
    return(
        <>
            <section className="fixed flex flex-col w-screen h-screen top-0 bg-slate-800/80 z-10 items-center justify-center">
                <div className="flex justify-end w-[50rem] mr-12 mb-2 text-white gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                    </svg>
                    <span className="flex font-bold">Imprimir Análise</span>
                </div>
                <div className=" bg-white w-[50rem] h-[39rem] flex flex-col rounded-lg ">
                    <div className="flex my-3 w-full h-14 justify-between px-16 items-center">
                        <h1 className="flex text-3xl mx-auto font-bold">Detalhes da Análise</h1>
                        <div className="flex cursor-pointer hover:bg-gray-300 rounded-full" onClick={setOffDetalhesPaciente}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-[35rem] text-white mt-2 font-bold rounded-lg px-8 overflow-scroll-y">
                        <div className="text-black w-full ">
                            <div className="flex justify-between font-semibold text-base px-16 mb-5">
                                <div className="flex flex-col">
                                    <span className="font-bold">ID: 99999999</span>
                                    <span>Nome Profissional: {nome}</span>
                                    <span>Total Pontos Vermelhos: 9999999</span>
                                    <span>Total Pontos Azuis: 99999999</span>
                                    <span>Diagnostico</span>
                                    <span>Data: 07/08/2023</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-black w-full pb-4">
                            <h1 className="text-3xl ml-16 font-bold mb-5">Amostra Analisada</h1>
                            <div className="rounded-lg">
                                <img className="bg-gray-200 w-[35rem] h-[20rem] rounded-lg mx-auto" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}