import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";


export async function PUT(request: NextRequest) {
    try {
        const query = request.nextUrl.searchParams;
        const token = query.get("token");
        const userId = query.get("userId");
        const body = await request.json();
        console.log(body)

        // Find the confirmation token
        const confirmationToken = await db.confirmationToken.findUnique({
            where: {
                token: token || "",
                userId: userId || ""
            }
        });

        // Check if token exists and hasn't expired
        if (!confirmationToken || confirmationToken.expirationDate < new Date()) {
            // Try to delete the student, but don't throw an error if it doesn't exist
            try {
                if(token && userId){
                await db.confirmationToken.delete({
                    where:{
                        token:token
                    }
                })
                const guardian = await db.guardian.findFirst({
                    where: {
                        Student: {
                            userId: userId || ""
                        }
                    }
                });
                if(guardian){
                await db.guardian.delete({
                    where:{
                        id: guardian.id
                    }
                })}
                await db.student.delete({
                    where:{
                        userId: userId
                    }
                })
        
                console.log(userId, "HERE")
                await db.user.delete({
                    where:{
                        id: userId
                    }
                })}
   
            } catch (deleteErr) {
              console.log(deleteErr)
              
            }

            return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
        }

        // Update the student's payment status to pending
        const updatedStudent = await db.student.update({
            where: {
                userId: userId || ""
            },
            data: {
                paymentStatus: "PENDING",
                paymentReceipt: body?.paymentImage
            }
        });

        // Optionally, you might want to delete the used token
        await db.confirmationToken.delete({
            where: {
                id: confirmationToken.id
            }
        });

        return NextResponse.json({ message: "Payment status updated to pending" }, { status: 200 });

    } catch (err) {
        console.error("Error updating payment status:", err);
        return NextResponse.json({ error: "An error occurred while updating payment status" }, { status: 500 });
    }
}