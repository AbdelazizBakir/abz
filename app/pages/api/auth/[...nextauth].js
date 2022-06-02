import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(req) {
        const admin = await prisma.user.findUnique({
          where: {
            username: req.username,
          },
        });
        if (admin) {
          if (
            req.username === admin.username &&
            req.password === admin.password
          ) {
            return admin;
          } else {
            return null;
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
        // Getting the JWT token from API response
      if (user) {
        token.name = user.username
      }
      return token
    },
    async session({ session, token }) {
      session.name = {
        username: token.name
      }
      return session
    },
  },
  pages: {
    signIn: "/signin",
    signOut: "/index",
  },
});