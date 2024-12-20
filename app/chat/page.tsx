"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Paper,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import FolderIcon from "@mui/icons-material/Folder";
import SendIcon from "@mui/icons-material/Send";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const AdjustContentPage = () => {
  const [messages, setMessages] = useState<string[]>([
    "Hi, I’m here to help! What changes would you like to make to the ADHD module?",
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages((prev) => [...prev, inputValue]);
      setInputValue(""); // Clear the input field
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#FFF",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <IconButton>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" fontWeight="bold">
          Adjust content
        </Typography>
        <Box sx={{ width: 48 }} />
      </Box>

      {/* Chat Messages */}
      <Box
        sx={{
          padding: 2,
          display: "flex",
          flex: 1,
          flexDirection: "column",
          gap: 1,
          overflowY: "auto",
        }}
      >
        {messages.map((message, index) => (
          <Paper
            key={index}
            elevation={1}
            sx={{
              padding: 2,
              backgroundColor: index === 0 ? "#F5F5F5" : "#E0E7FF",
              alignSelf: index === 0 ? "flex-end" : "flex-start",
              maxWidth: "60%",
            }}
          >
            <Typography>{message}</Typography>
          </Paper>
        ))}
      </Box>

      {/* Swipable Cards */}
      <Box
        sx={{
          padding: 2,
          marginTop: "auto",
          
        }}
      >
        <Swiper spaceBetween={16} slidesPerView="auto" pagination={{ clickable: true }}>
          <SwiperSlide style={{ height: "150px", width: "auto"  }}>
            <Paper
              elevation={2}
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 4,
                backgroundColor: "#F4F8FF",
                height: "100%",
              }}
            >
              <EditIcon sx={{ fontSize: 40, color: "#B2876B" }} />
              <Typography fontWeight="bold" mt={1}>
                Update Content
              </Typography>
              <Typography fontSize="small" color="textSecondary">
                Edit existing text
              </Typography>
            </Paper>
          </SwiperSlide>
          <SwiperSlide style={{ height: "150px", width: "auto" }}>
            <Paper
              elevation={2}
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 4,
                backgroundColor: "#F4F8FF",
                height: "100%",
              }}
            >
              <FolderIcon sx={{ fontSize: 40, color: "#B2876B" }} />
              <Typography fontWeight="bold" mt={1}>
                Add New Section
              </Typography>
              <Typography fontSize="small" color="textSecondary">
                Expand module to
              </Typography>
            </Paper>
          </SwiperSlide>
          <SwiperSlide style={{ height: "150px", width: "auto"  }}>
            <Paper
              elevation={2}
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 4,
                backgroundColor: "#F4F8FF",
                height: "100%",
              }}
            >
              <EditIcon sx={{ fontSize: 40, color: "#B2876B" }} />
              <Typography fontWeight="bold" mt={1}>
                Update Content
              </Typography>
              <Typography fontSize="small" color="textSecondary">
                Edit existing text
              </Typography>
            </Paper>
          </SwiperSlide>
        </Swiper>
      </Box>

      {/* Floating Input Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 2,
          borderTop: "1px solid #E0E0E0",
          backgroundColor: "#FFFFFF",
        }}
      >
        <TextField
          fullWidth
          placeholder="How can I help you?"
          variant="outlined"
          size="small"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          sx={{
            borderRadius: "20px",
            backgroundColor: "#F4F8FF",
          }}
        />
        <IconButton onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AdjustContentPage;
