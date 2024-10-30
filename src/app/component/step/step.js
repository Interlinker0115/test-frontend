import Image from "next/image";
import Button from "@mui/material/Button"




const Step = () => {
    return (
        <div className="container w-full mt-8 xl:mt-[41px] mb-[30px] md:mb-[50px] xl:mb-[108px] 2xl:px-[145px]" id="step">
            <div className="flex flex-col items-center">
                <div className="text-[#FF8A00] text-[12px] sm:text-[14px] md:text-[18px]">- HOW TO USE -</div>
                <div className="mt-[10px] text-black text-[28px] sm:text-[36px] md:text-[48px] font-bold text-center">3 Steps To Repair Corrupted Files</div>
            </div>
            <div className="mt-[30px] md:mt-[50px] xl:mt-[97px] grid xl:grid-cols-3 lg:grid-cols-2 gap-10">
                <div className="flex flex-col items-center w-full text-center">
                    <Image
                        src="/s-1.webp"
                        alt="background"
                        width={380}
                        height={256}
                        style={{
                            objectFit: 'cover',
                            zIndex: -1,
                        }}
                    />
                    <div className="mt-[10px] text-[24px] font-bold text-black">upload Your Document</div>
                    <div className="block xl:hidden mt-[20px]">
                        <div className="rounded-full bg-[#0D6EFD] text-white font-bold w-[150px] sm:w-[180px] md:w-[220px] h-[44px] sm:h-[48px] md:h-[54px] text-[16px] sm:text-[18px] md:text-[20px] flex justify-center items-center z-20">step1</div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full text-center">
                    <Image
                        src="/s-2.webp"
                        alt="background"
                        width={380}
                        height={256}
                        style={{
                            objectFit: 'cover',
                            zIndex: -1,
                        }}
                    />
                    <div className="mt-[10px] text-[24px] font-bold text-black">Automatic Scan</div>
                    <div className="block xl:hidden mt-[20px]">
                        <div className="rounded-full bg-[#0D6EFD] text-white font-bold w-[150px] sm:w-[180px] md:w-[220px] h-[44px] sm:h-[48px] md:h-[54px] text-[16px] sm:text-[18px] md:text-[20px] flex justify-center items-center z-20">step2</div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full text-center">
                    <Image
                        src="/s-3.webp"
                        alt="background"
                        width={380}
                        height={256}
                        style={{
                            objectFit: 'cover',
                            zIndex: -1,
                        }}
                    />
                    <div className="mt-[10px] text-[24px] font-bold text-black">Check and Save</div>
                    <div className="block xl:hidden mt-[20px]">
                        <div className="rounded-full bg-[#0D6EFD] text-white font-bold w-[150px] sm:w-[180px] md:w-[220px] h-[44px] sm:h-[48px] md:h-[54px] text-[16px] sm:text-[18px] md:text-[20px] flex justify-center items-center z-20">step3</div>
                    </div>
                </div>
            </div>
            <div className="xl:block hidden">
                <div className="mt-[23px] h-[124px] w-full rounded-[100px] xl:border-[#0D6EFD] border-white border flex justify-around items-center">
                    <div className="absolute xl:block hidden">
                        <Image
                            src="/l-1.webp"
                            alt="background"
                            width={850}
                            height={230}
                            className="w-[850px]"
                        />
                    </div>
                    <div className="rounded-full bg-[#0D6EFD] text-white font-bold w-[150px] sm:w-[180px] md:w-[220px] h-[44px] sm:h-[48px] md:h-[54px] text-[16px] sm:text-[18px] md:text-[20px] flex justify-center items-center z-20">step1</div>
                    <div className="rounded-full bg-[#0D6EFD] text-white font-bold w-[150px] sm:w-[180px] md:w-[220px] h-[44px] sm:h-[48px] md:h-[54px] text-[16px] sm:text-[18px] md:text-[20px] flex justify-center items-center z-20">step2</div>
                    <div className="rounded-full bg-[#0D6EFD] text-white font-bold w-[150px] sm:w-[180px] md:w-[220px] h-[44px] sm:h-[48px] md:h-[54px] text-[16px] sm:text-[18px] md:text-[20px] flex justify-center items-center z-20">step3</div>
                </div>
            </div>
        </div>
    )
}
export default Step


