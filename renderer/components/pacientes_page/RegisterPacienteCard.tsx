export default function RegisterPacienteCard({ setOffRegisterScreen, setOnSuccessRegisterScreen }){
    const setRegistrarPaciente = () =>{
        setOffRegisterScreen(false)
    }
    const submitRegister = (e) => {
        e.preventDefault();
        setOffRegisterScreen(false)
        setOnSuccessRegisterScreen(true)
    }
    return(
        <>
            <section className="fixed flex flex-col mt-[-2.5rem] w-full self-center justify-center h-screen bg-slate-800/80 px-64 pt-16 z-10">
                <div className="bg-white w-full lg:w-[50rem] lg:mx-auto h-auto flex flex-col rounded-lg">
                    <div className="flex my-3 w-full h-14 justify-between px-16 items-center">
                        <h1 className="flex text-3xl mx-auto font-bold">Cadastro de Paciente</h1>
                        <div className="flex cursor-pointer rounded-full" onClick={setRegistrarPaciente}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div className=" space-y-6 mb-7 h-full px-16 w-full">
                        <div className="flex-col">
                            <label className="">Nome Completo</label>
                            <input 
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 block w-full p-2.5" 
                                placeholder="nome"
                            />
                        </div>
                        <div className="flex gap-10 w-full">
                            <div className="w-full">
                                <label className="block">Email</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div className="w-full">
                                <label className="block">CPF</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="XXX.XXX.XXX-XX"
                                />
                            </div>
                        </div>
                        <div className="flex gap-10 w-full">
                            <div className="w-full">
                                <label className="block">Rua</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="Rua"
                                />
                            </div>
                            <div className="w-full">
                                <label className="block">Número</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="XXXX"
                                />
                            </div>
                            <div className="w-full">
                                <label className="">Bairro</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="Bairro"
                                />
                            </div>
                        </div>
                        <div className="flex gap-10 w-full">
                            <div className="w-full">
                                <label className="block">Cidade</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="Cidade"
                                />
                            </div>
                            <div className="w-full">
                                <label className="block">Estado</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="Estado"
                                />
                            </div>
                            <div className="w-full">
                                <label className="">Sexo</label>
                                <select 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                >
                                    <option>Selecione o sexo</option>
                                    <option>Masculino</option>
                                    <option>Feminino</option>
                                </select>
                            </div> 
                        </div>
                        <div className="flex gap-10 w-full">
                            <div className="w-full">
                                <label className="block">Contato</label>
                                <input 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                    placeholder="(XX) XXXXX-XXXX"
                                />
                            </div>
                            <div className="w-full">
                                <label className="block">Data de Nascimento</label>
                                <div className="flex ">
                                    <input 
                                        className="bg-gray-50 border text-center border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                        placeholder="XX"
                                    />
                                    <input 
                                        className="bg-gray-50 border text-center border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                        placeholder="XX"
                                    />
                                    <input 
                                        className="bg-gray-50 border text-center border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800 focus:outline-slate-800 w-full p-2.5" 
                                        placeholder="XXXX"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full justify-end">
                            <button onClick={(e)=>submitRegister(e)} type="submit" className="block w-32 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:border-slate-800 focus:outline-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center h-12">
                                Cadastrar
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}