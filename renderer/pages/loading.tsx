export default function page(){
    return(
        <>
            <div className="w-full h-[92vh] flex">
                <div className="self-center mx-auto">
                    <div className="loading">
                        <img loading="lazy" className="loading-text top-[-40px] w-[36px] h-[36px] text-white z-20" src="../../public/icons/oval-loading.svg"/>
                        <div className="loading-text top-[60px]">
                        <span className="loading-text-words">C</span>
                        <span className="loading-text-words">A</span>
                        <span className="loading-text-words">R</span>
                        <span className="loading-text-words">R</span>
                        <span className="loading-text-words">E</span>
                        <span className="loading-text-words">G</span>
                        <span className="loading-text-words">A</span>
                        <span className="loading-text-words">N</span>
                        <span className="loading-text-words">D</span>
                        <span className="loading-text-words">O</span>
                        <span className="loading-text-words">.</span>
                        <span className="loading-text-words">.</span>
                        <span className="loading-text-words">.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}