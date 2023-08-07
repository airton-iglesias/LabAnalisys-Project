"use client";

import { useState } from "react";
import TitleBar from "../components/TitleBar";
import Link from "next/link";

export default function AmostraCadastroSucessPage() {
    
    const [showPassword, setShowPassword] = useState(true);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(true);
     
    return (
        <>
            <TitleBar/>
            <section className="flex w-screen h-screen bg-slate-800 text-white">
                <div>
                    <div className="absolute w-full text-center mt-10">
                        <span className=" text-4xl">Logo</span>
                    </div>
                </div>

                <div className="flex mx-auto self-center bg-white w-[80%] h-[70%] rounded-lg">
                    <div className="mx-auto self-center">
                        <h1 className="text-black font-bold text-5xl">Análise feita com sucesso!</h1>
                        <svg className="ft-green-tick my-8 mx-auto w-48 h-48" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
                            <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22"/>
                            <path className="tick" fill="none" stroke="#FFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M14 27l5.917 4.917L34 17"/>
                        </svg>
                        <Link href="dashboard_page" className="block mb-5 w-96 mx-auto text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:border-slate-800 focus:outline-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">
                            Imprimir Análise
                        </Link>
                        <Link href="dashboard_page" className="block w-96 mx-auto text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:border-slate-800 focus:outline-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">
                            Voltar ao Dashboard
                        </Link>
                    </div>
                </div>
                
            </section>
        </>
    )
}