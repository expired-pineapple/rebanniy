import Mail from "nodemailer/lib/mailer";
import nodemailer from 'nodemailer';

  const transporter = nodemailer.createTransport({
      // @ts-expect-error
    host: 'mail.rebbaniy.com',
    secure: true,
    port: '465',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
console.log({
  user: process.env.EMAIL,
  pass: process.env.PASSWORD
})
  export const sendEmail = async(reciever:string, mail: string) =>{
    try{
      const mailOptions: Mail.Options = {
          from: process.env.EMAIL,
          to: reciever,
          html : mail,
          subject: "Account confirmation",      
          };
      mailOptions.html = mail;
      await transporter.sendMail(mailOptions);
        }catch(err){
            console.log(err)
  }
  }
  
  