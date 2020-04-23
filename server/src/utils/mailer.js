import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()

console.log(process.env.SMTP_HOST);
class Mail {
    constructor(to, from, subject, html) {
        this.from = from;
        this.to = to.join(",");
        this.subject = subject;
        this.html = html
    }
    send() {
        try {
            let transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: process.env.SMTP_USER, // generated Mailgun user
                    pass: process.env.SMTP_PASS// generated Mailgun pass
                }, tls: {
                    rejectUnauthorized: false
                }
            });
            // send mail with defined transport object
            transporter.sendMail({
                from: this.from, //'"Ecommerce 👻" <foo@ecommerce.com>', // sender address
                to: this.to, //["speak2c.emeka@gmail.com"], // list of receivers"receiver 1, receiver  2"
                subject: this.subject, // Subject line
                html: this.html // html body
            })

        } catch (err) {
            throw new Error('No Internet connection')
        }
    }

}

export default Mail;




