"use client"
import React, { useRef, useState, useEffect } from "react";
import Card from "./card"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";




const Testmonial = () => {
    const carousel = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    // const carouselWidth = 1000
    const [carouselWidth, setCarouselWidth] = useState("1200px");
    const width = window.innerWidth

    useEffect(() => {
        const handleResize = () => {
            if (width <= 600) {
                const wth = width - 24;
                setCarouselWidth(wth.toString() + "px");
            } else if (width <= 768) {
                setCarouselWidth("510px");
            } else if (width <= 900) {
                setCarouselWidth("680px");
            } else if (width <= 1150) {
                setCarouselWidth("780px");
            } else if (width <= 1440) {
                setCarouselWidth("1000px");
            } else {
                setCarouselWidth("1200px");
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);


    const handleChange = (curIndex) => {
        setCurrentIndex(curIndex);
    };

    const handleIndicatorClick = (targetIndex) => {
        if (carousel) {
            carousel.current?.moveTo(targetIndex);
        }
    };
    const data = [
        {
            avatar: "avatar/1.webp",
            author: "dacey-nolan",
            title: "Transforming Our Trading",
            content: "I recently started using the Copy Trading Python Package, and it has completely transformed my trading experience. The real-time synchronization feature allows me to mirror successful trades effortlessly, significantly boosting my confidence as a trader. The setup process was straightforward, and the documentation provided clear guidance every step of the way. I particularly appreciate the ability to customize my copy ratios,"
        },
        {
            avatar: "avatar/2.webp",
            author: "davidhellmann",
            title: "Transforming",
            content: "I recently started using the Copy Trading Python Package, and it has completely transformed my trading experience. The real-time synchronization feature allows me to mirror successful trades effortlessly, significantly boosting my confidence as a trader. The setup process was straightforward, and the documentation provided clear guidance every step of the way. I particularly appreciate the ability to customize my copy ratios,"
        },
        {
            avatar: "avatar/3.webp",
            author: "Hardy",
            title: "Transforming",
            content: "I recently started using the Copy Trading Python Package, and it has completely transformed my trading experience. The real-time synchronization feature allows me to mirror successful trades effortlessly, significantly boosting my confidence as a trader. The setup process was straightforward, and the documentation provided clear guidance every step of the way. I particularly appreciate the ability to customize my copy ratios,"
        },
        {
            avatar: "avatar/4.webp",
            author: "Anny",
            title: "Transforming",
            content: "I recently started using the Copy Trading Python Package, and it has completely transformed my trading experience. The real-time synchronization feature allows me to mirror successful trades effortlessly, significantly boosting my confidence as a trader. The setup process was straightforward, and the documentation provided clear guidance every step of the way. I particularly appreciate the ability to customize my copy ratios,"
        },

    ];



    return (
        <>
            <div className="container w-full mt-8 xl:mt-[41px] mb-[30px] md:mb-[50px] xl:mb-[108px] 2xl:px-[145px]">
                <div className="flex flex-col items-center">
                    <div className="text-[#FF8A00] text-[12px] sm:text-[14px] md:text-[18px]">- TESTIMONIALS -</div>
                    <div className="mt-[10px] text-black text-[28px] sm:text-[36px] md:text-[48px] font-bold text-center">What Our Clients Say About Us</div>
                </div>
                <div className="flex justify-center mt-[10px]">
                    <Carousel
                        axis="horizontal"
                        width={carouselWidth}
                        interval={3000}
                        autoPlay={true}
                        infiniteLoop={true}
                        showStatus={false}
                        showArrows={true}
                        ref={carousel}
                        showIndicators={false}
                        showThumbs={false}
                        onChange={handleChange}
                    >
                        {data.map((item, index) => {
                            return (
                                <Card
                                    key={index}
                                    title={item.title}
                                    content={item.content}
                                    author={item.author}
                                    avatar={item.avatar}
                                    carouselWidth={carouselWidth}
                                />
                            );
                        })
                        }
                    </Carousel>
                </div>
                <div className="mt-10 flex w-full justify-center">
                    <div className="flex gap-3 flex-row justify-center items-center">
                        {[0, 1, 2, 3].map((item) => {
                            return (
                                <div
                                    key={item}
                                    className={`h-[14px] w-[14px] cursor-pointer rounded-full ${currentIndex === item ? "bg-[#40ff00]" : "bg-[#0D6EFD]"
                                        }`}
                                    onClick={() => handleIndicatorClick(item)}
                                ></div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Testmonial