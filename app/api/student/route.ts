import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";
import getCurrentUser from "@/app/actions/getCurrentUser";


export async function GET(request: NextRequest) {
    try{
        const user= await getCurrentUser();
        if(!user?.isAdmin){
            return NextResponse.json({error: "Unauthorized"}, {status: 401});
        }
        console.log(user)
        const students = await db.student.findMany({
            include:{
                User: true
            }
        });
        const mappedStudents = students.map(student =>({
            ...student,
            fullName:`${student.User.firstName} ${student.User.lastName}`,
            username: student.User.username
        }))
        return NextResponse.json(mappedStudents);
    }catch(error){
        return NextResponse.json({error: "Something went wrong"}, {status: 500});
    }    
    }
