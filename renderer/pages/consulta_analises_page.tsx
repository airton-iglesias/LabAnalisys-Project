"use client";

import { useState } from "react";
import TitleBar from "../components/TitleBar";
import Link from "next/link";
import ResultadoAnalises from "../components/ResultadoAnalises";

export default function ConsultaAnalisesPage() {
    
    const [showPassword, setShowPassword] = useState(true);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);
     
    return (
        <div className="w-full bg-slate-800 pb-5">
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
                    <Link href="dashboard_page" className="flex hover:underline text-white cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-5 h-5 mb-1.5 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                        Voltar
                    </Link>
                </div>
            </section>

            <section className="flex flex-col text-white w-[85%] mx-auto mb-3">
                <h1 
                    className="pl-2 mb-1 font-bold text-xl"
                >
                    Busca por Nome ou ID
                </h1>
                <input
                    placeholder="Nome do Paciente ou ID" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 block w-full p-2.5 " 
                />
            </section>
            <section className="flex flex-col gap-3 text-white w-[85%] mx-auto">
                <ResultadoAnalises/>
                <ResultadoAnalises/>
                <ResultadoAnalises/>
                <ResultadoAnalises/>
                <ResultadoAnalises/>
            </section>
        </div>
    )
}