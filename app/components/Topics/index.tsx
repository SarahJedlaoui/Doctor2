"use client";
import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import ChatIcon from "@mui/icons-material/Chat";


const TrendingTopics = () => {
  const router = useRouter();

  const topics = [
    {
      id: 1,
      title: "ADHD in Adults",
      subtitle: "Mental Health",
      category: "Mental Health",
      bgColor: "#E7D7C6",
      img: "/images/Banner/OBJECTS.svg",
    },
    {
      id: 2,
      title: "The Role of Omega-3",
      subtitle: "Nutrition",
      category: "Nutrition",
      bgColor: "#D6E1C9",
      img: "/images/Banner/healthy.svg",
    },
    {
      id: 3,
      title: "Burnout Among Working Professionals",
      subtitle: "Lifestyle",
      category: "Lifestyle",
      bgColor: "#CD946E",
      img: "/images/Banner/error.svg",
    },
    {
      id: 4,
      title: "Burnout Among Working Professionals",
      subtitle: "Lifestyle",
      category: "Lifestyle",
      bgColor: "#E8D6C6",
      img: "/images/Banner/error.svg",
    },
    {
      id: 5,
      title: "Burnout Among Working Professionals",
      subtitle: "Lifestyle",
      category: "Lifestyle",
      bgColor: "#D6E1C9",
      img: "/images/Banner/error.svg",
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredTopics = topics.filter(
    (topic) => filter === "All" || topic.category === filter
  );

  return (
    <Box
      sx={{
        backgroundColor: "#F9F5F2",
        minHeight: "100vh",
        padding: 4,
        color: "#FFFFFF",
        fontFamily: "'Playfair Display', serif",
        position: "relative",
      }}
    >
      
      {/* Header */}
      <h1
        className="title"
        style={{
          marginBottom: "24px",
          color: "#8F6B55",
        }}
      >
        Trending <br /> Topics
      </h1>

      {/* Filter Buttons Slider */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          mb: 4,
          padding: "8px 0",
          scrollbarWidth: "none", // Hide scrollbar on Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar on Chrome and Edge
          },
        }}
      >
        {["All", "Lifestyle", "Mental Health", "Nutrition"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            style={{
              backgroundColor: "#FFFFFF", // Same color for all
              color: "#8F6B55", // Consistent text color
              borderRadius: "20px",
              padding: "10px 12px", // Smaller padding
              border: "none",
              fontSize: "14px", // Slightly smaller font
              cursor: "pointer",
              whiteSpace: "nowrap", // Ensures text is in one line
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
              transition: "background-color 0.3s ease",
            }}
          >
            {category}
          </button>
        ))}
      </Box>


      {/* Cards */}
      {filteredTopics.map((topic) => (
        <Paper
        key={topic.id}
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "24px",
          backgroundColor: topic.bgColor,
          padding: 2,
          marginBottom: 3,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            flex: "2", // Text section takes up 2/3 of the card
            paddingRight: 2,
            maxWidth: "55%", // Ensure consistent width for the text
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginBottom: "8px",
              lineHeight: "1.2", // Proper spacing between lines
              wordWrap: "break-word", // Prevent text overflow issues
            }}
          >
            {topic.title}
          </h2>
          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#666",
              marginBottom: "16px",
            }}
          >
            {topic.subtitle}
          </p>
          {/* Button */}
          <button
            onClick={() => {
              if (topic.id === 1) {
                router.push("/adhd");
              }
            }}
            style={{
              backgroundColor: "#FFFFFF",
              color: "#000",
              borderRadius: "20px",
              padding: "6px 16px",
              border: "none",
              fontSize: "14px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Start
          </button>
        </Box>
      
        {/* Image Section */}
        <Box
          sx={{
            flex: "1", // Image section takes up 1/3 of the card
            width: "150px", // Fixed width
            height: "150px", // Fixed height
            background: `url(${topic.img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "16px",
          }}
        ></Box>
      </Paper>
      
      ))}

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
    </Box>
  );
};

export default TrendingTopics;
