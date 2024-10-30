import Image from "next/image"

const Benefit = () => {
    return (
        <div className="container w-full mb-[30px] md:mb-[50px] xl:mb-[93px] mt-8 md:mt-[51px] 2xl:px-[145px]" id="future">
            <div className=" flex  flex-col items-center">
                <div className="text-[#FF8A00] text-[12px] sm:text-[14px] md:text-[18px]">- OUR FEATURES -</div>
                <div className="mt-[10px] text-black text-[28px] sm:text-[36px] md:text-[48px] font-bold text-center">What Is Our Benefits?</div>
            </div>
            <div className="mt-8 md:mt-[62px] grid xl:grid-cols-3 lg:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
                <div className="w-[100%] h-auto flex flex-col border-black border-solid border rounded-[12px] ">
                    <div className="ml-[30px] mr-[30px] mt-[28px] mb-[20px]">
                        <Image
                            src="/1.webp"
                            alt="background"
                            width={56}
                            height={56}
                            style={{
                                objectFit: 'cover',
                                zIndex: -1,
                            }}
                        />
                        <div className="mt-[15px] text-black text-[18px] font-bold">Vocabulary Enhancement</div>
                        <div className="mt-[15px] text-[#4F4F4F] text-[14px] font-bold text-wrap">Elevate your writing with vocabulary suggestions that replace common words with more impactful alternatives. Our AI helps you diversify your language and improve your overall expression.</div>
                    </div>
                </div>
                <div className="w-[100%] h-auto flex flex-col border-black border-solid border rounded-[12px]">
                    <div className="ml-[30px] mr-[30px] mt-[28px] mb-[20px]">
                        <Image
                            src="/2.webp"
                            alt="background"
                            width={56}
                            height={56}
                            style={{
                                objectFit: 'cover',
                                zIndex: -1,
                            }}
                        />
                        <div className="mt-[15px] text-black text-[18px] font-bold">Advanced Error Analysis</div>
                        <div className="mt-[15px] text-[#4F4F4F] text-[14px] font-bold text-wrap">Gain insights into your writing habits with detailed error analysis. Our system records common mistakes and provides tailored suggestions to help you understand and improve your grammar skills over time.</div>
                    </div>
                </div>
                <div className="w-[100%] h-auto flex flex-col border-black border-solid border rounded-[12px]">
                    <div className="ml-[30px] mr-[30px] mt-[28px] mb-[20px]">
                        <Image
                            src="/3.webp"
                            alt="background"
                            width={56}
                            height={56}
                            style={{
                                objectFit: 'cover',
                                zIndex: -1,
                            }}
                        />
                        <div className="mt-[15px] text-black text-[18px] font-bold">User-Friendly Interface</div>
                        <div className="mt-[15px] text-[#4F4F4F] text-[14px] font-bold text-wrap">Navigate our intuitive interface with ease. Whether you are a seasoned writer or a beginner, our user-friendly design ensures a seamless editing experience that enhances productivity.</div>
                    </div>
                </div>
                <div className="w-[100%] h-auto flex flex-col border-black border-solid border rounded-[12px] ">
                    <div className="ml-[30px] mr-[30px] mt-[28px] mb-[20px]">
                        <Image
                            src="/4.webp"
                            alt="background"
                            width={56}
                            height={56}
                            style={{
                                objectFit: 'cover',
                                zIndex: -1,
                            }}
                        />
                        <div className="mt-[15px] text-black text-[18px] font-bold">Subscription Plans for Every Need</div>
                        <div className="mt-[2px] text-[#4F4F4F] text-[14px] font-bold text-wrap">Select from flexible subscription plans designed for your writing needs. Whether you are a casual user or a professional writer, we have a suitable plan for you, with extra features available at each level.</div>
                    </div>
                </div>
                <div className="w-[100%] h-auto flex flex-col border-black border-solid border rounded-[12px]">
                    <div className="ml-[30px] mr-[30px] mt-[28px] mb-[20px]">
                        <Image
                            src="/5.webp"
                            alt="background"
                            width={56}
                            height={56}
                            style={{
                                objectFit: 'cover',
                                zIndex: -1,
                            }}
                        />
                        <div className="mt-[15px] text-black text-[18px] font-bold">Secure and Private</div>
                        <div className="mt-[15px] text-[#4F4F4F] text-[14px] font-bold text-wrap">Your privacy is our priority. All documents are processed securely, and we ensure that your data remains confidential, giving you peace of mind while you refine your writing.</div>
                    </div>
                </div>
                <div className="w-[100%] h-auto flex flex-col border-black border-solid border rounded-[12px]">
                    <div className="ml-[30px] mr-[30px] mt-[28px] mb-[20px]">
                        <Image
                            src="/6.webp"
                            alt="background"
                            width={56}
                            height={56}
                            style={{
                                objectFit: 'cover',
                                zIndex: -1,
                            }}
                        />
                        <div className="mt-[15px] text-black text-[18px] font-bold">Contextual Suggestions</div>
                        <div className="mt-[15px] text-[#4F4F4F] text-[14px] font-bold text-wrap">Receive context-aware suggestions that enhance your writing style. Our AI understands the nuances of language, offering improvements for clarity, tone, and engagement tailored to your specific audience.</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Benefit