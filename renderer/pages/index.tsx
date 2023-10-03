import { useEffect, useRef, useState } from "react";
import TitleBar from "../components/TitleBar";
import Link from "next/link";
import ResultadoAnalise from "../components/analise_page/ResultadoAnalise";

export default function AnalisePage() {
    const [stream, setStream] = useState(null);
    const videoRef = useRef(null);
    const cameraSelectRef = useRef(null);
    const [frameCapturado, setFrameCapturado] = useState(false);
    const [imageObject, setImageObject] = useState(null);
    const [mostrarResultados, setMostrarResultados] = useState(false);
    const [captureBTN, setCaptureBTN] = useState(true);
    const [cameraIsActive, setCameraIsActive] = useState(false);

    useEffect(() => {
        // Função para obter a lista de dispositivos de vídeo
        const getVideoDevices = async () => {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter(device => device.kind === 'videoinput');
            videoDevices.forEach(device => {
                const option = document.createElement('option');
                option.value = device.deviceId;
                option.text = device.label || `Câmera ${cameraSelectRef.current.options.length + 1}`;
                cameraSelectRef.current.appendChild(option);
            });
        };

        getVideoDevices();
    }, []);

    const handleCameraChange = async () => {
        setCameraIsActive(true)
        const selectedDeviceId = cameraSelectRef.current.value;
        if (selectedDeviceId) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: selectedDeviceId } });
                setStream(stream);
                videoRef.current.srcObject = stream;
                setCaptureBTN(false)
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        }
    };

    const handleCameraSelectChange = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        setCaptureBTN(true);
        setCameraIsActive(false)
        videoRef.current.srcObject = null;
    };
    

    const handleCaptureFrame = () => {

        const canvas = document.createElement('canvas');
        
        const video = videoRef.current;
        const context = canvas.getContext('2d');
        

        if (video && context) {

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            
            context.drawImage(video, 0, 0, canvas.width, canvas.height );
            setFrameCapturado(true);
            setImageObject(canvas.toDataURL('image/jpeg'))           
        }
    };

    const ComponentInfos = {
        "ID": 0,
        "img": imageObject,
        "coliform": 0,
        "eColi": 0,
    }

    const fecharResultados = () =>{
        setFrameCapturado(false);
        setMostrarResultados(false)
        handleCameraChange()

    }

    return (
        <>
            {mostrarResultados ? <><ResultadoAnalise infos={ComponentInfos} fecharResultados={fecharResultados} /></> : <></>}
           
            <section className="flex w-screen h-screen bg-slate-800 text-white justify-between">
                <div className="w-[77%] h-screen rounded-lg top-[-1.9rem]">
                    <div className="w-full bg-black h-full flex justify-center items-center rounded-lg">
                        {cameraIsActive ? 
                            <>
                            {frameCapturado ? 
                                <img src={imageObject}
                                    className="w-full h-full object-cover"
                                />
                                :       
                                <video
                                    className="w-full h-full object-cover"
                                    ref={videoRef} 
                                    autoPlay 
                                >   
                                </video>
                            }
                            </>
                            :
                            <>
                                <h1 className="text-4xl">Câmera não selecionada ou ausente!</h1>
                            </>
                        }
                    </div>
                </div>
                <div className="w-[23%] h-screen">
                    <div className="p-2.5">
                        <div>
                            <div className="flex gap-2 mt-1.5">
                                <select 
                                    ref={cameraSelectRef}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-slate-800  focus:outline-slate-800 block w-full p-2.5 " 
                                    onChange={(e) => {e.target.value === "Selecione a Câmera" ? handleCameraSelectChange():handleCameraChange()}}
                                >
                                    <option>Selecione a Câmera</option>
                                </select>
                            </div>
                            <div className="flex flex-col mt-4 text-white font-bold gap-4">
                                {frameCapturado ? 
                                    <>
                                        <button 
                                            className="block w-full text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 text-center h-12"
                                            onClick={() => {setFrameCapturado(false); handleCameraChange()}}
                                        >
                                            Descartar Amostra
                                        </button>
                                        <button 
                                            className="block w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3 text-center h-12"
                                            onClick={()=> {handleCaptureFrame; setMostrarResultados(true)}}
                                        >
                                            Analisar Amostra
                                        </button>
                                    </>: 
                                    <>
                                        <button 
                                            className="block w-full text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-3 text-center h-12"
                                            onClick={handleCaptureFrame}
                                            disabled={captureBTN}
                                        >
                                            Capturar Amostra
                                        </button>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
