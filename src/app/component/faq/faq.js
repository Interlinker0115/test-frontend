const Faq = () => {
    return (
        <div className="w-full mb-[62px] 2xl:px-[145px] xl:px-[120px] lg:px-[80px] md:px-[40px] sm:px-[10px]">
            <section className="container bg-[#0D6EFD] bg-opacity-5 2xl:px-[117px] rounded-[14px]">
                <div className="w-full container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-[#FF8A00] text-[12px] sm:text-[14px] md:text-[18px] tracking-wider text-center uppercase">{'- faq -'}</p>
                    <h2 className="mb-12 font-bold leading-none text-center text-[28px] sm:text-[36px] md:text-[48px]">{'Frequently Asked Questions'}</h2>
                    <div className="flex flex-col gap-4">
                        <details className="bg-white rounded-[18px] border-[#0D6EFD] border-[3px] border-opacity-30 py-[24px] sm:py-[34px] md:py-[42px] px-[24px] sm:px-[32px] md:px-[38px]">
                            <summary className="outline-none hover:cursor-pointer text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#0D6EFD] ">{'What is docuclever, and how does it work?'}</summary>
                            <div className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#0D6EFD] mt-[10px]">
                                <p>{'docuclever.ai is an automated document review tool that helps users identify and correct errors in their documents. When a customer uploads a document, the tool scans it for grammatical mistakes and outdated legal terms. Any detected issues are highlighted with a red color in the frontend interface, allowing users to easily spot and edit them according to their preferences. This process streamlines document reviews, saving time and improving accuracy.'}</p>
                            </div>
                        </details>
                        <details className="bg-white rounded-[18px] border-[#0D6EFD] border-[3px] border-opacity-30 py-[24px] sm:py-[34px] md:py-[42px] px-[24px] sm:px-[32px] md:px-[38px]">
                            <summary className="outline-none hover:cursor-pointer text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#0D6EFD]">{'What types of errors can docuclver detect?'}</summary>
                            <div className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#0D6EFD] mt-[10px]">
                                <p>{'docuclever is designed to detect various types of errors, including grammatical mistakes (such as spelling, punctuation, and syntax errors) and outdated or incorrect legal terminology. By identifying these issues, the tool helps ensure that documents are polished, professional, and compliant with current standards.'}</p>
                            </div>
                        </details>
                        <details className="bg-white rounded-[18px] border-[#0D6EFD] border-[3px] border-opacity-30 py-[24px] sm:py-[34px] md:py-[42px] px-[24px] sm:px-[32px] md:px-[38px]">
                            <summary className="outline-none hover:cursor-pointer text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#0D6EFD]">{'Can I edit the document directly on the platform after errors are detected?'}</summary>
                            <div className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#0D6EFD] mt-[10px]">
                                <p>{'Yes, once the document is processed and errors are highlighted with a red color, you can edit the document directly on the platform. The interface allows you to click on each highlighted section and make changes based on your specific needs, making the correction process quick and efficient.'}</p>
                            </div>
                        </details>
                        <details className="bg-white rounded-[18px] border-[#0D6EFD] border-[3px] border-opacity-30 py-[24px] sm:py-[34px] md:py-[42px] px-[24px] sm:px-[32px] md:px-[38px]">
                            <summary className="outline-none hover:cursor-pointer text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#0D6EFD]">{'Is docuclever suitable for legal professionals and businesses?'}</summary>
                            <div className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#0D6EFD] mt-[10px]">
                                <p>{'Absolutely! docuclever.ai is particularly useful for legal professionals, businesses, and anyone needing to ensure their documents are accurate and up-to-date. By identifying outdated legal terms and common grammatical errors, it helps improve document quality, enhancing clarity and professionalism in all forms of communication.'}</p>
                            </div>
                        </details>
                        <details className="bg-white rounded-[18px] border-[#0D6EFD] border-[3px] border-opacity-30 py-[24px] sm:py-[34px] md:py-[42px] px-[24px] sm:px-[32px] md:px-[38px]">
                            <summary className="outline-none hover:cursor-pointer text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#0D6EFD]">{'How secure is my document when using docuclever?'}</summary>
                            <div className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#0D6EFD] mt-[10px]">
                                <p>{"Your document's security and privacy are a top priority. docuclever uses advanced encryption protocols to keep your data safe throughout the upload, processing, and editing stages. We do not store any document contents permanently, ensuring your sensitive information remains confidential and secure."}</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Faq