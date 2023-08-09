


export default function AvisoDeAcao({setOffAviso, id}){

    return(
        <>
            
            <section className="fixed flex flex-col w-full top-0 h-screen bg-slate-800/80 items-center justify-center z-20">

                <div className="bg-white w-full lg:w-[30rem] lg:mx-auto h-auto flex flex-col p-10 rounded-lg text-center">
                    <h1 className="text-xl font-bold">Você tem certeza que deseja excluir?</h1>
                    <div className="flex self-center mt-5 gap-16">
                        <button className="block w-38 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:border-slate-800 focus:outline-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">Apagar</button>
                        <button onClick={setOffAviso} className="block w-38 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:border-slate-800 focus:outline-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">Cancelar</button>
                    </div>
                </div>
            </section>
        </>
    )
}