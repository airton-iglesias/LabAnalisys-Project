"use client";

import { useEffect, useState } from "react";
import TitleBar from "../components/TitleBar";
import Link from "next/link";
import AnaliseCard from "../components/consulta_analises_page/AnaliseCard";
import AnaliseCardLoading from "../components/consulta_analises_page/AnaliseCardLoading";

export default function PacientesPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState(null)
    const keywords = searchQuery.toLowerCase().split(' ');

    useEffect(() => {
        const getData = async () => {
            try {
                const dataFetch = await fetch("https://randomuser.me/api/?results=25&nat=br");
                if (!dataFetch.ok) {
                    throw new Error('Failed to fetch data');
                }
                const response = await dataFetch.json();
                setData(response.results);
                if (response.results!== null) {
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
            <section className="mt-10 mx-10">
                <div className="flex w-full">
                    <div className="text-white flex justify-between w-full">
                        <Link href="dashboard_page" className="flex self-end hover:underline text-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-5 h-5 mb-1.5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>

                            Voltar
                        </Link>
                        <h1 className="text-3xl flex font-bold">LOGO</h1>
                        <div></div>
                    </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
                        <div className="w-full">
                            <div className="absolute top-[1.65rem] inset-y-0 items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" 
                                className="bg-gray-50 w-full border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 block p-2 pl-10" 
                                placeholder="Pesquisar paciente por NOME, CPF ou ID"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <table className="w-full text-sm rounded-lg mb-5 overflow-hidden">
                        <thead className=" text-black uppercase bg-white">
                            <tr className="">
                                <th  className="text-center  py-3">
                                    ID
                                </th>
                                <th  className="text-center py-3">
                                    Nome Profissional
                                </th>
                                <th  className="text-center py-3">
                                    Diagnóstico
                                </th>
                                <th  className="text-center py-3">
                                    Pontos Vermelhos
                                </th>
                                <th  className="text-center py-3">
                                    Pontos Azuis
                                </th>
                                <th  className="text-center py-3">
                                    Data
                                </th>
                                <th  className="text-center py-3">

                                </th>
                                <th  className="text-center py-3 ">

                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-200">
                            {isLoading ? 
                                <>
                                    <AnaliseCardLoading/>
                                    <AnaliseCardLoading/>
                                    <AnaliseCardLoading/>
                                    <AnaliseCardLoading/>
                                    <AnaliseCardLoading/>
                                    <AnaliseCardLoading/>
                                    <AnaliseCardLoading/>
                                </>
                                :
                                data
                                    .filter((item) => {
                                        const fullName = (item.name.first + " " + item.name.last).toLowerCase();
                                        const email = item.email.toLowerCase();
                                        const cpf = item.id.value.toLowerCase();
                                        const streetName = item.location.street.name.toLowerCase();
                                        const city = item.location.city.toLowerCase();
                                        const state = item.location.state.toLowerCase();

                                        return keywords.every(keyword =>
                                            fullName.includes(keyword) ||
                                            email.includes(keyword) ||
                                            cpf.includes(keyword) ||
                                            streetName.includes(keyword) ||
                                            city.includes(keyword) ||
                                            state.includes(keyword)
                                        );
                                    })
                                    .map((item, index) => 
                                        <AnaliseCard
                                            key={index}
                                            id={index}   
                                            foto={item.picture.thumbnail}
                                            nome={item.name.first + " " + item.name.last}
                                            email={item.email}
                                            cpf={item.id.value}
                                            rua={item.location.street.name}
                                            bairro={item.location.city}
                                            numero={item.location.street.number}
                                            cidade={item.location.city}
                                            estado={item.location.state}
                                            dataNascimento={item.registered.date}
                                            sexo={item.gender}
                                            contato={item.cell}
                                        />
                                    )
                                
                            }
                        </tbody>
                        
                    </table>
                </div>
            </section>
        </>
    )
}