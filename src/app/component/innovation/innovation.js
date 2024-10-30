"use client"
import Image from "next/image"
import Button from "@mui/material/Button"
import { useRouter } from "next/navigation";
import Capture2 from "/public/Capture 2.webp"

const Innovation = () => {
    const router = useRouter();
    return (
        <div className="relative flex flex-col w-full px-[20px] sm:px-[30px] md:px-[30px] 2xl:px-[145px] items-center mb-[30px] md:mb-[73px] h-[667px] md:h-auto " id="innovation">
            <Image
                src="/Header.webp"
                alt="background"
                className="w-full h-full -z-10 absolute"
                fill
                priority
            />
            <div className="max-md:top-1/2 max-md:translate-y-[20%] flex flex-col items-center max-md:gap-5">
                <div className="mt-[50px] sm:mt-[70px] md:mt-[90px] xl:mt-[186px] text-[#FF8A00] text-[14px] sm:text-[16px] md:text-[18px]">- INNOVATION WITH AI -</div>
                <div className="mt-[40px] md:mt-[30px] text-white text-[32px] sm:text-[40px] md:text-[48px] font-bold max-w-[800px] text-center">WHERE YOUR WORDS MEET AI EXCELLECE</div>
                <div className="flex mt-[31px] gap-[16px] md:gap-[32px] xl:gap-[42px]  mb-[30px] md:mb-0">
                    <Button variant="contained" sx={{
                        borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white",
                        width: {
                            xs: "130px",
                            sm: "160px",
                            md: "200px",
                            xl: "240px",
                            "2xl": "280px"
                        }, height: {
                            xs: "40px",
                            sm: "44px",
                            md: "54px",
                        },
                        fontSize: {
                            xs: "10px",  // Extra small screens
                            sm: "12px",  // Small screens
                            md: "16px",  // Medium screens
                            xl: "18px",  // Extra large screens
                        },
                    }} onClick={() => {
                        router.push("/sign-up");
                    }}>Sign Up</Button>
                    <Button variant="contained" sx={{
                        borderRadius: "100px", backgroundColor: "#0D6EFD", color: "white",
                        width: {
                            xs: "130px",
                            sm: "160px",
                            md: "200px",
                            xl: "240px",
                            "2xl": "280px"

                        }, height: {
                            xs: "40px",
                            sm: "44px",
                            md: "54px",
                        },
                        fontSize: {
                            xs: "10px",  // Extra small screens
                            sm: "12px",  // Small screens
                            md: "16px",  // Medium screens
                            xl: "18px",  // Extra large screens
                        },
                    }} onClick={() => router.push("/sign-in")}>start for free</Button>
                </div>
            </div>
            <div className="mt-[74px] hidden md:block">
                <Image
                    src={Capture2}
                    alt="capture"
                    style={{
                        objectFit: 'cover',
                        zIndex: 1,
                        widows: "1148px",
                        height: "auto"
                    }}
                />
            </div>
        </div >

    )
}
export default Innovation