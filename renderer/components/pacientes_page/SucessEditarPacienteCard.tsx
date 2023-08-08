"use client";

import { useState } from "react";
import TitleBar from "../TitleBar";
import Link from "next/link";

export default function SucessEditarPacienteCard({ setOffSuccessEditarPaciente}) {

    const setOffScreen = () =>{
        setOffSuccessEditarPaciente(false)
    }
     
    return (
        <>
            <section className="fixed flex flex-col top-0 w-full self-center justify-center h-screen bg-slate-800/80 px-64 pt-16 z-10">
                <div className="bg-white w-full lg:w-[50rem] lg:mx-auto h-auto flex flex-col rounded-lg">
                    <div className="flex my-3 w-full h-14 justify-between px-16 items-center mt-5">
                        <h1 className="flex text-3xl mx-auto font-bold">Cadastro de paciente editado com sucesso!</h1>
                        <div className="flex cursor-pointer rounded-full" onClick={setOffScreen}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex w-full mb-4">
                        <svg className="ft-green-tick my-8 mx-auto w-48 h-48" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
                            <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22"/>
                            <path className="tick" fill="none" stroke="#FFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M14 27l5.917 4.917L34 17"/>
                        </svg>
                    </div>

                    <div className="mb-10">
                        <div className="flex w-full justify-center">
                            <button onClick={setOffScreen} type="submit" className="block w-80 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:border-slate-800 focus:outline-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">
                                Voltar
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}