import Link from "next/link";


export default function ResultadoAnalisesLoading(){
    return(
        <>
            <div className="bg-white w-full h-36 rounded-lg text-black">
                <div className="flex justify-between w-full h-full py-3 px-8 items-center">
                    <div className="flex flex-col gap-3">
                        <div className="h-5 w-32 rounded-lg bg-gray-300 animate-pulse"></div>
                        <div className="h-5 w-32 rounded-lg bg-gray-300 animate-pulse"></div>
                        <div className="h-5 w-32 rounded-lg bg-gray-300 animate-pulse"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="h-5 w-32 rounded-lg bg-gray-300 animate-pulse"></div>
                        <div className="h-5 w-32 rounded-lg bg-gray-300 animate-pulse"></div>
                    </div>
                    <div className="w-40">
                        <div className="w-full  h-12 bg-gray-300 animate-pulse rounded-lg"></div>
                    </div>
                </div>
            </div>
        </>
    )
}