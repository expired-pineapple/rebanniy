import { NextRequest, NextResponse } from "next/server";
import bycrpt from "bcrypt";
import { db } from "@/lib/db";
import getCurrentUser from "@/app/actions/getCurrentUser";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();


    const password = body.studentInfo.password.toLowerCase().trim();
    const hashedPassword = await bycrpt.hash(password, 10);

    const userUrl = `${process.env.BASE_URL}/login?employeeNumber=${body.employeeNumber}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userUrl}`;

    const result = await db.$transaction(async (prisma) => {
      const studentInfo = body.studentInfo
      const user = await prisma.user.create({
        data: {
            firstName: studentInfo.firstName,
            lastName: studentInfo.lastName,
            username: studentInfo.username,
            password:hashedPassword
        },
      });

      const student = await prisma.student.create({
        data: {
          userId: user.id,
          image:studentInfo.image,
          age: studentInfo.age,
          gender: studentInfo.gender,
          studentStatus: studentInfo.studentStatus
        },
      });

      await prisma.guardian.create({
        data:{ 
            ...body.guardianInfo,
            studentId:student.id
        }
      });

      return { user, student };
    }, {
      timeout: 25000 
    });

    return NextResponse.json({ message: "Student created successfully" }, { status: 201 });
  } catch (error: any) {
    console.error(error);
    if (error.code === "P2002") {
      return NextResponse.json({ message: "Invalid student data" }, { status: 400 });
    }
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}