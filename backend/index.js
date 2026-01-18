const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from frontend (env var or localhost)
app.use(cors({
  origin: process.env.FRONTEND_URL || '*', // In production, set FRONTEND_URL to your deployed site
  methods: ['GET', 'POST'],
}));
app.use(express.json());

const nodemailer = require('nodemailer');

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, details, subject } = req.body;

  if (!name || !email || !details) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields.' });
  }

  // Create Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email Options
  const mailOptions = {
    // Brevo requires the 'from' address to be a verified sender in your account.
    // We send FROM your verified email, but set Reply-To as the user's email.
    from: `"${name}" <${process.env.ADMIN_EMAIL}>`,
    replyTo: email,
    to: process.env.ADMIN_EMAIL, // list of receivers
    subject: subject || `New Inquiry from ${name} - OffshoreDev`, // Subject line
    text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${details}
    `, // plain text body
    html: `
      <h3>New Project Inquiry</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      < br/>
      <p><strong>Message:</strong></p>
      <p>${details.replace(/\n/g, '<br>')}</p>
    `, // html body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
