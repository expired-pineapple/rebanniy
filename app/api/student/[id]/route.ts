import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";
import getCurrentUser from "@/app/actions/getCurrentUser";


export async function GET(request: NextRequest,  { params }: { params: { id: string } }) {
    try{
        const user= await getCurrentUser();
        if(!user) return NextResponse.json({error: "Unauthorized"}, {status: 401});
        if(!user.isAdmin) return NextResponse.json({error: "Unauthorized"}, {status: 401});

        const { id } = params;

        const student = await db.student.findUnique({
            where: {
                id: id
            },
            include: {
                Guardian: true,
                User: true
            }
        });
        console.log(student)

        return NextResponse.json(student);
    }catch(error){
        return NextResponse.json({error: "Something went wrong"}, {status: 500});
    }    
  }

