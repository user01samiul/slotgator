/* eslint-disable @typescript-eslint/no-explicit-any */
import { compare } from "bcryptjs";
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
// import Google from "next-auth/providers/google";
import connectDB from "./lib/connectDB";
import User from "./models/User.model";


// inthis page user = admin actually

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin(
            "Please provide both email and password."
          );
        }

        //connect the database
        await connectDB();

        const user = await User.findOne({ email }).select("+password");

        if (!user || !user.password) {
          throw new Error("Invalid email or password");
        }

        const isPasswordCorrect = await compare(password, user.password);

        if (!isPasswordCorrect) {
          throw new Error("Invalid password");
        }

        return {
         id: (user as any)._id.toString(),
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        } 
      },
    }),
  ],

  // overwiting default pages
  pages: {
    signIn: "/login",
    error: "/error",
  },
  //customizing session and jwt
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub as string;
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.role = user.role;
      }
      return token;
    },
    // async signIn({ user, account }) {
    //   await connectDB();
    //   if (account?.provider === "google") {
    //     const { email, id } = user;
    //     const name = user.name?.split(" ") || ["", ""]; //from google
    //     const firstName = name[0] || "Unknown";
    //     const lastName = name[1] || "User";
    //     const imageUrl = user.image || ""; // same

    //     const existingUser = await User.findOne({ email });

    //     if (!existingUser) {
    //       await User.create({
    //         email,
    //         firstName,
    //         lastName,
    //         imageUrl,
    //         authProviderId: id, // id from google
    //         role: "user",
    //       });
    //     } else if (!existingUser.authProviderId) {
    //       await User.updateOne({ email }, { authProviderId: id });
    //     }
    //   }

    //   return true;
    // },
  },
  session: {
    strategy: "jwt",
  },
});
