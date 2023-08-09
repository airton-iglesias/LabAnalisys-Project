import Link from "next/link";
import { useState } from "react";
import EditarAnaliseCard from "./EditarAnaliseCard";
import DetalhesAnaliseCard from "./DetalhesAnaliseCard";
import SucessEditarAnaliseCard from "./SucessEditarAnaliseCard";

export default function AnaliseCard({id, foto ,nome, email, cpf , rua, bairro, numero, cidade, estado, dataNascimento, sexo, contato}){

    const [editarAnalise, setEditarAnalise] = useState(false)
    const [detalhesAnalise, setDetalhesAnalise] = useState(false)
    const [sucessEditarAnalise, setSucessEditarAnalise] = useState(false)

    const setOffDetalhesAnalise = () =>{
        setDetalhesAnalise(false)
    }

    const setOffEditarAnalise = () =>{
        setEditarAnalise(false)
    }

    const setOnSuccessEditarAnalise = () =>{
        setSucessEditarAnalise(true)
        setEditarAnalise(false)
    }
    
    const setOffSuccessEditarAnalise = () =>{
        setSucessEditarAnalise(false)
    }
 
    return(
        <>
           {editarAnalise ?
                <EditarAnaliseCard 
                    setOffEditarPaciente={setOffEditarAnalise} 
                    setOnSuccessEditarPaciente={setOffSuccessEditarAnalise}
                    id={id} 
                    foto={foto}
                    nome={nome}
                    email={email}
                    cpf={cpf}
                    rua={rua}
                    bairro={bairro}
                    numero={numero}
                    cidade={cidade}
                    estado={estado}
                    dataNascimento={dataNascimento}
                    sexo={sexo}
                    contato={contato}
                /> : <></> }

           {sucessEditarAnalise ? <SucessEditarAnaliseCard setOffSuccessEditarPaciente={setOnSuccessEditarAnalise}/> : <></>}

           {detalhesAnalise ? 
                <DetalhesAnaliseCard
                    setOffDetalhesPaciente = {setOffDetalhesAnalise}
                    id={id} 
                    foto={foto}
                    nome={nome}
                    email={email}
                    cpf={cpf}
                    rua={rua}
                    bairro={bairro}
                    numero={numero}
                    cidade={cidade}
                    estado={estado}
                    dataNascimento={dataNascimento}
                    sexo={sexo}
                    contato={contato}
                /> : <></>
            }

            <tr className="h-auto  border-y-2 border-gray-300">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <span>{id}</span>
                    </div>
                </td>
                <th className="flex items-center px-2 py-4">
                    <img className="w-10 h-10 rounded-full" src={foto} alt="Jese image"/>
                    <div className="pl-3 text-left">
                        <div className="text-base font-semibold">{nome}</div>
                        <div className="font-normal ">{email}</div>
                        <div className="font-normal ">{cpf}</div>
                    </div>  
                </th>
                <td className="px-2 py-4 text-center ">
                    <span>
                        {rua}
                    </span>
                </td>
                <td className="px-2 py-4 text-center">
                    <span>
                        {nome}
                    </span>
                </td>
                <td className="px-2 py-4 text-center">
                    <span>
                        {numero}
                    </span>
                </td>
                <td className="px-2 py-4 text-center">
                    <span>
                        {numero}
                    </span>
                </td>
                <td className="px-2 py-4 text-center">
                    <span>
                        {"08/08/2023"}
                    </span>
                </td>
                <td className="px-6 py-4 w-5">
                    <button onClick={() => setDetalhesAnalise(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detalhes</button>
                </td>
                <td className="px-6 py-4 w-5">
                    <button onClick={() => setDetalhesAnalise(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</button>
                </td>
            </tr>
        </>
    )
}