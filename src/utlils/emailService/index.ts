import * as nodemailer from 'nodemailer'

export const NodeMail = async (email, emailTemplate, emailSubject) => {
    var smtpHost = "smtp.gmail.com";
    var smtpPort = 465;
    var transporter = await nodemailer.createTransport({
        service: 'gmail',
        host: smtpHost,
        port: smtpPort,
        secure: true,
        auth: {
            user: `poorvikacentralinventory@gmail.com`,
            pass: process.env.EMAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {
        from: 'Poorvika - Central inventory <poorvikacentralinventory@gmail.com>',
        to: email,
        subject: emailSubject,
        html: emailTemplate
    };

    transporter.sendMail(mailOptions, function (error: any, info: { response: string; }) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

