import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";


export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const {id} = params
        console.log(id)
        const student = await db.student.findUnique({
            where: {
                id: id
            },
        })
        console.log(student, "Student")
      await db.student.update({
            where: {
                id: id
            },
            data: {
                paymentStatus: "PAID"
            }
        });

        return NextResponse.json({ message: "Payment status updated to pending" }, { status: 200 });

    } catch (err) {
        console.error("Error updating payment status:", err);
        return NextResponse.json({ error: "An error occurred while updating payment status" }, { status: 500 });
    }
}