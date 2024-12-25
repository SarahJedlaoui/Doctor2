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
import { useRouter } from "next/navigation";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";

const AdjustContentPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "assistant" }[]>([
    { text: "Hi, I’m here to help! What changes would you like to make to the ADHD module?", sender: "assistant" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!inputValue.trim()) return;
  
    const userMessage = inputValue.trim();
  
    // Display user's message
    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
    setInputValue(""); // Clear the input field
  
    try {
      setLoading(true);
  
      // Use axios for client-side API request
      const response = await axios.post("https://doctornuri-2a235f63c343.herokuapp.com/api/content/handle-command", {
        command: userMessage, // Sending the user's command
      });
  
      if (!response.data) {
        throw new Error("No response data received");
      }
  
      const assistantResponse =
        response.data.answer || response.data.message || "I couldn't understand your request. Please try again.";
  
      // Display assistant's response
      setMessages((prev) => [...prev, { text: assistantResponse, sender: "assistant" }]);
    } catch (error) {
      console.error("Error handling command:", error);
      setMessages((prev) => [...prev, { text: "Sorry, I couldn't process your request. Please try again later.", sender: "assistant" }]);
    } finally {
      setLoading(false);
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
        backgroundColor: "#F9F5F2",
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
        <IconButton
          onClick={() => {
            router.push("/adhd");
          }}
        >
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
              backgroundColor: message.sender === "assistant" ? "#F5F5F5" : "#E7D7C6",
              alignSelf: message.sender === "assistant" ? "flex-end" : "flex-start",
              maxWidth: "60%",
            }}
          >
            <Typography>{message.text}</Typography>
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
          <SwiperSlide className="flex items-center justify-between relative" style={{ height: "120px", width: "auto" }}>
            <Paper
              elevation={2}
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 4,
                backgroundColor: "#E7D7C6",
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
          <SwiperSlide className="flex items-center justify-between relative" style={{ height: "120px", width: "auto" }}>
            <Paper
              elevation={2}
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 4,
                backgroundColor: "#E7D7C6",
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
          <SwiperSlide className="flex items-center justify-between relative" style={{ height: "120px", width: "auto" }}>
            <Paper
              elevation={2}
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 4,
                backgroundColor: "#E7D7C6",
                height: "100%",
              }}
            >
              <EditIcon sx={{ fontSize: 40, color: "#B2876B" }} />
              <Typography fontWeight="bold" mt={1}>
                Request Sources
              </Typography>
              <Typography fontSize="small" color="textSecondary">
                Verify reference details
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
          placeholder="Ask me a question..."
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
        <IconButton onClick={handleSend} disabled={loading}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AdjustContentPage;
