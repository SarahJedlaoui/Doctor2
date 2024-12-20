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
      title: "ADHD",
      subtitle: "Blog",
      category: "ADHD",
      bgColor: "#DAF5FF",
      img: "/images/Banner/doctor.svg",
    },
    {
      id: 2,
      title: "Patient",
      subtitle: "Blog",
      category: "You Patient",
      bgColor: "#FFE4F0",
      img: "/images/Banner/doctor.svg",
    },
    {
      id: 3,
      title: "Mental Health",
      subtitle: "Blog",
      category: "Mental Health",
      bgColor: "#FFF4C7",
      img: "/images/Banner/doctor.svg",
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredTopics = topics.filter(
    (topic) => filter === "All" || topic.category === filter
  );

  return (
    <Box
      sx={{
        backgroundColor: "#222222",
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
          color: "#FFFFFF",
        }}
      >
        Trending <br /> Topics
      </h1>

      {/* Filter Buttons */}
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        {["All", "ADHD", "You Patient", "Mental Health"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            style={{
              backgroundColor:
                category === "All"
                  ? "#FFF4C7"
                  : category === "You Patient"
                  ? "#FFE4F0"
                  : "#DAF5FF",
              color: "#000",
              borderRadius: "20px",
              padding: "8px 16px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
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
            justifyContent: "space-between",
            borderRadius: "24px",
            backgroundColor: topic.bgColor,
            padding: 2,
            marginBottom: 3,
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Box>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: "bold",
                fontSize: "1.5rem",
                marginBottom: "8px",
              }}
            >
              {topic.title}
            </h2>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "#666",
                marginBottom: "16px",
              }}
            >
              {topic.subtitle}
            </p>
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
          <Box
            sx={{
              width: "150px",
              height: "150px",
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
