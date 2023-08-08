import Link from "next/link";
import EditarPacienteCard from "./EditarPacienteCard";
import { useState } from "react";
import SucessEditarPacienteCard from "./SucessEditarPacienteCard";

export default function PacienteCard({id, foto ,nome, email, cpf , rua, bairro, numero, cidade, estado, dataNascimento, sexo, contato}){

    const [editarPaciente, setEditarPaciente] = useState(false)
    const [sucessEditarPaciente, setSucessEditarPaciente] = useState(false)

    const setOffEditarPaciente = () =>{
        setEditarPaciente(false)
    }

    const setOnSuccessEditarPaciente = () =>{
        setSucessEditarPaciente(true)
        setEditarPaciente(false)
    }
    
    const setOffSuccessEditarPaciente = () =>{
        setSucessEditarPaciente(false)
    }
 
    return(
        <>
           {editarPaciente ?
                <EditarPacienteCard 
                    setOffEditarPaciente={setOffEditarPaciente} 
                    setOnSuccessEditarPaciente={setOnSuccessEditarPaciente}
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
           {sucessEditarPaciente ? <SucessEditarPacienteCard setOffSuccessEditarPaciente={setOffSuccessEditarPaciente}/> : <></>}
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
                        {bairro}
                    </span>
                </td>
                <td className="px-2 py-4 text-center">
                    <span>
                        {numero}
                    </span>
                </td>
                <td className="px-2 py-4 text-center">
                    <span>
                        {cidade}
                    </span>
                </td>
                <td className="px-2 py-4 text-center">
                    <span>
                        {"08/08/2023"}
                    </span>
                </td>
                <td className="px-2 py-4 text-center">
                    <span>{contato}</span>
                </td>
                <td className="px-6 py-4 w-5">
                    <Link href="cadastro_paciente_page" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Detalhes</Link>
                </td>
                <td className="px-6 py-4 w-5">
                    <button onClick={() => setEditarPaciente(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</button>
                </td>
            </tr>
        </>
    )
}