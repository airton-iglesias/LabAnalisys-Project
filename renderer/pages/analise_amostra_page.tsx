"use client";

import { useState } from "react";
import TitleBar from "../components/TitleBar";
import Link from "next/link";

export default function AnaliseAmostraPage() {
    
    const [showPassword, setShowPassword] = useState(true);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);
     
    return (
        <>
            <TitleBar/>
            <section className="flex w-screen h-screen bg-slate-800 text-white justify-between">
                <div className="bg-white w-[77%] h-screen">
                    <button className="absolute mt-10 right-[25%] bg-orange-400 hover:bg-orange-700 p-3 rounded-lg">Conectar Câmera</button>
                    <div className="w-full h-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
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
                            <div className="flex-col mt-1.5">
                                <label 
                                    className="flex mb-1.5">
                                    Profissional
                                </label>
                                <input 
                                    disabled
                                    placeholder="Nome Profissional"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800  focus:outline-slate-800 block w-full p-2.5"
                                />
                            </div>
                            <div className="flex-col mt-1.5">
                                <label className="flex mb-1.5">
                                    Paciente
                                </label>
                                <input 
                                    placeholder="Nome Paciente"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800  focus:outline-slate-800 block w-full p-2.5"
                                />
                            </div>
                            <div className="w-full gap-2 flex justify-between mt-1.5">
                                <div className="w-full">
                                    <label 
                                        className="flex mb-1.5">
                                        Pontos Vermelhos
                                    </label>
                                    <input 
                                        placeholder="99999999999999"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 block w-full p-2.5"
                                    />
                                </div>
                                <div className="w-full">
                                    <label 
                                        className="flex mb-1.5">
                                        Pontos Azuis
                                    </label>
                                    <input 
                                        placeholder="99999999999999"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800  focus:outline-slate-800 block w-full p-2.5"
                                    />
                                </div>
                            </div>
                            <div className="flex-col mt-1.5">
                                <label 
                                    className="flex mb-1.5">
                                    Diagnóstico
                                </label>
                                <input
                                    placeholder="Descrição do Diagnóstico" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800  focus:outline-slate-800 block w-full p-2.5"
                                />
                            </div>
                            
                            <div className="flex flex-col mt-4 text-white font-bold gap-4">
                                <Link href="dashboard_page" className="block w-full gap-2 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">Descartar Análise</Link>
                                <Link href="#" className="block w-full text-white bg-orange-400 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">Refazer Análise</Link>
                                <Link href="amostra_resultado_confirmacao_page" className="block w-full text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">Cadastrar Análise</Link>
                            </div>

                        </form>
                    </div>
                </div>
                
            </section>
        </>
    )
}