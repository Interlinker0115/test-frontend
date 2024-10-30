"use client"
import { useRouter } from "next/navigation"
const Footer = () => {
    const router = useRouter();
    return (
        <div className=" w-full flex justify-between bg-[#0D6EFD] px-[20px] md:px-[30px] lg:px-[45px] xl:px-[55px] min-h-[88px] items-center py-[10px] lg:py-0" id="contact">
            <div className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] font-medium text-white hidden lg:block">© Hispid Consulting LLC, 2024. Created by DocuClever Team</div>
            <div className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] font-bold text-white hover:cursor-pointer" onClick={() => router.push("/reference/contact")}>Contact</div>
            <div className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] font-bold text-white hover:cursor-pointer" onClick={() => router.push("/reference/terms")}>Terms of Service</div>
            <div className="text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] font-bold text-white hover:cursor-pointer" onClick={() => router.push("/reference/policy")}>Privacy Policy</div>
        </div>
    )
}
export default Footer