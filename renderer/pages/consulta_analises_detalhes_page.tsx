"use client";

import { useState } from "react";
import TitleBar from "../components/TitleBar";
import Link from "next/link";

export default function ConsultaAnalisesPage() {
    
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

            <section className="flex w-[85%] mx-auto mb-3 h-full bg-slate-800">
                <div className="bg-slate-800">
                    <Link href="consulta_analises_page" className="flex hover:underline text-white cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-5 h-5 mb-1.5 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>

                        Voltar
                    </Link>
                </div>
            </section>

            <section className="flex w-full h-full bg-slate-800">
                <div className="flex flex-col w-[85%] h-full bg-white text-white font-bold mx-auto rounded-lg px-16 pt-16 pb-8 mb-8">
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
                </div>
            </section>
        </div>
    )
}