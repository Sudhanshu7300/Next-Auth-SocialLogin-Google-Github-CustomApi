import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
interface AuthProviderConfig {
  clientId: string;
  clientSecret: string;
}

const googleProviderConfig: AuthProviderConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
};

const githubProviderConfig: AuthProviderConfig = {
  clientId: process.env.GITHUB_CLIENT_ID!,
  clientSecret: process.env.GITHUB_CLIENT_SECRET!,
};
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Next Auth",
      credentials: {},
      async authorize(credentials: any, req: any) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "", email: credentials?.email };
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    GoogleProvider(googleProviderConfig),
    GitHubProvider(githubProviderConfig),
  ],
};
