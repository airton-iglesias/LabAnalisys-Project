import { useState } from "react";


export default function DetalhesPacienteCard({setOffDetalhesPaciente, id, foto ,nome, email, cpf , rua, bairro, numero, cidade, estado, dataNascimento, sexo, contato}){
    return(
        <>
            <section className="fixed flex flex-col w-full top-0 h-screen bg-slate-800/80 items-center justify-center z-10">
                <div className="bg-white w-full lg:w-[50rem] lg:mx-auto h-auto flex flex-col rounded-lg">
                    <div className="flex my-3 w-full h-14 justify-between px-16 items-center">
                        <h1 className="flex text-3xl mx-auto font-bold">Detalhes de Paciente</h1>
                        <div className="flex cursor-pointer hover:bg-gray-300 rounded-full" onClick={setOffDetalhesPaciente}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div className=" space-y-6 mb-7 h-full  px-16 w-full">
                        <div className="flex gap-6 w-full">
                            <div className="w-44">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <img className="rounded-full w-32 h-32 border" src={foto} loading="lazy" alt="User Photo"/>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full self-center">
                                <label className="block mb-1">Nome Completo</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="nome"
                                    value={nome}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="flex gap-10 w-full">
                            <div className="w-full">
                                <label className="block mb-1">Email</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="email@example.com"
                                    value={email}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <label className="block mb-1">CPF</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="XXX.XXX.XXX-XX"
                                    value={cpf}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="flex gap-10 w-full">
                            <div className="w-full">
                                <label className="block mb-1">Rua</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="Rua"
                                    value={rua}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <label className="block mb-1">Número</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="XXXX"
                                    value={numero}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <label className="block mb-1">Bairro</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="Bairro"
                                    value={bairro}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="flex gap-10 w-full">
                            <div className="w-full">
                                <label className="block mb-1">Cidade</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="Cidade"
                                    value={cidade}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <label className="block mb-1">Estado</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="Estado"
                                    value={estado}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <label className="block mb-1">Sexo</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="Estado"
                                    value={sexo}
                                    disabled
                                />
                            </div> 
                        </div>
                        <div className="flex gap-10 w-full">
                            <div className="w-full">
                                <label className="block mb-1">Contato</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="(XX) XXXXX-XXXX"
                                    value={contato}
                                    disabled
                                />
                            </div>
                            <div className="w-full">
                                <label className="block mb-1">Data de Nascimento</label>
                                <div className="flex ">
                                    <input 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                        placeholder="(XX) XXXXX-XXXX"
                                        value={"08/08/2023"}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}