const nodemailer = require("nodemailer");
require("dotenv").config();

const sendContactMail = (req, res) => {
  const { name, surname, phone, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SENDIN,
    port: process.env.SMTP_PORT_SENDIN,
    secure: false,
    auth: {
      user: process.env.SMTP_SENDIN_USER,
      pass: process.env.SMTP_SENDIN_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.SMTP_SENDIN_USER,
    subject: "Contact",
    text: `Name: ${name} ${surname} \n Phone: ${phone} \n Email: ${email} \n Message: ${message}`,
  };

  transporter
    .sendMail(mailOptions)
    .then((response) => {
      res.status(200).json({
        message: "Email sent",
        response,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "Email not sent",
        error,
      });
    });
};

module.exports = {
  sendContactMail,
};
