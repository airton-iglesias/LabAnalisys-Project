"use client";

import { useState } from "react";
import TitleBar from "../../components/TitleBar";
import Link from "next/link";

export default function Page() {
    
    const [showPassword, setShowPassword] = useState(true);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);
     
    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <>
            <TitleBar/>
            <section className="flex w-screen h-screen bg-slate-800">
                <div className="flex flex-col justify-center items-center h-auto w-full">
                    <div className="flex w-96 sm:p-0 sm:max-w-md mb-2">
                        <div >
                            <Link href="dashboard_page" className="flex hover:underline text-white cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-5 h-5 mb-1.5 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                </svg>

                                Voltar
                            </Link>
                        </div>
                    </div>
                    <div className="w-96 bg-white rounded-lg shadow sm:max-w-md p-2">
                        <div className="p-6 space-y-4">
                            <div className="flex justify-center mb-6 text-lg sm:text-2xl font-semibold text-gray-900 ">
                                Pacientes
                            </div>

                            <div id="errorPopUp" className="hidden bg-red-400 p-3 rounded-lg text-center">
                                <h1 className="text-xl">Error</h1>
                                <p id="errorPopUpText">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Nome Paciente</label>
                                    <input type="text" onChange={(e) => setNome(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 block w-full p-2.5 " placeholder="Nome" required/>
                                </div>
                            
                                <Link href="consulta_paciente_page" className="block w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:border-slate-800 focus:outline-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">
                                    Consultar
                                </Link>
                            </form>
                            <div className="block w-full h-0.5 bg-gray-200 rounded-xl my-10"></div>
                            <Link href="cadastro_paciente_page" className="block w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:border-slate-800 focus:outline-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">
                                    Cadastrar Paciente
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}