"use client";

import { useState } from "react";
import TitleBar from "../components/TitleBar";
import Link from "next/link";

export default function RegisterPage() {
    
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
                            <Link href="/" className="flex hover:underline text-white cursor-pointer">
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
                                Cadastro
                            </div>

                            <div id="errorPopUp" className="hidden bg-red-400 p-3 rounded-lg text-center">
                                <h1 className="text-xl">Error</h1>
                                <p id="errorPopUpText">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                            </div>

                            <form className="space-y-4">

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Nome Profissional</label>
                                    <input type="text" onChange={(e) => setNome(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 block w-full p-2.5 " placeholder="Nome" required/>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Login</label>
                                    <input type="text" onChange={(e) => setLogin(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 block w-full p-2.5 " placeholder="email@exemplo.com" required/>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
                                    <div className="relative">
                                        <input type={showPassword ? "password" : "text"} placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 block w-full p-2.5" required/>
                                        <span id="toggle-senha-icon" className="absolute right-4 bottom-2.5">
                                            {showPassword ? 
                                                <svg onClick={() => setShowPassword(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                :
                                                <svg onClick={() => setShowPassword(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                </svg>
                                            }
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Senha novamente</label>
                                    <div className="relative">
                                        <input type={showPasswordConfirm ? "password" : "text"} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 block w-full p-2.5" required/>
                                        <span id="toggle-senhaConfirm-icon" className="absolute right-4 bottom-2.5">
                                            {showPasswordConfirm ? 
                                                <svg onClick={() => setShowPasswordConfirm(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                :
                                                <svg onClick={() => setShowPasswordConfirm(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                </svg>
                                            }
                                        </span>
                                    </div>
                                </div>
                            
                                <button type="submit" className="block w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:border-slate-800 focus:outline-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">
                                    Cadastrar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}