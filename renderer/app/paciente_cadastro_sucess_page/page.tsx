"use client";

import { useState } from "react";
import TitleBar from "../../components/TitleBar";
import Link from "next/link";

export default function Page() {
    
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
                        <h1 className="text-black font-bold text-5xl">Cadastrado com sucesso!</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="my-8 mx-auto w-56 h-56">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        <Link href="dashboard_page" className="block w-96 mx-auto text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:border-slate-800 focus:outline-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">
                                    Voltar ao Dashboard
                        </Link>
                    </div>
                </div>
                
            </section>
        </>
    )
}