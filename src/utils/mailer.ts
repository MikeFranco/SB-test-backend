require('dotenv').config();
const nodemailer = require('nodemailer');
const cors = require('cors')({
  origin: true
});

interface MailerOptions {
  //from: string;
  to: string;
  subject: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

const emailMessage = async (req: any, res:any) => {
  res.set('Access-Control-Allow-Origin', '*');

  const {
    ticker,
    stock_name,
    price,
    category,
    times_queried,
  } = req.body;
  
  const mailOptions = {
    //from: process.env.EMAIL, //useless cause' use transporter.auth.user
    to: 'mike_el_gamer@yahoo.com.mx',
    subject: 'Prueba send email',
    html: `
      <p style="font-size: 16px;">A new item was created, here are the details:</p>
      <br />
      <ul>
        <li>Ticker: ${ticker}</li>
        <li>Stock name: ${stock_name}</li>
        <li>Price: ${price}</li>
        <li>Category: ${category}</li>
        <li>Times queried: ${times_queried}</li>
      </ul>
    `
  };

  sendEmailFunction(req, res, mailOptions)
}


const sendEmailFunction = (req: any, res: any, mailOptions: MailerOptions) => {
  cors(req, res, () => {
    transporter.verify((err: any, success: any) => {
      if (err) res.send(`Verify Error: ${err.toString()}`);
      else {
        return transporter.sendMail(mailOptions, (error: any, info: any) => {
          if (error) {
            return res.send(error.toString());
          }
          return res.send(info).status(205);
        });
      }
    });
  });
}

export { emailMessage };