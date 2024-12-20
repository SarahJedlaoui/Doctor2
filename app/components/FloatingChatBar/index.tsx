"use client";
import React, { useState } from "react";
import { Box, Fab, TextField, Typography, Button, Paper } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

const FloatingChatBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      {/* Chat Button */}
      {!isOpen && (
        <Fab
          onClick={() => setIsOpen(true)}
          sx={{
            backgroundColor: "#F4F8FF", // Custom background color
            "&:hover": {
              backgroundColor: "#E0E7FF", // Lighter hover effect
            },
          }}
        >
          <ChatIcon sx={{ color: "#000000" }} /> {/* Icon color */}
        </Fab>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Paper
          elevation={3}
          sx={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 300,
            p: 2,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6">How can I help you?</Typography>
            <Fab
              size="small"
              onClick={() => setIsOpen(false)}
              sx={{
                backgroundColor: "#F4F8FF", // Custom background color
                "&:hover": {
                  backgroundColor: "#E0E7FF", // Lighter hover effect
                },
              }}
            >
              <CloseIcon sx={{ color: "#000000" }} /> {/* Icon color */}
            </Fab>
          </Box>

          {/* Chat Body */}
          <Box
            sx={{
              height: 200,
              overflowY: "auto",
              mb: 2,
              border: "1px solid #e0e0e0",
              borderRadius: 1,
              p: 1,
            }}
          >
            <Typography variant="body2" color="textSecondary">
              Start typing your message...
            </Typography>
          </Box>

          {/* Chat Footer */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Type a message..."
              variant="outlined"
            />
           
            <button className="bg-[#7A939E] text-white text-sm font-medium rounded-lg w-40 text-center">
          Send
        </button>


          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default FloatingChatBar;
