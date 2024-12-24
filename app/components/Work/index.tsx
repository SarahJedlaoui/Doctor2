"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import ChatIcon from "@mui/icons-material/Chat";

const Work = () => {
  const router = useRouter();

  // Data for each section
  const contentHighlights = [
    {
      title: "Introduction",
      description:
        "What is ADHD? ADHD is a neurodevelopmental disorder characterized by patterns of inattention, hyperactivity, and impulsivity. It affects both children and adults and can impact academic, professional, and personal life.",
    },
    {
      title: "Symptoms",
      description:
        "What is ADHD? ADHD is a neurodevelopmental disorder characterized by patterns of inattention, hyperactivity, and impulsivity. It affects both children and adults and can impact academic, professional, and personal life.",
    },
    {
      title: "Management Tips",
      description:
        "What is ADHD? ADHD is a neurodevelopmental disorder characterized by patterns of inattention, hyperactivity, and impulsivity. It affects both children and adults and can impact academic, professional, and personal life.",
    },
    {
      title: "Apps to help",
      description:
        "What is ADHD? ADHD is a neurodevelopmental disorder characterized by patterns of inattention, hyperactivity, and impulsivity. It affects both children and adults and can impact academic, professional, and personal life.",
    },
  ];

  const trustedSources = [
    {
      title: "Expert Contributors",
      description:
        "Dr. Abby: A globally recognized specialist in ADHD with years of clinical and research experience.",
      img: "/images/Banner/doctor.svg",
    },
    {
      title: "Academic and Medical Publications",
      description:
        "Dr. John specializes in ADHD-related research and treatment, with a focus on children and young adults.",
      img: "/images/Banner/doctor.svg",
    },
  ];

  const toolsAndResources = [
    {
      title: "ADHD Daily Planner Template",
      description:
        "A printable tool to help patients create a structured routine.",
      img: "/images/Banner/book.svg",
    },
    {
      title: "ADHD Experts Podcast",
      description:
        "Engaging episodes featuring specialists discussing ADHD management and insights.",
      img: "/images/Banner/mic.svg",
    },
    {
      title: "Focus Enhancement Checklist",
      description:
        "Quick tips and strategies to improve concentration and productivity.",
      img: "/images/Banner/checklist.svg",
    },
    {
      title: "ADHD Symptom Tracker",
      description:
        "Monitor progress and patterns for a better treatment plan.",
      img: "/images/Banner/tracker.svg",
    },
  ];

  const productsOrMedications = [
    {
      title: "Noise-canceling headphones",
      description:
        "Improve focus and reduce distractions in noisy environments.",
      img: "/images/Banner/headphone.svg",
    },
    {
      title: "Adderall",
      description:
        "FDA-approved stimulant for managing ADHD symptoms.",
      img: "/images/Banner/adderall.svg",
    },
  ];

  return (
    <div className="bg-[#F9F5F2]">
      <div className="-mt-20 mx-auto max-w-7xl py-20 px-6" id="about-section">
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
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
            }}
          >
            {contentHighlights.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm relative">
                  <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                  <button
                    className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-[#CBB59D33] rounded-full text-gray-500 hover:bg-gray-300"
                    aria-label="Remove"
                  >
                    ×
                  </button>
                </div>
              </SwiperSlide>
            ))}
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
           navigation={{
             prevEl: ".swiper-button-prev",
             nextEl: ".swiper-button-next",
           }}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
            }}
          >
            {trustedSources.map((item, index) => (
              <SwiperSlide key={index}>
                <div style={{ height: "150px" }}
                className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm flex items-center justify-between relative">
                  <div className="flex-1">
                    <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                  <div className="w-20 h-20 -mb-12">
                    <img
                      src={item.img}
                      alt={item.title}
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
            ))}
          </Swiper>
        </div>

        {/* Tools and Resources */}
        <div className="mb-8">
          <h1
            className="title1"
            style={{
              marginBottom: "10px",
              color: "#8F6B55",
            }}
          >
            Tools and Resources
          </h1>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
            }}
          >
            {toolsAndResources.map((item, index) => (
              <SwiperSlide key={index}>
                <div style={{ height: "150px" }}
                 className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm flex items-center justify-between relative">
                  <div className="flex-1">
                    <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                  <div className="w-20 h-20 -mb-16">
                    <img
                      src={item.img}
                      alt={item.title}
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
            ))}
          </Swiper>
        </div>

        {/* Products or Medications */}
        <div className="mb-8">
          <h1
            className="title1"
            style={{
              marginBottom: "10px",
              color: "#8F6B55",
            }}
          >
            Products or Medications
          </h1>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
            }}
          >
            {productsOrMedications.map((item, index) => (
              <SwiperSlide key={index}>
                <div  style={{ height: "150px" }}
                className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm flex items-center justify-between relative">
                  <div className="flex-1">
                    <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                  <div className="w-12 h-15 -mb-12">
                    <img
                      src={item.img}
                      alt={item.title}
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
            ))}
          </Swiper>
        </div>
      </div>

      {/* Floating Chat Icon */}
      <Box
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          width: "60px",
          height: "60px",
          backgroundColor: "#FFFFFF",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
        }}
        onClick={() => router.push("/chat")}
      >
        <ChatIcon sx={{ color: "#000000" }} />
      </Box>
    </div>
  );
};

export default Work;
