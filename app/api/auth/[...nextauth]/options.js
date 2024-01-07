import { connect } from "@/database/mongo.config";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions, ISODateString, User } from "next-auth";
import { User as UserModel } from "@/models/User";
import { JWT } from "next-auth/jwt";

export const authOptions = {
  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      connect();
      try {
        const findUser = await UserModel.findOne({ email: user.email });
        if (findUser) {
          return true;
        }
        await UserModel.create({
          email: user.email,
          name: user.name,
          role: "User",
        });
        return true;
      } catch (error) {
        console.log("The error is ", error);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        user.role = user?.role == null ? "User" : user?.role;
        token.user = user;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user = token.user;
      return session;
    },
  },
  providers: [
    Credentials({
      name: "Welcome Back",
      type: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // * Connect to the MongoDb
        connect();
        const user = await UserModel.findOne({ email: credentials?.email });
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};
