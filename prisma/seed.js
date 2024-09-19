import bycrpt from "bcrypt";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


const userData =  async() =>{
    try{
    const hashedPassword = await bycrpt.hash("jsfjbrgvb09!", 10);
    const userData = {
        "firstName":"Admin",
        "lastName":"User",
        "username":"adminuser",
        "password":hashedPassword,
        "isAdmin": true,
        "email":"admin@rebanniy.com"
       
    }

    const user = await prisma.user.create({
        data: userData,
      });

      console.log(user)

    }catch(e){
        console.log(e)
    }
}

userData()