"use client";

import { useEffect, useState } from "react";
import TitleBar from "../components/TitleBar";
import Link from "next/link";
import DetalhesPesquisaAnalise from "../components/consulta_analises_detalhes_page/DetalhesPesquisaAnalise";
import DetalhesPesquisaAnaliseLoading from "../components/consulta_analises_detalhes_page/DetalhesPesquisaAnaliseLoading";

export default function ConsultaAnalisesPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

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
        <div className="w-full bg-slate-800">
            <TitleBar/>
            <section className="flex w-full h-32 bg-slate-800 text-white">
                <div>
                    <div className="absolute w-full text-center mt-10">
                        <span className=" text-4xl">Logo</span>
                    </div>
                </div>
            </section>

            <section className="flex full px-10 mb-3 h-full bg-slate-800">
                <div className="bg-slate-800 w-full justify-between flex-row flex">
                    <Link href="consulta_analises_page" className="flex hover:underline text-white cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-5 h-5 mb-1.5 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>

                        Voltar
                    </Link>
                    <Link href="consulta_analises_page" className="flex hover:underline text-white cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-5 h-5 mt-0.5 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                        </svg>

                        Imprimir Análise
                    </Link>
                </div>
            </section>

            <section className="flex w-full px-10 h-full bg-slate-800">
                <div className="flex flex-col w-full h-full bg-white text-white font-bold mx-auto rounded-lg px-16 pt-16 pb-8 mb-8">
                    <div className="text-black w-full">
                        <h1 className="text-3xl font-bold">Dados da Consulta</h1>
                        {isLoading ? 
                            <>
                                <DetalhesPesquisaAnaliseLoading />
                            </>
                            : 
                             <DetalhesPesquisaAnalise id={999999} paciente={"Lorem Ipsu"} profissional={"Lorem Ipsu"} diagnostico={"Lorem Ipsu"} data={"07/08/2023"} pontosvermelhos={99999} pontosazuis={99999}/>
                        }
                    </div>
                    <div className="text-black w-full">
                        <h1 className="text-3xl font-bold mb-8">Amostra Analisada</h1>
                        {isLoading ? 
                            
                            <div className="w-full h-[40rem] rounded-lg bg-gray-300">
                                
                            </div>
                            : 
                            <div className="w-full h-[40rem] rounded-lg bg-gray-200 animate-pulse">
                                <img className="w-full h-full rounded-lg" loading="lazy"/>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}