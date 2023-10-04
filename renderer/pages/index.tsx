import { useEffect, useRef, useState } from "react";
import ResultadoAnalise from "../components/analise_page/ResultadoAnalise";

export default function AnalisePage() {
    const [stream, setStream] = useState(null);
    const videoRef = useRef(null);
    const cameraSelectRef = useRef(null);

    const [frameCapturado, setFrameCapturado] = useState(false);
    const [imageObject, setImageObject] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [componentInfos, setComponentInfos] = useState(null);

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

    //Função para ativar a câmera selecionada
    const handleCameraChange = async () => {
        setCameraIsActive(true);
        const selectedDeviceId = cameraSelectRef.current.value;
        if (selectedDeviceId) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: selectedDeviceId } });
                setStream(stream);
                videoRef.current.srcObject = stream;
                setCaptureBTN(false);
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        }
    };

    //função para limpar o vídeo quando não houver câmera selecionada
    const handleCameraSelectChange = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        setCaptureBTN(true);
        setCameraIsActive(false);
        videoRef.current.srcObject = null;
    };

    //função para tirar um print de um frame do vídeo
    const handleCaptureFrame = () => {
        const canvas = document.createElement('canvas');
        const video = videoRef.current;
        const context = canvas.getContext('2d');

        if (video && context) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            
            context.drawImage(video, 0, 0, canvas.width, canvas.height );
            setFrameCapturado(true);
            setImageObject(canvas.toDataURL('image/jpeg')); 
            canvas.toBlob((blob) => {
                const file = new File([blob], 'captured_frame.jpg', { type: 'image/jpeg' });
                setImageFile(file);
            }, 'image/jpeg');          
        }
    };


    const requisitarAnalise = async () => {
        const formData = new FormData();
        formData.append('image', imageFile);
        const headers = new Headers();
        headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo4MDAzNTg4MTkzLCJpYXQiOjE2OTYzODgxOTMsImp0aSI6Ijk1MThiMzgyMDc0NTQ3NTM5YmM2ZTA4ZDg5YWU1MWU1IiwidXNlcl9pZCI6MX0.LkjLJ4FUWD-bHJT8XXVYYyQ62SSHoRrM6gAAcVhIfIA');

        const response = await fetch('http://52.67.214.138:8000/api/predict', {method: 'POST', body: formData, headers: headers,});

        if(!response.ok){
            throw new Error('Failed to fetch data')
        }

        const data = await response.json()

        setComponentInfos(data)
        setMostrarResultados(true)
    }

    //Função para fechar o componente e voltar para o vídeo
    const fecharResultados = () =>{
        setFrameCapturado(false);
        setMostrarResultados(false);
        handleCameraChange();

    }

    return (
        <>
            {mostrarResultados ? <><ResultadoAnalise infos={componentInfos} fecharResultados={fecharResultados} /></> : <></>}
           
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
                                    disabled={frameCapturado ? true:false}
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
                                            onClick={requisitarAnalise}
                                        >
                                            Analisar Amostra
                                        </button>
                                    </>: 
                                    <>
                                        <button 
                                            className={captureBTN ? "block w-full text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-3 text-center h-12": "block w-full text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-3 text-center h-12"}
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
