"use client"
import Button from "@mui/material/Button"
import { useEffect, useState } from "react"
import "./header.css"
import { useRouter } from "next/navigation"
import { useAuth, UserButton } from '@clerk/nextjs'
import Image from "next/image"
const Header = () => {
    const router = useRouter();
    const [show, setShow] = useState(false)
    const [animation, setAnimation] = useState(true)
    const { isSignedIn } = useAuth();

    useEffect(() => {
        window.scrollTo(0, 0);
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
        <div className="top-0 w-full  ">
            <div className="flex relative bg-black items-center justify-between h-[80px] xl:px-[145px] lg:px-[50px] md:px-[40px] sm:px-[30px] px-[10px]">
                <a className="flex w-[200px] h-[80px] items-center justify-center" href="/#innovation">
                    <Image
                        src={"/doculogo.webp"}
                        width={200}
                        height={80}
                        alt="logo"
                    />
                </a>
                <div className="hidden lg:block">
                    <div className="flex gap-16">
                        <a href="/#innovation" className="text-white font-bold text-[18px] hover:text-[#0D6EFD] hover: cursor-pointer">Home</a>
                        <a href="/#future" className="text-white font-bold text-[18px] hover:text-[#0D6EFD] hover:cursor-pointer">Features</a>
                        <a href="/#step" className="text-white font-bold text-[18px] hover:text-[#0D6EFD] hover:cursor-pointer">How to use</a>
                        <a href="/#pricing" className="text-white font-bold text-[18px] hover:text-[#0D6EFD] hover:cursor-pointer">Pricing</a>
                    </div>
                </div>
                <div className="hidden lg:block">
                    {!isSignedIn ? (
                        <Button
                            variant="contained"
                            sx={{ borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white", width: "154px", height: "54px" }}
                            onClick={() => router.push("/sign-in")}
                        >
                            Sign In
                        </Button>
                    ) : (
                        <div className="flex justify-center items-center">
                            <UserButton
                                afterSignUpUrl="/sign-in"
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: {
                                            width: '45px',
                                            height: '45px',
                                        },
                                    }
                                }}
                            />
                        </div>
                    )}



                    {/* <Button variant="contained" sx={{ borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white", width: "154px", height: "54px" }} onClick={() => router.push("/signin")}>Sign In</Button>
                </div>
                <div className="rounded-full flex justify-center items-center">
                    <UserButton
                        afterSignUpUrl="/sign-in"
                        appearance={{
                            elements: {
                                userButtonAvatarBox: {
                                    width: '60px', // Makes it scale with parent div
                                    height: '60px', // Makes it scale with parent div
                                },
                            }
                        }}
                    /> */}
                </div>
                <div className="block lg:hidden text-white text-[30px] font-bold" onClick={() => setShow(!show)}>
                    {show ? "X" : "☰"}
                </div>

                {show && (
                    <>
                        <div id="modal" className="w-full h-full top-0 left-0 fixed z-10 bg-[#0000008e]">
                        </div>
                        <div className={`absolute top-[80px] ${animation ? "h-[400px]" : "h-0"} duration-500 overflow-hidden left-0 flex flex-col w-full px-4 gap-y-5  bg-white bg-opacity-10 backdrop-blur-xl text-white font-bold text-[20px] z-20`}>
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
                                onClick={() => router.push("/sign-in")}
                            >
                                Sign In
                            </div>
                            <div
                                className="hover:cursor-pointer"
                                onClick={() => router.push("/sign-up")}
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
export default Header