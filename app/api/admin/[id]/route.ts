import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";
import getCurrentUser from "@/app/actions/getCurrentUser";


export async function GET(request: NextRequest,  { params }: { params: { id: string } }) {
    try{
        const user= await getCurrentUser();
        if(!user) return NextResponse.json({error: "Unauthorized"}, {status: 401});
        if(!user.isAdmin) return NextResponse.json({error: "Unauthorized"}, {status: 401});

        const { id } = params;

        const adminUser = await db.user.findUnique({
            where: {
                id: id
            }});

        return NextResponse.json(adminUser);
    }catch(error){
        return NextResponse.json({error: "Something went wrong"}, {status: 500});
    }    
  }


export async function PUT(request: NextRequest,  { params }: { params: { id: string } }) {
    try {
      const body = await request.json();
      const { id } = params;
      const updatedAdmin = await db.user.update({
        where:{
            id: id
        },
        data: body
      })
      return NextResponse.json({message:"User edited successfully"})
    }catch(error){
        return NextResponse.json({error: "Something went wrong"}, {status: 500});
    }    
  }
