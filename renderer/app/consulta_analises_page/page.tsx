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
                    <div className="absolute w-full text-center mt-24">
                        <span className=" text-2xl">Bem-Vindo, fulano!</span>
                    </div>
                </div>
                
            </section>
        </>
    )
}