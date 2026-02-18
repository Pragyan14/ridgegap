import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true if using port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendLeadNotificationEmail(data: {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}) {
  await transporter.sendMail({
    from: `"Website Lead" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "🚀 New Lead Received",
    html: `
      <h2>New Lead Submission</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  });
}
