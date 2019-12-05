require('dotenv').config()
const nodemailer = require("nodemailer");
const db = require("../models");


// Defining methods for the RawMaterialsController
module.exports = {
  sendEmail: function(req, res) {
    console.log("EMAIL", req.body);
    console.log("EMAIL", process.env.EMAIL_PASSWORD, process.env.EMAIL_SENDER);
    ("use strict");
    const user = req.body;
    
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.stackmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_SENDER, // generated ethereal user
          pass: process.env.EMAIL_PASSWORD // generated ethereal password
        }
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"H&B FENCING" <hbgroup@hbfencingandlandscaping.com>', // sender address
        to: user.email, // list of receivers
        subject: "Hello " + user.firstName, // Subject line
        text: "hola", // plain text body
        html: ` <h1>Message from ${user.firstName} </h1> 
    <div>
        <h2>name: ${user.firstName} ${user.lastName}</h2>
        <h2>Phone: ${user.phone}</h2>
        <h2>email: ${user.email}</h2>
        <p>message: ${user.message}</p>
    </div>` // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    main();
    main().catch(console.error);
    res.json(0);
  }
};
