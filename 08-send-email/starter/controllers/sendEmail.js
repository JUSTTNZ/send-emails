const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    // Create a transporter object using Gmail's SMTP server
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'chukwudiconfidenceosinachi@gmail.com', // Your Gmail address
            pass: 'nbeh euyx blwy bgsa'   // Your Gmail password
        },
        tls: {
            rejectUnauthorized: false
        },
        connectionTimeout: 20000 // Increase timeout to 20 seconds
    });

    const info = await transporter.sendMail({
        from: '"Anonymous👻" <chukwudiconfidenceosinachi@gmail.com>', // sender address
        to: "ogbonnayavincent816@gmail.com, codebynz01@gmail.com", // list of receivers
        subject: " 👻", // Subject line
        text: "Say bye to your call of duty account in the next 24 hours. text this number on whatsapp now 07031352210", // plain text body
        html: "<b>Say bye to your call of duty account in the next 24 hours. text this number on whatsapp now 07031352210</b>" // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.send("Email sent successfully");
};

module.exports = sendEmail;