const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); // Set EJS as the template engine

// Routes
app.get('/', (req, res) => {
  res.render('index'); // Render index.ejs from the 'views' directory
});

// POST route for handling form submission and sending email
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received form submission: Name - ${name}, Email - ${email}, Message - ${message}`);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com',
    subject: `Message from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('An error occurred while sending the email.');
    }
    res.send('Message sent: ' + info.response);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
