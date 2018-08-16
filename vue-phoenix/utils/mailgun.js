import axios from 'axios';

const API_KEY = process.env.MAILGUN_PUBLIC;
const DOMAIN = 'mg.phoenixdevelopment.mx';

export {send_contact, get_test};

function send_contact(name, email, phone, message) {
  let to_address = "andre@phoenixdevelopment.mx";
  axios({
    method: 'post',
    url: 'https://api.mailgun.net/v3/mg.phoenixdevelopment.mx/messages',
    auth: {
      username: 'api',
      password: API_KEY,
    },
    data: {
      from: 'Phoenix Development Contact Form <contact@phoenixdevelopment.mx>',
      to: to_address,
      subject: 'Mensaje por formulario de contacto',
      text: "Hola",
      // text: 'Mensaje Recibido: \n' + 'Nombre: ' + name + ' \n' + 'Email: ' + email + ' \n' + 'Teléfono: ' + phone + ' \n' + 'Mensaje: ' + message + ' \n',
      html:"Hola!",
      // "<h2>Mensaje Recibido!</h2>"
      // + "<ul>"
      // + "<li><b>Nombre:</b> " + name + "</li>"
      // + "<li><b>Email:</b> " + email + "</li>"
      // + "<li><b>Tel:</b> " + phone + "</li>"
      // + "<li><b>Message:</b> " + message + "</li>"
      // + "</ul>",
    }
  }).then(
    response => {
      console.log("MAIL SENT", response);
    },
    reject => {
      console.log("ERROR?",reject);
    }
  ).catch(function(response){
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  })
}

function get_test(){
  let to_address = "andre@phoenixdevelopment.mx";
  axios({
    method: 'GET',
    url: 'https://www.notecode.mx',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then(
    response => {
      console.log("MAIL SENT", response);
    },
    response => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    }
  ).catch(function(response){
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  })
}
