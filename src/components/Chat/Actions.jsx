import React from "react";
import { Box } from "@mui/material";
import copy from "../../assets/icons/copy.svg";
import loud from "../../assets/icons/loud.svg";
import regen from "../../assets/icons/regen.svg";
import like from "../../assets/icons/like.svg";
import dislike from "../../assets/icons/dislike.svg";

const Actions = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        [`& img`]: { cursor: "pointer" },
      }}
    >
      <img src={copy} alt="" style={{ width: 18 }} />
      <img src={loud} alt="" style={{ width: 18 }} />
      <img src={regen} alt="" style={{ width: 18 }} />
      <img src={like} alt="" style={{ width: 18 }} />
      <img src={dislike} alt="" style={{ width: 18 }} />
      <span style={{ fontSize: 14, color: "#007BFF", cursor: "pointer" }}>
        See translation
      </span>
    </Box>
  );
};

export default Actions;
