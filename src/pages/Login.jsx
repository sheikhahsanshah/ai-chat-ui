import React, { Suspense, lazy } from "react";
import { Box, CircularProgress, CssBaseline, Typography } from "@mui/material";
import Form from "../components/Chat/Form";
import logo from "../assets/logo.svg";

const Login = lazy(() => import("../components/Login"));

const LoginPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Suspense
        fallback={
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
        }
      >
        <Login />
      </Suspense>

      {window.innerWidth > 991 && (
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
          <Chat />
        </Suspense>
      )}
    </Box>
  );
};

const Chat = () => {
  return (
    <Box
      component="main"
      sx={{
        p: 2,
        flexGrow: 1,
        height: "100vh",
        bgcolor: "transparent",
      }}
    >
      <Box
        sx={{
          height: "100%",
          bgcolor: "white",
          borderRadius: "10px",
          border: "1px solid #E9ECEF",
        }}
      >
        <Box
          sx={{
            py: 1,
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #E9ECEF",
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Welcome back
          </Typography>
          <img src={logo} alt="logo" style={{ width: 44 }} />
        </Box>

        {/* Chat Section */}
        <Box
          sx={{
            p: 2,
            height: "calc(100% - 57px - 72px)",
            overflowY: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="pre"
            sx={{
              p: 1,
              bgcolor: "#f5f5f5",
              borderRadius: "10px",
              width: "fit-content",
              maxWidth: "500px",
              border: "1px solid #E9ECEF",
              textWrap: "wrap",
            }}
          >
            Information for your ai asisstant: ex. AI personal assistants
            are advanced software programs that use artificial intelligence to
            perform daily personal tasks. They can operate as AI-powered text
            assistants, voice bots, or a combination of both. 
          </Box>
        </Box>

        {/* Message Input Section */}
        <Form />
      </Box>
    </Box>
  );
};
export default LoginPage;
