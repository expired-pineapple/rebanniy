import { NextRequest, NextResponse } from "next/server";
import { db } from '@/lib/db';
import bcrypt from 'bcrypt';
import getCurrentUser from "@/app/actions/getCurrentUser";


export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const user = await getCurrentUser();
        if (!user || (!user.isAdmin)) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { id } = params;

        const { password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        await db.user.update({
            where: { 
                id: id
            },
            data: {
                password: hashedPassword
            },
        });

        return NextResponse.json({ message: 'Password has been reset successfully.' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'An error occurred while resetting password.'  }, { status: 500 });

    }
    }