"use client"
import Button from "@mui/material/Button"
import { useRouter } from "next/navigation"

const PriceCard = ({ user }) => {
    const router = useRouter();
    return (
        <div className="w-full mt-12 xl:mt-[41px] mb-[50px] 2xl:px-[145px] md:px-[30px] sm:px-[10px] px-[3px]" id="pricing">
            <div className=" flex flex-col items-center ">
                <div className="text-[#FF8A00] text-[12px] sm:text-[14px] md:text-[18px]">- OUR PLAN -</div>
                <div className="mt-[10px] max-w-[720px] text-black text-[28px] sm:text-[36px] md:text-[48px] font-bold text-center">Upgrade to Get More Advanced
                    Document Checker Options</div>
                <div className="mt-[30px] sm:mt-[40px] md:mt-[50px] xl:mt-[123px] w-full px-[54px] flex flex-col md:flex-row xl:justify-center justify-around gap-4 xl:gap-0">
                    <div className="my-[43px] border-[5px] border-blue-300 border-solid w-2/3 xl:block hidden">
                        <div className="flex ml-[54px]">
                            <div className="flex-1">
                                <div className="flex h-[128px]"></div>
                                <div className="flex items-center justify-center h-[128px] bg-[#0D6EFD] bg-opacity-10 text-[22px] rounded-l-[16px]">Supported file format</div>
                                <div className="flex items-center justify-center h-[128px] text-[22px] rounded-l-[16px]">File Size</div>
                                <div className="flex items-center justify-center h-[128px] bg-[#0D6EFD] bg-opacity-10 text-[22px] rounded-l-[16px]">Pricing</div>
                                <div className="flex items-center justify-center h-[128px] text-[22px] rounded-l-[16px]">Premium technical assistant</div>
                                <div className="h-[92px]"></div>
                            </div>
                            <div className="flex-1">
                                <div className="flex h-[128px] items-center justify-center text-[32px] font-semibold">Free Plan</div>
                                <div className="flex items-center justify-center h-[128px] bg-[#0D6EFD] bg-opacity-10 text-[22px]">Doc, Docx, PDF, TXT</div>
                                <div className="flex items-center justify-center h-[128px] text-[22px] rounded-l-[16px]">Less than 5MB</div>
                                <div className="flex items-center justify-center h-[128px] bg-[#0D6EFD] bg-opacity-10 text-[22px]">1 Free file per day</div>
                                <div className="flex items-center justify-center h-[128px] text-[22px] rounded-l-[16px]">No</div>
                                <div className="h-[92px]"></div>
                            </div>
                        </div>
                    </div><div className="w-full md:w-1/2 xl:hidden block">
                        <div className="flex h-[140px] xl:h-[171px] items-center justify-center text-[32px] bg-[#0D6EFD] rounded-t-[16px] text-white"><p>Free Plan</p></div>
                        <div className="flex items-center justify-center h-[80px] xl:h-[128px] bg-[#0D6EFD] bg-opacity-70 text-[22px] text-white">Doc, Docx, PDF, TXT</div>
                        <div className="flex items-center justify-center h-[80px] xl:h-[128px] text-[22px]  bg-[#0D6EFD] text-white">Less than 5MB</div>
                        <div className="flex items-center justify-center h-[80px] xl:h-[128px] bg-[#0D6EFD] bg-opacity-70 text-[22px] text-white">1 Free file per day</div>
                        <div className="flex items-center justify-center h-[80px] xl:h-[128px] text-[22px]  bg-[#0D6EFD] text-white">No</div>
                        <div className="flex items-center justify-center rounded-b-[16px] bg-[#0D6EFD] h-[120px] xl:h-[171px] text-white"></div>
                    </div>
                    <div className="sm:w-full xl:w-1/3 md:w-1/2">
                        <div className="flex h-[140px] xl:h-[171px] items-center justify-center text-[32px] bg-[#0D6EFD] rounded-t-[16px] text-white"><p>Premium<br />$<span className="text-[48px] font-bold">1.2</span>/credit</p></div>
                        <div className="flex items-center justify-center  h-[80px] xl:h-[128px] bg-[#0D6EFD] bg-opacity-70 text-[22px] text-white">Doc, Docx, PDF, TXT</div>
                        <div className="flex items-center justify-center  h-[80px] xl:h-[128px] text-[22px]  bg-[#0D6EFD] text-white">Unlimited</div>
                        <div className="flex items-center justify-center  h-[80px] xl:h-[128px] bg-[#0D6EFD] bg-opacity-70 text-[22px] text-white">1 Credit per file</div>
                        <div className="flex items-center justify-center  h-[80px] xl:h-[128px] text-[22px]  bg-[#0D6EFD] text-white">Yes</div>
                        <div className="flex items-center justify-center rounded-b-[16px] bg-[#0D6EFD] h-[120px] xl:h-[171px] text-white">
                            <Button variant="contained" sx={{
                                borderRadius: "100px", backgroundColor: "white", color: "black",
                                width: {
                                    xs: "150px",
                                    sm: "180px",
                                    md: "220px",
                                    lg: "240px"
                                }, height: {
                                    xs: "44px",
                                    sm: "48px",
                                    md: "54px",
                                    lg: "60px"
                                },
                                fontSize: {
                                    xs: "14px",
                                    sm: "16px",  // Small screens
                                    md: "18px",  // Medium screens
                                    lg: "20px"
                                },
                            }} onClick={() => router.push("/payment/pay")} disabled={!user ? true : false}>Buy Credits</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default PriceCard