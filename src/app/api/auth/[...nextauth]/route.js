import { apiClient } from "@/lib/apiClient";
import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const res = await apiClient.post(`/account/login`, {
          email,
          password,
        });
        // console.log(res.value.value, "res");
        // If no error and we have user data, return it

        if (res.statusCode === 200) {
          const result = res.value.value;

          const { organization, applicationRole, createdBy, ...newUser } =
            result.user;
          return { ...newUser, token: result.token };
        } else {
          // Return null if user data could not be retrieved
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60 * 24, // 1 day
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...user, ...token };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
