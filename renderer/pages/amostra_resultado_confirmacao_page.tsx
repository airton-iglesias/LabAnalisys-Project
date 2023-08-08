"use client";

import { useState } from "react";
import TitleBar from "../components/TitleBar";
import Link from "next/link";

export default function AmostraResultadoConfirmacaoPage() {
    
    const [showPassword, setShowPassword] = useState(true);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);
     
    return (
        <div className="w-full bg-slate-800">
            <TitleBar/>
            <section className="flex w-full h-32 bg-slate-800 text-white">
                <div>
                    <div className="absolute w-full text-center mt-10">
                        <span className=" text-4xl">Logo</span>
                    </div>
                </div>
            </section>

            <section className="flex w-full px-10 mb-3 h-full bg-slate-800">
                <div className="bg-slate-800">
                    <Link href="analise_amostra_page" className="flex hover:underline text-white cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-5 h-5 mb-1.5 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>

                        Voltar
                    </Link>
                </div>
            </section>

            <section className="flex w-full h-full px-10 bg-slate-800">
                <div className="flex flex-col w-full h-full bg-white text-white font-bold rounded-lg px-16 pt-16 pb-8 mb-8">
                    <div className="text-black w-full">
                        <h1 className="text-3xl font-bold">Dados da Consulta - Confirmação</h1>
                        <div className="flex justify-between font-semibold p-10 pr-36  text-lg">
                            <div className="flex flex-col">
                                <span className="font-bold">ID: 99999999</span>
                                <span>Paciente: Lorem Ipsu</span>
                                <span>Profissional: Lorem Ipsu</span>
                                <span>Diagnóstico: Lorem Ipsu</span>
                            </div>
                            <div className="flex flex-col">
                                <span>Data: 07/08/2023</span>
                                <span>Total Pontos Vermelhos: 9999999</span>
                                <span>Total Pontos Azuis: 99999999</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-black w-full">
                        <h1 className="text-3xl font-bold mb-8">Amostra Analisada</h1>
                        <div className="w-full h-[40rem] rounded-lg">
                            <img className="bg-gray-200 w-full h-full rounded-lg" loading="lazy"/>
                        </div>
                    </div>

                    <div className="flex w-full h-auto mt-8 justify-end">
                        <Link href="amostra_cadastro_sucess_page" className="block w-44 right-0 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:border-slate-800 focus:outline-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">
                            Cadastrar
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}