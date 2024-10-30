"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Loader from "../loader/Loader"
import { useAtom } from "jotai"
import { credtiAtom, EditViewAtom, logicCheckAtom } from "@/store"
import { ToastContainer, toast } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';
import { light } from "@mui/material/styles/createPalette"
import "./upload.css"

const Upload = ({ username }) => {

    const router = useRouter();
    const [filename, setFilename] = useState("")
    const [files, setFiles] = useState([]);
    const [loaderShow, setLoaderShow] = useState(false)
    const [editView, setEditView] = useAtom(EditViewAtom)
    const [, setLogicCheck] = useAtom(logicCheckAtom)
    const [credit, setCredit] = useAtom(credtiAtom)
    const [confirmShow, setConfirmShow] = useState(true)
    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFilename(file.name); // Set the file name in state
            setFiles([file]);
        }
    }

    const handleClick = () => {
        router.push("/editor")
        setEditView(true)
    }

    const handleRemoveFile = () => {
        setFilename(''); // Reset the file name
        setFiles([]); // Clear the files array
    };

    const handleConfirm = async (file) => {
        if (credit > 0) {

            setLoaderShow(true)
            if (files.length === 0) {
                setResponseMessage('No file selected.');
                return;
            }

            const formData = new FormData();
            formData.append("file", files[0]); // Append the first file to the form data
            try {
                const response = await axios.post("https://osprey-heroic-eagle.ngrok-free.app/filetohtml", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "ngrok-skip-browser-warning": "true"
                    },
                    responseType: "text"
                });
                console.log("response data =>", response.data)
                const url = response.data;
                console.log(url, "----------------url")
                localStorage.setItem("url", url)
                const type = typeof (response)
                console.log(type, "--->response type")

                const link = localStorage.getItem("url")
                console.log(link)

                const html = await axios.get(`https://osprey-heroic-eagle.ngrok-free.app/iframehtml`, {
                    params: { link },
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "ngrok-skip-browser-warning": "true"
                    },
                })
                const parser = new DOMParser();
                const doc = parser.parseFromString(html.data, 'text/html');
                console.log(doc, "-----------doc")
                const MainData = doc.body.innerText || doc.body.textContent

                console.log("html======>", MainData)
                console.log(typeof MainData, "==========htmlData")
                const length = MainData
                console.log(length, "-------ltngth")


                const analyResponse = await axios.post("https://osprey-heroic-eagle.ngrok-free.app/documentCheck ", { "content": MainData },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "ngrok-skip-browser-warning": "true"
                        }
                    });
                const analyResult = analyResponse.data;
                console.log(analyResult, "---AI result")
                setLogicCheck(analyResult)

            } catch (error) {
                console.log(error, "The error is occured")
            }
            let newCredit = credit - 1;
            const res = await axios.post("/api/update", {
                username,
                newCredit
            })
            setLoaderShow(false)
            // const res = await fetch("/api/update", {
            //     method: "POST",
            //     body: JSON.stringify({ username, newCredit })
            // })
            setCredit(credit - 1)
            setConfirmShow(!confirmShow)
        } else {
            // alert("Your credit is not enough")
            toast.error("Credit is not enough for you. Plz buy new credit using 'buy credit' button", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: light,
                style: {
                    backgroundColor: '#f44336', // Custom background color (red)
                    color: '#ffffff', // Custom text color (white)
                    borderRadius: '5px', // Optional: rounded corners
                    padding: '20px', // Optional: padding
                },
            })
        }
    };
    const customStyles = `
    .Toastify__progress-bar--error {
        background-color: #fff; /* Custom progress bar color (orange) */
    }
`;

    // Append custom styles to the document head
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);

    return (
        <>
            <div className="container flex flex-col items-center 2xl:px-[145px]">
                <div className="mt-0 sm:mt-[10px] md:mt-[20px] text-[#FF8A00] text-[12px] sm:text-[14px] md:text-[18px] xl:text-[20px] 2xl:text-[22px]">- Upload Document - </div>
                <div className="mt-[30px] sm:mt-[20px] xl:mt-[10px] text-black text-[28px] sm:text-[36px] md:text-[42px] font-bold max-w-[646px] text-center">Upload Your Document</div>
                <div className="mt-[60px] sm:mt-[50px] xl:mt-[30px] w-[80%] sm:w-[60%] md:w-[80%] lg:w-[60%] 2xl:h-[360px] xl:h-[320px] md:h-[280px] h-[240px] rounded-[32px] border-dotted border-[#0D6EFD] border-[3px] bg-[#0D6EFD] bg-opacity-10 flex flex-col items-center justify-center">
                    <div className="mt-[10px] flex items-center justify-center w-[160px] h-[160px] rounded-full bg-[#0D6EFD] bg-opacity-10">
                        <div className=" relative flex justify-center items-center w-[110px] h-[110px] rounded-full bg-[#0D6EFD] bg-opacity-30">
                            <input id="file" type="file" className=" absolute top-0 lef-0  w-full h-full hidden" onChange={handleChange} onClick={() => { localStorage.setItem('url', ""); }} />
                            <label htmlFor="file" className="absolute z-20">
                                <Image
                                    src={require("../../../../public/plus.webp")}
                                    alt="plus"
                                    className=" rounded-full w-[68px] h-[68px]"
                                /></label>
                            <label htmlFor="file" className={`absolute ${!filename && "animate-ping duration-200"}`}>
                                <Image
                                    src={require("../../../../public/plus.webp")}
                                    alt="plus"
                                    className=" rounded-full w-[68px] h-[68px]"
                                /></label>

                        </div>

                    </div>
                    <div className="mt-[10px] text-[24px] sm:text-[28px] md:text-[36px] font-bold text-center">Upload File</div>
                </div>
                <ToastContainer />
                {filename && (
                    <div className="file-name mt-[20px] flex justify-between gap-4 sm:gap-8 md:gap-14 items-center">
                        <div className="text-[18px] font-bold">Uploaded File:<span className="text-[#0D6EFD] ml-[5px]">{filename}</span> </div>
                        <button onClick={() => handleRemoveFile(files.indexOf(files.find(file => file.name === filename)))}>
                            <Image
                                src="/remove.webp"
                                width={32}
                                height={32}
                                alt="remove"
                            />
                        </button>
                        <button onClick={handleConfirm} className=" relative">
                            <Image
                                src="/confirm.webp"
                                width={30}
                                height={30}
                                alt="remove"
                                className={`${confirmShow && "animate-ping"}`}
                            />
                            <Image
                                src="/confirm.webp"
                                width={30}
                                height={30}
                                alt="remove"
                                className="absolute top-0 left-0"
                            />
                        </button>
                    </div>
                )}
                <button className="relative mt-[30px] mb-[20px] w-[180px] sm:w-[200px] md:w-[240px] h-[44px] sm:h-[48px] md:h-[54px] bg-[#0D6EFD] text-[16px] sm:text-[18px] md:text-[20px] text-white text-bold rounded-full z-10" onClick={handleClick}>Edit file<div className={`w-[180px] sm:w-[200px] md:w-[240px] h-[44px] sm:h-[48px] md:h-[54px] bg-[#0D6EFD] text-[16px] sm:text-[18px] md:text-[20px] text-white text-bold rounded-full absolute top-0 left-0 flex items-center justify-center ${!confirmShow && "custom-ping"}`}>{confirmShow && "Edit file"}</div></button>
            </div >
            {loaderShow && <Loader />
            }
        </>
    )
}
export default Upload