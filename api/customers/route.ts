import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";
import getCurrentUser from "@/app/actions/getCurrentUser";


export async function GET(request: NextRequest) {
    try{
        const user= await getCurrentUser();
        if(!user) return NextResponse.json({error: "Unauthorized"}, {status: 401});
        if(!user.isAdmin) return NextResponse.json({error: "Unauthorized"}, {status: 401});
        const students = await db.student.findMany();

        return NextResponse.json(students);
    }catch(error){
        return NextResponse.json({error: "Something went wrong"}, {status: 500});
    }    
    }
