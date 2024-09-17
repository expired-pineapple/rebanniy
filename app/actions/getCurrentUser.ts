import { getServerSession } from "next-auth/next"

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { db } from "@/lib/db";

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
     // @ts-ignore
    if (!session?.user?.username) {
      return null;
    }

    const currentUser = await db.user.findUnique({
      where: {
        // @ts-ignore
        username: session.user.username as string,
      }});

    if (!currentUser) {
      return null;
    }

    return currentUser
  } catch (error: any) {
    return null;
  }
}

