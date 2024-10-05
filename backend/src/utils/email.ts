import nodemailer from "nodemailer";

import ProjectError from "../helper/error";

const sendEmail = async (
  email: string,
  subject: string,
  text: string
): Promise<any> => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'joel.bogisich31@ethereal.email',
          pass: 'jw3ATRCTEqPma1n83C'
      }
  });
    const emailSent = await transporter.sendMail({
      from: "joel.bogisich31@ethereal.email",
      to: email,
      subject: subject,
      text: text,
    });
    console.log("message sent: %s", emailSent.messageId);
  } catch (error) {
    const err = new ProjectError("email not sent");
    err.statusCode = 401;
    throw err;
  }
};

export default sendEmail;