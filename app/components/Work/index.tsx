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


        <div className='bg-[#F9F5F2]'>
            <div className='-mt-20 mx-auto max-w-7xl py-20 px-6' id="about-section">

                {/* Content Highlights */}
                <div className="mb-8">
                    <h1
                        className="title1"
                        style={{
                            marginBottom: "10px",
                            color: "#8F6B55",
                        }}
                    >
                        Content Highlights
                    </h1>

                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={16}
                        slidesPerView={1.2}
                        breakpoints={{
                            640: { slidesPerView: 2.2 },
                            768: { slidesPerView: 3 },
                        }}
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm relative">
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
                                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-[#CBB59D33] rounded-full text-gray-500 hover:bg-gray-300"
                                    aria-label="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm relative">
                                <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                    Symptoms
                                </h3>
                                <p className="text-xs text-gray-600">
                                    What is ADHD? <br />
                                    ADHD is a neurodevelopmental disorder characterized
                                    by patterns of inattention, hyperactivity, and impulsivity. It
                                    affects both children and adults and can impact academic,
                                    professional, and personal life.
                                </p>
                                <button
                                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-[#CBB59D33] rounded-full text-gray-500 hover:bg-gray-300"
                                    aria-label="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#FFFFFf] p-4 rounded-xl shadow-sm relative">
                                <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                    Management Tips
                                </h3>
                                <p className="text-xs text-gray-600">
                                    What is ADHD? <br />
                                    ADHD is a neurodevelopmental disorder characterized
                                    by patterns of inattention, hyperactivity, and impulsivity. It
                                    affects both children and adults and can impact academic,
                                    professional, and personal life.
                                </p>
                                <button
                                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-[#CBB59D33] rounded-full text-gray-500 hover:bg-gray-300"
                                    aria-label="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-[#FFFFFf] p-4 rounded-xl shadow-sm relative">
                                <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                    Apps to help
                                </h3>
                                <p className="text-xs text-gray-600">
                                    What is ADHD? <br />
                                    ADHD is a neurodevelopmental disorder characterized
                                    by patterns of inattention, hyperactivity, and impulsivity. It
                                    affects both children and adults and can impact academic,
                                    professional, and personal life.
                                </p>
                                <button
                                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-[#CBB59D33] rounded-full text-gray-500 hover:bg-gray-300"
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
                    <h1
                        className="title1"
                        style={{
                            marginBottom: "10px",
                            color: "#8F6B55",
                        }}
                    >
                        Trusted Sources
                    </h1>

                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={16}
                        slidesPerView={1.2}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 3 },
                        }}
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm flex items-center justify-between relative">
                                {/* Text Section */}
                                <div className="flex-1">
                                    <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                        Expert <br /> Contributors
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                        Dr. Abby <br />
                                        A globally recognized specialist in ADHD <br /> with years of clinical
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
                                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-[#CBB59D33] rounded-full text-gray-500 hover:bg-gray-300"
                                    aria-label="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        </SwiperSlide>


                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm flex items-center justify-between relative">
                                {/* Text Section */}
                                <div className="flex-1">
                                    <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                        Academic and Medical Publications
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
                                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-[#CBB59D33] rounded-full text-gray-500 hover:bg-gray-300"
                                    aria-label="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        </SwiperSlide>
                    </Swiper>


                    <div className="mb-8">
                        <h1
                            className="title1"
                            style={{
                                marginTop:"10px",
                                marginBottom: "10px",
                                color: "#8F6B55",
                            }}
                        >
                           Tools and ressources 
                        </h1>

                        <Swiper
                            modules={[Navigation]}
                            navigation
                            spaceBetween={16}
                            slidesPerView={1.2}
                            breakpoints={{
                                640: { slidesPerView: 2.2 },
                                768: { slidesPerView: 3 },
                            }}
                        >
                            {/* Slide 1 */}

                            <SwiperSlide>
                            <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm flex items-center justify-between relative">
                                {/* Text Section */}
                                <div className="flex-1">
                                    <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                    ADHD Daily Planner Template
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                    A printable tool to help patients create a structured routine.
                                    </p>
                                </div>

                                {/* Image Section */}
                                <div className="w-20 h-20 -mb-16 ">
                                    <img
                                        src="/images/Banner/book.svg"
                                        alt="Dr. Abby"
                                        className="w-35 h-35 object-cover"
                                    />
                                </div>

                                {/* Close Button */}
                                <button
                                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-[#CBB59D33] rounded-full text-gray-500 hover:bg-gray-300"
                                    aria-label="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm relative ">
                                    <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                    ADHD Experts  <br/>  Podcast
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                    Engaging episodes featuring specialists discussing ADHD management and insights.                                    </p>
                                    <button
                                        className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-[#CBB59D33] rounded-full text-gray-500 hover:bg-gray-300"
                                        aria-label="Remove"
                                    >
                                        ×
                                    </button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm relative">
                                    <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                    Focus Enhancement <br/> Checklist
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                    Quick tips and strategies to improve concentration and productivity.
                                    </p>
                                    <button
                                        className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-[#CBB59D33] rounded-full text-gray-500 hover:bg-gray-300"
                                        aria-label="Remove"
                                    >
                                        ×
                                    </button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[#FFFFFf] p-4 rounded-xl shadow-sm relative">
                                    <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                    ADHD Symptom  <br /> Tracker
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                    Monitor progress and patterns for a better treatment plan.
                                    </p>
                                    <button
                                        className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-[#CBB59D33] rounded-full text-gray-500 hover:bg-gray-300"
                                        aria-label="Remove"
                                    >
                                        ×
                                    </button>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>



                    {/* Other sections */}
                    <h1
                        className="title1"
                        style={{
                            marginTop: "5px",
                            marginBottom: "10px",
                            color: "#8F6B55",
                        }}
                    >
                        Products or Medications
                    </h1>


                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={16}
                        slidesPerView={1.2}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 3 },
                        }}
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm flex items-center justify-between relative">
                                {/* Text Section */}
                                <div className="flex-1">
                                    <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                    Noise-canceling headphones
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                    Improve focus and reduce distractions in noisy environments.
                                    </p>
                                </div>

                                {/* Image Section */}
                                <div className="w-20 h-20 -mb-12 ">
                                    <img
                                        src="/images/Banner/headphone.svg" // Update to the correct image path
                                        alt="Dr. Abby"
                                        className="w-35 h-35 object-cover"
                                    />
                                </div>

                                {/* Close Button */}
                                <button
                                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-[#CBB59D33] rounded-full text-gray-500 hover:bg-gray-300"
                                    aria-label="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        </SwiperSlide>


                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm flex items-center justify-between relative"
                             style={{
                                height: "135px", // Fixed height for the slide
                              }}
                            >
                                {/* Text Section */}
                                <div className="flex-1">
                                    <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                                    Adderall
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                    FDA-approved stimulant<br/> for managing ADHD <br/> symptoms.
                                    </p>
                                </div>
                                {/* Image Section */}
                                <div className="w-12 h-15 -mb-12 ">
                                    <img
                                        src="/images/Banner/adderall.svg"
                                        alt="Dr. Abby"
                                        className="w-25 h-25 object-cover"
                                    />
                                </div>
                                <button
                                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-[#CBB59D33] rounded-full text-gray-500 hover:bg-gray-300"
                                    aria-label="Remove"
                                >
                                    ×
                                </button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                 

                </div>
                <button className="bg-[#7A939E] text-white text-lg font-medium py-3 px-6 rounded-lg w-full text-center">
          Validate the Content
        </button>
            </div>
        </div>

    )
}

export default Work;
