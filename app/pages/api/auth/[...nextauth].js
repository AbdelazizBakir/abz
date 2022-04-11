import NextAuth from "next-auth";
import Providers from "next-auth/react";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default (req, res) => NextAuth(req, res, {
  adapter: PrismaAdapter(prisma),

    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
      }),
    ],
    callbacks: {
    async session({ session, user }) {
      session.userId = user.id;
      session.role = user.role;
      return Promise.resolve(session);
    },
  },
    debug: process.env.NODE_ENV === "development",
    secret: process.env.AUTH_SECRET,
    jwt: {
      secret: process.env.JWT_SECRET,
    },
  }); 