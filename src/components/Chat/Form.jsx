import React, { useState } from "react";
import { Box, Popover } from "@mui/material";
import pin from "../../assets/icons/pin.svg";
import send from "../../assets/icons/send.svg";
import photo from "../../assets/icons/photo.svg";
import file from "../../assets/icons/file.svg";
import audio from "../../assets/icons/audio.svg";

const Form = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleFileMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const open = Boolean(anchorEl);
  return (
    <Box sx={{ p: 2 }}>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          py: 1,
          px: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#F0F0F0",
          borderRadius: "10px",
        }}
      >
        {/* File Upload Button */}
        <img
          src={pin}
          alt="pin"
          style={{ cursor: "pointer" }}
          onClick={handleFileMenuClick}
        />

        {/* Popover for File Upload Options */}
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleFileMenuClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{
            [`& .MuiPopover-paper `]: {
              boxShadow: "none",
              background: "transparent",
            },
          }}
        >
          <Box
            sx={{
              width: "200px",
              bgcolor: "#FCFCFC",
              borderRadius: "10px",
              border: "1px solid #E9ECEF",
            }}
          >
            <Box>
              <label
                htmlFor="images"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "5px 10px",
                  fontWeight: 500,
                  borderBottom: "1px solid #E9ECEF",
                  cursor: "pointer",
                }}
              >
                <img src={photo} alt="photo_" />
                Photo
                <input
                  id="images"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </label>
            </Box>
            <Box>
              <label
                htmlFor="audio"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "5px 10px",
                  fontWeight: 500,
                  borderBottom: "1px solid #E9ECEF",
                  cursor: "pointer",
                }}
              >
                <img src={audio} alt="audio" />
                Audio
                <input id="audio" type="file" style={{ display: "none" }} />
              </label>
            </Box>
            <Box>
              <label
                htmlFor="file"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "5px 10px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                <img src={file} alt="file" />
                Select File
                <input id="file" type="file" style={{ display: "none" }} />
              </label>
            </Box>
          </Box>
        </Popover>

        {/* Rest of Input Area */}
        <input
          type="text"
          placeholder="Ask me anything..."
          style={{
            border: 0,
            background: "transparent",
            width: "calc(100% - 60px)",
          }}
        />

        <button
          type="submit"
          style={{ all: "unset", display: "flex", cursor: "pointer" }}
        >
          <img src={send} alt="send" />
        </button>
      </Box>
    </Box>
  );
};

export default Form;
