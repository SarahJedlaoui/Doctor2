"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import ChatIcon from "@mui/icons-material/Chat";

// Define the type for a section
interface Section {
  section: string;
  items: {
    title: string;
    description: string;
    img?: string;
  }[];
}

const Work: React.FC = () => {
  const router = useRouter();
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://doctornuri-2a235f63c343.herokuapp.com/api/content/all");
        if (!response.ok) throw new Error("Failed to fetch sections");
        const data = await response.json();
        setSections(data);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };
    fetchData();
  }, []);

  const renderSection = (section: Section) => (
    <div key={section.section} className="mb-8">
      <h1
        className="title1"
        style={{
          marginBottom: "10px",
          color: "#8F6B55",
        }}
      >
        {section.section.replace(/([A-Z])/g, " $1").trim()}
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
        {section.items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ height: "150px" }}
              className="bg-[#FFFFFF] p-4 rounded-xl shadow-sm flex items-center justify-between relative"
            >
              <div className="flex-1">
                <h3 className="text-md font-semibold text-[#CBB59D] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600">{item.description}</p>
              </div>
              {item.img && (
                <div className="w-20 h-20 -mb-12">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-35 h-35 object-cover"
                  />
                </div>
              )}
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
  );

  return (
    <div className="bg-[#F9F5F2]">
      <div className="-mt-20 mx-auto max-w-7xl py-20 px-6" id="about-section">
        {sections.map((section) => renderSection(section))}
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
