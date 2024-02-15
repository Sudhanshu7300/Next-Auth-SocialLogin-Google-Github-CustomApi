"use client";
import Link from "next/link";
import type { ReactElement } from "react";
import { Grid, Box, Card, Stack, Typography, IconButton } from "@mui/material";
import BlankLayout from "../../../components/layouts/blank/BlankLayout";
import Image from "next/image";
import { signIn } from "next-auth/react";

// components
import PageContainer from "../../../components/container/PageContainer";
import AuthLogin from "../../../components/authentication/AuthLogin";
import TestLogo from "../../../components/assets/Images/test-logo.jpg";
import Toast from "../../../components/Toast";
// icons
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

const Login2 = () => {
  return (
    <>
      <Toast />
      <PageContainer title="Login" description="this is Login page">
        <Box
          sx={{
            position: "relative",
            "&:before": {
              content: '""',
              background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
              backgroundSize: "400% 400%",
              animation: "gradient 15s ease infinite",
              position: "absolute",
              height: "100%",
              width: "100%",
              opacity: "0.3",
            },
          }}
        >
          <Grid
            container
            spacing={0}
            justifyContent="center"
            sx={{ height: "100vh" }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              lg={4}
              xl={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Card
                elevation={9}
                sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Image
                    src={TestLogo}
                    alt="TestLogo"
                    height={85}
                    width={200}
                  />
                </Box>
                <AuthLogin
                  subtext={
                    <Typography
                      variant="subtitle1"
                      textAlign="center"
                      color="textSecondary"
                      mb={1}
                    >
                      Your Social Campaigns
                    </Typography>
                  }
                  subtitle={
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="center"
                      mt={3}
                    >
                      <Typography
                        color="textSecondary"
                        variant="h6"
                        fontWeight="500"
                      >
                        New to Modernize?
                      </Typography>
                      <Typography
                        component={Link}
                        href="/register"
                        fontWeight="500"
                        sx={{
                          textDecoration: "none",
                          color: "secondary.main",
                        }}
                      >
                        Create an account
                      </Typography>
                    </Stack>
                  }
                />
                <Grid container mt={2} justifyContent={"center"}>
                  <IconButton onClick={() => signIn("google")}>
                    <FcGoogle fontSize="48px" />
                  </IconButton>
                  <IconButton onClick={() => signIn("github")}>
                    <SiGithub fontSize="40px" />
                  </IconButton>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </>
  );
};
export default Login2;

Login2.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
