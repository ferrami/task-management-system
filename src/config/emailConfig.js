import "dotenv/config";
import nodemailer from "nodemailer";

export default async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SERVER,
      service: process.env.SERVICE,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_USE_SSL === "true",
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_DEFAULT_SENDER,
      to: email,
      subject: subject,
      text: text,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.log("Email not sent");
    console.log(error);
  }
};
