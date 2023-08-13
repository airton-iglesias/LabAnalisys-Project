"use client";

import { useState } from "react";
import TitleBar from "../components/TitleBar";
import Link from "next/link";
import SucessRegisterPacienteCard from "../components/pacientes_page/SucessRegisterPacienteCard";

export default function AnaliseAmostraPage() {
    
    const [successCadastrarAmostra, setSuccessCadastrarAmostra] = useState(false);
        // Registro de Paciente
        const setOffSuccessRegisterScreen = () => {
            setSuccessCadastrarAmostra(false)
        }
        const setOnSuccessRegisterScreen = (e) => {
            e.preventDefault()
            setSuccessCadastrarAmostra(true)
            setTimeout(() => window.location.replace("/dashboard_page"), 1000)
            
        }
     
    return (
        <>
            <TitleBar/>
            {successCadastrarAmostra ? <SucessRegisterPacienteCard setOffSuccessRegisterScreen={setOffSuccessRegisterScreen} /> : <></>}
            <section className="flex w-screen h-screen bg-slate-800 text-white justify-between">
                <div className="w-[77%] h-screen rounded-lg top-[-1.9rem]">
                    <button className="absolute mt-10 right-[25%] bg-orange-400 hover:bg-orange-700 p-3 rounded-lg">Conectar Câmera</button>
                    <div className="w-full h-full flex justify-center items-center rounded-lg">
                        <iframe
                            className="w-full h-full flex justify-center items-center"
                            src="https://player.twitch.tv/?channel=gaules&parent=localhost"
                            height="100%"
                            width="100%"
                        >   
                        </iframe>
                    </div>

                </div>
                <div className="w-[23%] h-screen">
                    <div className="mt-10 text-center mb-3">
                        <h1 className="font-bold text-4xl">Logo</h1>
                    </div>

                    <div className="p-2.5">
                        <form>
                            <div className="flex gap-2 mt-1.5">
                                <div className="w-full">
                                    <label 
                                        className="flex mb-1.5">ID da Análise
                                    </label>
                                    <input 
                                        disabled
                                        placeholder="99999999999999"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800  focus:outline-slate-800 block w-full p-3"
                                    />
                                </div>
                                <div className="w-full">
                                    <label 
                                        className="flex mb-1.5">Data
                                    </label>
                                    <input
                                        disabled
                                        placeholder="05/08/2023" 
                                        className="bg-gray-50 border text-center border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800  focus:outline-slate-800 block w-full p-3"
                                    />
                                </div>
                            </div>

                            
                            <div className="flex flex-col mt-4 text-white font-bold gap-4">
                                <Link href="dashboard_page" className="block w-full gap-2 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">Descartar Análise</Link>
                                <Link href="#" className="block w-full text-white bg-orange-400 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">Refazer Análise</Link>
                                <button onClick={(e)=>setOnSuccessRegisterScreen(e)} className="block w-full text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">Cadastrar Análise</button>
                            </div>

                        </form>
                    </div>
                </div>
                
            </section>
        </>
    )
}