import Link from "next/link";


export default function ResultadoAnalises({id, paciente, profissional, diagnostico, data}){
    return(
        <>
            <div className="bg-white w-full h-36 rounded-lg text-black">
                <div className="flex justify-between w-full h-full py-3 px-8 items-center">
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-lg">ID: {id}</span>
                        <span>Paciente: {paciente}</span>
                        <span>Profissional: {profissional}</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span>Diagnóstico: {diagnostico}</span>
                        <span>Data: {data}</span>
                    </div>
                    <div className="w-40">
                        <Link href="consulta_analises_detalhes_page" className="block w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:border-slate-800 focus:outline-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">
                            Ver Detalhes
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}