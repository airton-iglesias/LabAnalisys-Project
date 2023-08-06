"use client";

import { useState } from "react";
import TitleBar from "../components/TitleBar";
import Link from "next/link";

export default function DashboardPage() {
    
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
                    <div className="absolute w-full text-center mt-24">
                        <span className=" text-2xl">Bem-Vindo, fulano!</span>
                    </div>
                </div>

                <div className="flex flex-row w-full h-full text-white font-bold items-center justify-around p-32">
                    <div className="text-center">
                        <Link href="analise_amostra_page">
                            <div className="flex bg-white w-40 h-20 rounded-lg items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
                                    <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex w-40 h-auto absolute">
                                <span className="flex mx-auto">Analisar Amostra</span>
                            </div>
                        </Link>
                    </div>

                    <div className="text-center">
                        <Link href="consulta_analises_page">
                            <div className="flex bg-white w-40 h-20 rounded-lg items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
                                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div  className="flex  w-40 h-auto absolute">
                                <span className="flex mx-auto">Consultar Análises de Paciêntes</span>
                            </div>
                        </Link>
                    </div>

                    <div className="text-center">
                        <Link href="pacientes_page">
                            <div className="flex bg-white w-40 h-20 rounded-lg items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </div>
                            <div className="flex w-40 h-auto absolute">
                                <span className="flex mx-auto">Pacientes</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}