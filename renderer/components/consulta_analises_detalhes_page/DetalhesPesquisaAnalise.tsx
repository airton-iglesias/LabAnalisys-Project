export default function DetalhesPesquisaAnalise({id, paciente, profissional, diagnostico, data, pontosvermelhos, pontosazuis }){
    return(
        <>
            <div className="flex justify-between font-semibold p-10 pr-36  text-lg">
                <div className="flex flex-col">
                    <span className="font-bold">ID: {id}</span>
                    <span>Paciente: {paciente}</span>
                    <span>Profissional: {profissional}</span>
                    <span>Diagnóstico: {diagnostico}</span>
                </div>
                <div className="flex flex-col">
                    <span>Data: {data}</span>
                    <span>Total Pontos Vermelhos: {pontosvermelhos}</span>
                    <span>Total Pontos Azuis: {pontosazuis}</span>
                </div>
            </div>
        </>
    )
}