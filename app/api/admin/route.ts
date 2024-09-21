import { NextRequest, NextResponse } from "next/server";
import bycrpt from "bcrypt";
import { db } from "@/lib/db";
import { sendEmail } from "@/lib/mailer";
import getCurrentUser from "@/app/actions/getCurrentUser";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const password = body.password.toLowerCase().trim();
    const hashedPassword = await bycrpt.hash(password, 10);

    await db.$transaction(async (prisma:any) => {
     
      await prisma.user.create({
        data: {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            username: body.username,
            password:hashedPassword,
            isAdmin:true
        },
      });
    })
    return NextResponse.json({ message: "Admin created successfully" }, { status: 201 });
  } catch (error: any) {
    console.error(error);
    if (error.code === "P2002") {
      return NextResponse.json({ message: "Invalid user data" }, { status: 400 });
    }
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}


export async function GET(request: NextRequest) {
    try{
        const user= await getCurrentUser();
        if(!user?.isAdmin){
            return NextResponse.json({error: "Unauthorized"}, {status: 401});
        }
        console.log(user)
        const admins = await db.user.findMany({
            where:{
                isAdmin:true
            }
        });
        const mappedStudents = admins.map(admin =>({
            ...admin,
            fullName:`${admin.firstName} ${admin.lastName}`
        }))
        return NextResponse.json(mappedStudents);
    }catch(error){
        return NextResponse.json({error: "Something went wrong"}, {status: 500});
    }    
    }
