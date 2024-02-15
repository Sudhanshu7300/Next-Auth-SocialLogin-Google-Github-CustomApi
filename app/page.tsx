import { Typography } from "@mui/material";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/options";
import PageContainer from "../components/container/PageContainer";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session ? (
        <PageContainer>
          <Typography color="primary" variant="h3">
            Next-Auth streamlines authentication integration by providing a
            unified solution for incorporating social login providers such as
            Google OAuth and GitHub OAuth, along with custom API
            authentication.t offers a seamless authentication experience for
            users, allowing them to access the application's features securely.
          </Typography>
        </PageContainer>
      ) : (
        <h1 className="text-5xl text-red-600 font-semibold">
          You are Not Authenticated !!
        </h1>
      )}
    </>
  );
}
