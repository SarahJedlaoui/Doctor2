"use client"
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fade } from "react-awesome-reveal";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface ProductType {
    imgSrc: string;
    name: string;
    description: string;
    price: string;
}
const products: ProductType[] = [
    {
        imgSrc: '/images/Cook/product2.jpg',
        name: "Product One",
        description: "A description of product one.",
        price: "$29.99",
    },
    {
        imgSrc: '/images/Cook/product1.jpg',
        name: "Product Two",
        description: "A description of product two.",
        price: "$39.99",
    },
    {
        imgSrc: '/images/Cook/product3.jpg',
        name: "Product Three",
        description: "A description of product three.",
        price: "$49.99",
    },
    {
        imgSrc: '/images/Cook/product4.jpg',
        name: "Product Four",
        description: "A description of product four.",
        price: "$59.99",
    }

]

const Work = () => {
    return (


        <div>
            <div className='-mt-20 mx-auto max-w-7xl py-40 px-6' id="about-section">
                <div className='text-center mb-14' >
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>Review the ADHD <br /> Module Draft</p>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <p className='text-black lg:text-lg font-normal mt-2 mb-2 lg:text-start text-center'>Make edits or approve the content for publishing</p>
                    </Fade>
                </div>

                {/* Content Highlights */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-[#8F6B55] mb-6">
                        Content Highlights
                    </h2>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={16}
                        slidesPerView={2.2}
                        breakpoints={{
                            640: { slidesPerView: 2.2 },
                            768: { slidesPerView: 3 },
                        }}
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="bg-[#F4F8FF] p-4 rounded-xl shadow-sm relative">
                                <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                    Introduction
                                </h3>
                                <p className="text-xs text-gray-600">
                                    What is ADHD? <br />
                                    ADHD is a neurodevelopmental disorder characterized
                                    by patterns of inattention, hyperactivity, and impulsivity. It
                                    affects both children and adults and can impact academic,
                                    professional, and personal life.
                                </p>
                                <button
                                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300"
                                    aria-label="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#F4F8FF] p-4 rounded-xl shadow-sm relative">
                                <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                    Introduction
                                </h3>
                                <p className="text-xs text-gray-600">
                                    What is ADHD? <br />
                                    ADHD is a neurodevelopmental disorder characterized
                                    by patterns of inattention, hyperactivity, and impulsivity. It
                                    affects both children and adults and can impact academic,
                                    professional, and personal life.
                                </p>
                                <button
                                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300"
                                    aria-label="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#F4F8FF] p-4 rounded-xl shadow-sm relative">
                                <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                    Introduction
                                </h3>
                                <p className="text-xs text-gray-600">
                                    What is ADHD? <br />
                                    ADHD is a neurodevelopmental disorder characterized
                                    by patterns of inattention, hyperactivity, and impulsivity. It
                                    affects both children and adults and can impact academic,
                                    professional, and personal life.
                                </p>
                                <button
                                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300"
                                    aria-label="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Trusted Sources */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-[#8F6B55] mb-6">
                        Trusted Sources
                    </h2>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={16}
                        slidesPerView={1.5}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 2 },
                        }}
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="bg-[#F4F8FF] p-4 rounded-xl shadow-sm flex items-center justify-between relative">
                                {/* Text Section */}
                                <div className="flex-1">
                                    <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                        Expert Contributors
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                        Dr. Abby <br />
                                        A globally recognized specialist in ADHD <br/> with years of clinical
                                        and research experience.
                                    </p>
                                </div>

                                {/* Image Section */}
                                <div className="w-20 h-20 -mb-12 ">
                                    <img
                                        src="/images/Banner/doctor.svg" // Update to the correct image path
                                        alt="Dr. Abby"
                                        className="w-35 h-35 object-cover"
                                    />
                                </div>

                                {/* Close Button */}
                                <button
                                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300"
                                    aria-label="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        </SwiperSlide>


                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="bg-[#F4F8FF] p-4 rounded-xl shadow-sm flex items-center justify-between relative">
                                {/* Text Section */}
                                <div className="flex-1">
                                    <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                        Additional Contributor
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                        Dr. John <br />
                                        specializes in ADHD-related research and treatment, with
                                        a focus on children and young adults.
                                    </p>
                                </div>
                                 {/* Image Section */}
                                 <div className="w-20 h-20 -mb-12 ">
                                    <img
                                        src="/images/Banner/doctor.svg"
                                        alt="Dr. Abby"
                                        className="w-35 h-35 object-cover"
                                    />
                                </div>
                                <button
                                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300"
                                    aria-label="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* Other sections */}

                <h2 className="text-lg font-semibold text-[#8F6B55] mt-10 mb-6">
                    Products
                </h2>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={16}
                    slidesPerView={2.2}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#F4F8FF] p-4 rounded-xl shadow-sm relative flex flex-col items-center">
                                <Image
                                    src={product.imgSrc}
                                    alt={product.name}
                                    width={100}
                                    height={100}
                                    className="mb-4"
                                />
                                <h3 className="text-md font-semibold text-[#CBB59D] mb-2">{product.name}</h3>
                                <p className="text-xs text-gray-600 mb-2">{product.description}</p>
                                <p className="text-md font-bold text-black">{product.price}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                       
                </div>

            </div>
        </div>

    )
}

export default Work;
