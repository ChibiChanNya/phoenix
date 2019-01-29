//We're using the express framework and the mailgun-js wrapper
let express = require('express');
let Mailgun = require('mailgun-js');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
//init express
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


//Your api key, from Mail-gun’s Control Panel
let api_key = process.env.MAILGUN_KEY;

//Your domain, from the Mailgun Control Panel
let domain = 'mg.phoenixdevelopment.mx';

//Your sending email address
let from_who = 'contacto@phoenixdevelopment.mx';

//Tell express to fetch files from the /js directory
app.use(express.static(__dirname + '/js'));


// Send a message to the specified email address when you navigate to /submit/someaddr@email.com
// The index redirects here
app.post('/server/contact_mail', function (req, res) {

  console.log("Wooo", req.body);

  //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
  let mailgun = new Mailgun({apiKey: api_key, domain: domain});
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let message = req.body.message;

  let data = {
    //Specify email data
    from: from_who,
    //The email to contact
    to: 'contacto@phoenixdevelopment.mx',
    //Subject and text data
    subject: 'Nuevo mensaje por formulario de contacto',
    html: "<h2>Mensaje Recibido!</h2>"
    + "<ul>"
    + "<li><b>Nombre:</b> " + name + "</li>"
    + "<li><b>Email:</b> " + email + "</li>"
    + "<li><b>Tel:</b> " + phone + "</li>"
    + "<li><b>Message:</b> " + message + "</li>"
    + "</ul>",

    text: 'Mensaje Recibido: \n' + 'Nombre: ' + name + ' \n' + 'Email: ' + email + ' \n' + 'Teléfono: ' + phone + ' \n' + 'Mensaje: ' + message + ' \n',

  };

  //Invokes the method to send emails given the above data with the helper library
  mailgun.messages().send(data, function (err, body) {
    if (err) {
      res.sendStatus(500);
      console.log("got an error: ", err);
    }
    //Else we can greet    and leave
    else {
      res.sendStatus(200);
    }
  });

});

console.log("Server running on localhost:3030");
app.listen(3010);