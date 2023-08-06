import icon from "../../public/icons/oval-loading.svg"
const logo = require("../../public/icons/oval-loading.svg");

export default function loader(){
    return(
        <>
            <div className="flex w-full h-[92vh]">
                <div className="self-center mx-auto">
                    <div className="loading">
                        <svg className="loading-text top-[-40px] w-[36px] h-[36px] text-white z-20" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                            <g fill="none" fillRule="evenodd">
                                <g transform="translate(1 1)" strokeWidth="2">
                                    <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
                                    <path d="M36 18c0-9.94-8.06-18-18-18">
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            from="0 18 18"
                                            to="360 18 18"
                                            dur="1s"
                                            repeatCount="indefinite"/>
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <div className="loading-text top-[60px] w-full h-[100px] top-0">
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