"use client";

import { useEffect, useState } from "react";
import TitleBar from "../components/TitleBar";
import Link from "next/link";

export default function ConsultaPacientePage() {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const dataFetch = await fetch("https://api.warframe.market/v1/items");
                if (!dataFetch.ok) {
                    throw new Error('Failed to fetch data');
                }
                const response = await dataFetch.json();
                setData(response.payload.items);
                if (response.payload.items !== null) {
                    setIsLoading(false)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);


    return (
        <>
            <TitleBar/>
            <section className="flex w-screen h-screen bg-slate-800">
                <div className="flex flex-col justify-center items-center h-auto w-full">
                    <div className="flex w-96 sm:p-0 sm:max-w-md mb-2">
                        <div >
                            <Link href="pacientes_page" className="flex hover:underline text-white cursor-pointer">
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
                                Cadastro do Paciente
                            </div>

                            <div id="errorPopUp" className="hidden bg-red-400 p-3 rounded-lg text-center">
                                <h1 className="text-xl">Error</h1>
                                <p id="errorPopUpText">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Nome do Paciente</label>
                                    {isLoading ? 
                                        <div className="bg-gray-300  text-gray-900 rounded-lg  block w-full h-10"></div>
                                        :
                                        <input 
                                            type="text" 
                                            value=""
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 block w-full p-2.5 " 
                                            placeholder="Nome do Paciente" 
                                            disabled
                                        />
                                    }
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Data de Nascimento</label>
                                    {isLoading ? 
                                        <div className="bg-gray-300  text-gray-900 rounded-lg  block w-full h-10"></div>
                                        :
                                        <input 
                                            type="text"
                                            placeholder="07/08/2023" 
                                            value=""
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 block w-full p-2.5" 
                                            disabled
                                        />
                                    }
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Contato</label>
                                    {isLoading ? 
                                        <div className="bg-gray-300  text-gray-900 rounded-lg  block w-full h-10"></div>
                                        :
                                        <input 
                                            type="text"
                                            placeholder="(99) 99999-9999" 
                                            value=""
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 block w-full p-2.5" 
                                            disabled
                                        />
                                    }
                                    
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                    {isLoading ? 
                                        <div className="bg-gray-300  text-gray-900 rounded-lg  block w-full h-10"></div>
                                        :
                                        <input 
                                            type="email" 
                                            value=""
                                            placeholder="email@example.com" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 block w-full p-2.5" 
                                            disabled
                                        />
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}