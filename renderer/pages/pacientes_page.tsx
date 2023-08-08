"use client";

import { useEffect, useState } from "react";
import TitleBar from "../components/TitleBar";
import Link from "next/link";
import PacienteCard from "../components/pacientes_page/PacienteCard";
import PacienteCardLoading from "../components/pacientes_page/PacienteCardLoading";
import RegisterPacienteCard from "../components/pacientes_page/RegisterPacienteCard";
import SucessRegisterPacienteCard from "../components/pacientes_page/SucessRegisterPacienteCard";
import EditarPacienteCard from "../components/pacientes_page/EditarPacienteCard";

export default function PacientesPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState(null)
    const [registrarPaciente, setOffRegistrarPaciente] = useState(false)
    const [successRegistrarPaciente, setOffSuccessRegistrarPaciente] = useState(false)


    // Registro de Paciente
    const setOffRegisterScreen = () => {
        setOffRegistrarPaciente(false)
    }
    const setOnSuccessRegisterScreen = () => {
        setOffSuccessRegistrarPaciente(true)
    }
    const setOffSuccessRegisterScreen = () => {
        setOffSuccessRegistrarPaciente(false)
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const dataFetch = await fetch("https://randomuser.me/api/?results=25&nat=br");
                if (!dataFetch.ok) {
                    throw new Error('Failed to fetch data');
                }
                const response = await dataFetch.json();
                setData(response.results);
                if (response.results!== null) {
                    setIsLoading(false)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);
      
    return (
        <>
            <TitleBar/>
            {registrarPaciente ? <RegisterPacienteCard setOffRegisterScreen={setOffRegisterScreen} setOnSuccessRegisterScreen={setOnSuccessRegisterScreen} /> : <></>}
            {successRegistrarPaciente ? <SucessRegisterPacienteCard setOffSuccessRegisterScreen={setOffSuccessRegisterScreen} /> : <></>}
            
            <section className="mt-10 mx-10">
                <div className="flex w-full">
                    <div >
                        <Link href="dashboard_page" className="flex hover:underline text-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-5 h-5 mb-1.5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>

                            Voltar
                        </Link>
                    </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
                        <div className="w-56">
                            <button onClick={() => setOffRegistrarPaciente(true)} className="block w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:border-slate-800 focus:outline-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">
                                Adicionar Paciente
                            </button>
                        </div>
                        <div className="w-full ml-8">
                            <div className="absolute top-8 inset-y-0 items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" 
                                className="bg-gray-50 w-full border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 block p-2 pl-10" 
                                placeholder="Pesquisar paciente por NOME ou CPF"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <table className="w-full text-sm rounded-lg mb-5 overflow-hidden">
                        <thead className=" text-black uppercase bg-white">
                            <tr className="">
                                <th  className="text-center  py-3">
                                    ID
                                </th>
                                <th  className="text-center py-3">
                                    Nome
                                </th>
                                <th  className="text-center py-3">
                                    Rua
                                </th>
                                <th  className="text-center py-3">
                                    Bairro
                                </th>
                                <th  className="text-center py-3">
                                    Número
                                </th>
                                <th  className="text-center py-3">
                                    Cidade
                                </th>
                                <th  className=" text-center py-3">
                                    Data de Nascimento
                                </th>
                                <th  className="text-center py-3">
                                    Contato
                                </th>
                                <th  className="text-center py-3">
                                </th>
                                <th  className="text-center py-3 ">
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-200">
                            {isLoading ? 
                                <>
                                    <PacienteCardLoading/>
                                    <PacienteCardLoading/>
                                    <PacienteCardLoading/>
                                    <PacienteCardLoading/>
                                    <PacienteCardLoading/>
                                    <PacienteCardLoading/>
                                </>
                                :
                                data
                                    .filter((item, index) =>
                                        item.name.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                        item.id.value.toLowerCase().includes(searchQuery.toLowerCase()))
                                    .map((item, index) => 
                                        <PacienteCard
                                            key={index}
                                            id={index}   
                                            foto={item.picture.thumbnail}
                                            nome={item.name.first + " " + item.name.last}
                                            email={item.email}
                                            cpf={item.id.value}
                                            rua={item.location.street.name}
                                            bairro={item.location.city}
                                            numero={item.location.street.number}
                                            cidade={item.location.city}
                                            estado={item.location.state}
                                            dataNascimento={item.registered.date}
                                            sexo={item.gender}
                                            contato={item.cell}
                                        />
                                    )
                                
                            }
                        </tbody>
                        
                    </table>
                </div>
            </section>
        </>
    )
}