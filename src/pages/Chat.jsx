import React, { Suspense, lazy, useState } from "react";
import { Box, CircularProgress, CssBaseline } from "@mui/material";

const Chat = lazy(() => import("../components/Chat"));
const Sidebar = lazy(() => import("../components/Sidebar"));

const ChatPage = () => {
  const [showSidebar, setShowSidebar] = useState(
    window.innerWidth > 990 ? true : false
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Suspense
        fallback={
          <>
            {window.innerWidth > 991 && (
              <Box
                sx={{
                  p: 2,
                  width: window.innerWidth > 991 ? "400px" : "100%",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            )}
          </>
        }
      >
        <Sidebar open={showSidebar} onClose={() => setShowSidebar(false)} />
      </Suspense>

      <Suspense
        fallback={
          <Box
            sx={{
              p: 2,
              flexGrow: 1,
              height: "100vh",
            }}
          >
            <CircularProgress sx={{ marginLeft: "50%", marginTop: "25%" }} />
          </Box>
        }
      >
        <Chat setShowSidebar={setShowSidebar} />
      </Suspense>
    </Box>
  );
};

export default ChatPage;
