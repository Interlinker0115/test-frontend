"use client"
import Button from "@mui/material/Button"
import { useEffect, useState } from "react"
import Image from "next/image"
// import "./header.css"
import { useRouter } from "next/navigation"
import { useAtom } from "jotai"
import { credtiAtom } from "@/store"
import axios from "axios"
const SubHeader = ({ username }) => {
    const [show, setShow] = useState(false)
    const [animation, setAnimation] = useState(true)
    const [credit, setCredit] = useAtom(credtiAtom)
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/control?username=${username}`, { method: "GET" }
                )
                const data = await res.json();
                const creditValue = data.credit;
                setCredit(creditValue)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);
    window.onclick = function (e) {
        const id = document.getElementById("modal")
        if (id === e.target) {
            setShow(false)
        }
    }
    useEffect(() => {
        setAnimation(!animation)
    }, [show])
    return (
        <div className="top-0 w-full">
            <div className="flex relative bg-black items-center justify-between h-[80px] xl:px-[145px] lg:px-[50px] md:px-[40px] sm:px-[30px] px-[10px]">
                <a className="flex w-[200px] h-[80px] items-center justify-center" href="/#innovation">
                    <Image
                        src={"/doculogo.webp"}
                        width={200}
                        height={80}
                        alt="logo"
                    />
                </a>
                <div className="flex justify-center items-center gap-4">
                    {/* <div className="hidden lg:block">
                        <Button variant="contained" sx={{ borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white", width: "154px", height: "54px", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}><span className="text-[16px]">credit:</span><span className="text-[24px]">2</span></Button>
                    </div> */}
                    <button className="flex justify-center items-center gap-5 bg-[#59b40d] rounded-[100px] w-[154px] h-[54px]"><span className="text-[20px] text-white">credit:</span><span className="text-[28px] text-white font-bold">{credit}</span></button>
                    <div className="hidden lg:block">
                        <Button variant="contained" sx={{ borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white", width: "154px", height: "54px" }} onClick={() => router.push("/payment/pay")}>buy credit</Button>
                    </div>
                </div>
                <div className="block lg:hidden text-white text-[30px] font-bold" onClick={() => setShow(!show)}>
                    {show ? "X" : "☰"}
                </div>

                {show && (
                    <>
                        <div id="modal" className="w-full h-full top-0 left-0 fixed z-10 bg-[#0000008e]">
                        </div>
                        <div className={`absolute top-[80px] ${animation ? "h-[400px]" : "h-0"} duration-500 overflow-hidden left-0 flex flex-col w-full px-4 gap-y-5  bg-[#0D6EFD]  text-white font-bold text-[20px] z-20`}>
                            <a href="/#innovation" className="text-white mt-10" onClick={() => setShow(false)}>
                                Home
                            </a>
                            <a href="/#future" className="text-white" onClick={() => setShow(false)}>
                                Features
                            </a>
                            <a href="/#step" className="text-white" onClick={() => setShow(false)}>
                                How to use
                            </a>
                            <a href="/#pricing" className="text-white" onClick={() => setShow(false)}>
                                Pricing
                            </a>
                            <a href="/#contact" className="text-white" onClick={() => setShow(false)}>
                                Contact
                            </a>

                            <div
                                className="hover:cursor-pointer"
                                onClick={() => router.push("/login")}
                            >
                                Sign In
                            </div>
                            <div
                                className="hover:cursor-pointer"
                                onClick={() => router.push("/signup")}
                            >
                                Sing Up
                            </div>
                        </div>
                    </>
                )}

            </div>

        </div>
    )
}
export default SubHeader