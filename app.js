var app = require('./config/server');


var rotaNoticias = require('./app/routes/noticias')(app);

var rotaHome = require('./app/routes/home')(app);

var rotaFormInclusaoNoticia = require('./app/routes/form_inclusao_noticia')(app);
var min = new Date();
var min2 = min.getMinutes();
var nodemailer = require('nodemailer');

const CronJob = require('cron').CronJob;
const job = new CronJob('5 * * * * *', function() {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'gabriellzitto@gmail.com',
          pass: 'skymatrix'
        }
      });
      
      var mailOptions = {
        from: 'gabriellzitto@gmail.com',
        to: 'bielzitto97@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
});

job.start();



app.listen(3000, function(){
    console.log("Servidor ON");
});