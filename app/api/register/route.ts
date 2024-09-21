import { NextRequest, NextResponse } from "next/server";
import bycrpt from "bcrypt";
import { db } from "@/lib/db";
import { sendEmail } from "@/lib/mailer";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const baseURl = process.env.BASE_URL


    const password = body.studentInfo.password.toLowerCase().trim();
    const hashedPassword = await bycrpt.hash(password, 10);

    await db.$transaction(async (prisma:any) => {
      const studentInfo = body.studentInfo
      const user = await prisma.user.create({
        data: {
            firstName: studentInfo.firstName,
            lastName: studentInfo.lastName,
            email: studentInfo.email,
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
      console.log(body)

      await prisma.guardian.create({
        data:{ 
            ...body.guardianInfo,
            studentId:student.id
        }
      });
      if(user){
        console.log(user)
        const expiry = new Date(new Date().getTime()+60 * 60 * 1000)
        // console.log
        const token = await prisma.confirmationToken.create({
          data:{
            expirationDate: expiry,
            userId: user.id
          }
        })
        const mail = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Rebanniy - Payment Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 24px;
        }
        .content {
            padding: 20px;
        }
        .details {
            background-color: #f2f2f2;
            padding: 15px;
            margin-bottom: 20px;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #777;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="header">
        Rebbaniy Islamic Learning Center
    </div>
    <div class="content">
        <p>Welcome,</p>
        
        <p>We are delighted to confirm your enrollment at Rebanniy Islamic Learning Center. We're excited to have  ${user.firstName}  ${user.lastName} join our community of young learners.</p>

        <p>At Rebanniy, we are committed to nurturing your child's Islamic education and character in a warm, supportive environment. We look forward to partnering with you in this blessed journey.</p>
        <p>Please confirm your payment using this <a  target="_blank" href="${baseURl}/confirm?token=${token.token}&user=${user.id}">Link</a></p>
        <p>If you have any questions, please don't hesitate to contact us at supports@rebanniy.com.</p>
        <p>3000 for three months--- Women's Package</p>
        <p>1500 for 3 months--- Children's Package</p>

        
        <p>May Allah bless your family and guide us all on the straight path.</p>
        
      
        <p>Best Regards,<br>
        Rebbaniy Islamic Learning Center</p>
    </div>
    <div class="footer">
        © 2024 Rebbaniy Islamic Learning Center. All rights reserved.
    </div>
</body>
</html> `;

        await sendEmail(studentInfo.email, mail);
    }

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