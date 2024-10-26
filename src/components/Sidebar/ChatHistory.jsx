import { Box, Typography } from "@mui/material";
import React from "react";

const ChatHistory = () => {
  return (
    <Box sx={{ mb: 2, overflowY: "auto", height: "calc(100% - 353px)" }}>
      <Box marginBottom={1.5}>
        <Typography fontWeight={500} marginBottom={0.75}>
          Today
        </Typography>
        {["What is Ai assistant?", "Best laptop brands and features"].map(
          (itm, idx) => (
            <Typography
              key={idx}
              fontSize={15}
              color="#4A4C4D"
              fontWeight={400}
              marginBottom={0.5}
              noWrap
            >
              {itm}
            </Typography>
          )
        )}
      </Box>
      <Box marginBottom={1.5}>
        <Typography fontWeight={500} marginBottom={0.75}>
          Yesterday
        </Typography>
        {[
          "How many days are there in a year?",
          "Can AI lead to job displacement?",
          "Lorem ipsum dorem sit amet convertinos",
        ].map((itm, idx) => (
          <Typography
            key={idx}
            fontSize={15}
            color="#4A4C4D"
            fontWeight={400}
            marginBottom={0.5}
            noWrap
          >
            {itm}
          </Typography>
        ))}
      </Box>
      <Box>
        <Typography fontWeight={500} marginBottom={0.75}>
          Last Week
        </Typography>
        {[
          "How many days are there in a year?",
          "Can AI lead to job displacement?",
          "Lorem ipsum dorem sit amet convertinos",
        ].map((itm, idx) => (
          <Typography
            key={idx}
            fontSize={15}
            color="#4A4C4D"
            fontWeight={400}
            marginBottom={0.5}
            noWrap
          >
            {itm}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ChatHistory;
