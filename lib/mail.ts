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
    subject: "New Lead Received",
    html: `
    <div style="
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
      'Open Sans', 'Helvetica Neue', sans-serif;
      max-width: 600px; 
      margin: auto; 
      border: 1px solid #e0e0e0; 
      border-radius: 8px; 
      padding: 24px; 
      background-color: #f9f9f9;
    ">
      <h2 style="
        color: #1a2e6e; 
        border-bottom: 2px solid #1a2e6e; 
        padding-bottom: 8px;
        margin-bottom: 16px;
      ">
        New Lead Submission
      </h2>
      <p style="font-size: 16px; color: #333; margin-bottom: 16px;">
        You have received a new lead from your website contact form. Details are below:
      </p>
      <table style="width: 100%; margin-top: 16px; border-collapse: collapse;">
        <tbody>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #1a2e6e; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #555;">${data.fullName}</td>
          </tr>
          <tr style="background-color: #e8f0fe;">
            <td style="padding: 8px 0; font-weight: 600; color: #1a2e6e;">Phone:</td>
            <td style="padding: 8px 0; color: #555;">${data.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #1a2e6e;">Email:</td>
            <td style="padding: 8px 0; color: #555;">${data.email}</td>
          </tr>
          <tr style="background-color: #e8f0fe;">
            <td style="padding: 8px 0; font-weight: 600; color: #1a2e6e;">Message:</td>
            <td style="padding: 8px 0; color: #555; white-space: pre-wrap;">${data.message}</td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top: 24px; font-size: 14px; color: #999;">
        This email was generated automatically. Please respond promptly.
      </p>
    </div>
  `,
  });

}
