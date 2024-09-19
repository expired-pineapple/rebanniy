import { NextRequest, NextResponse } from "next/server";
import bycrpt from "bcrypt";
import { db } from "@/lib/db";
import { sendEmail } from "@/lib/mailer";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();


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
        const expiry = new Date(new Date().getTime()+60)
        const token = await prisma.confirmationToken.create({
          data:{
            expirationDate: expiry,
            userId: user.id
          }
        })
        const mail = `
              <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmation Email</title>
          <style>
                  .logo-con {
                    display: flex;
                    justify-self: center;
                  }
                  .logo{
                      width: 200px; 
                  }
                  .email-content {
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 1.5;
                  }
                  h1 {
                    font-size: 24px;
                  }
                  p {
                    margin-bottom: 16px;
                  }
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f9f9f9;
                  padding: 20px;
              }
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              p {
                  font-size: 16px;
                  line-height: 1.5;
              }
              .header{
                  font-weight: 600;
                  font-size: medium;
                  text-align: center;
              }
              /* Add more styles as needed */
          </style>
        </head>
        <body>
          <div class="container">
              <div  class="logo" >
                  <img src="https://res.cloudinary.com/ddbdbuuqw/image/upload/v1714507511/aqmada-01_kg33nv.png" class="logo"/>
                </div>
                <div class="email-content">
                  <p class="header">
                      Thank you for registering as a beta tester, 
                  </p>
                  <p>token ${token.token} </p>
                  <p>
                    Best regards,
                  <p>
                    Rebanniy
                    </p>
                  </p>
                </div>
          </div>
        </body>
        </html>
        `;

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