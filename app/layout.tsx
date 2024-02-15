import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { baselightTheme } from "../components/theme/DefaultColors";
import FullLayout from "../components/layouts/full/FullLayout";
import AuthProvider from "@/components/authentication/AuthProvider";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = baselightTheme;
  const session: any = await getServerSession(authOptions);

  if (session?.status === "loading") {
    return <p> Loading.....</p>;
  }
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          {!session ? (
            <AuthProvider>{children}</AuthProvider>
          ) : (
            <FullLayout>{children}</FullLayout>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
