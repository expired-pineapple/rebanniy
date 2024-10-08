import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { db } from "@/lib/db";


export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
        const user = await db.user.findFirst({
          where: {
            OR:[{
              username: credentials?.username as string,
              },
            {  email: credentials?.username as string}
            ]
           },
        });


        if (!user) {
          throw new Error("Invalid username or password");
        }
        try {
          const isValid = await bcrypt.compare(
            credentials?.password as string,
            user?.password as string
          );
          if (!isValid) {
            throw new Error("Invalid username or password");
          }
        } catch (error:any) {
          throw new Error(error);
        }

        return user;
      }catch(error:any){
        console.log(error)
        throw new Error(error);
      }
    }
    })
  ],
  pages: {
    signIn: "/login",
    error: "/login",
    newUser:"/register"
  },
  callbacks: {
    jwt: async ({ token, trigger, user , session}) => {
      if (trigger === "update" && session) {
        // @ts-expect-error
        token.user.username = session.user.username
        return token
      }
      user && (token.user = user)
      return token
  },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  // jwt: {
  //   secret: process.env.AUTH_SECRET_KEY,
  // },
  debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);
