import * as emailjs from "emailjs-com";

const emailService = {
  sendPassphraseEmail,
}

function sendPassphraseEmail(recipientEmail, recipientName, passphrase) {
  emailjs.send(
    'mailgun',
    'template_MWd650oR',
    {
      to_email: recipientEmail,
      to_name: recipientName,
      passphrase: passphrase,
    })
    .then(res => {
      console.log('sent')
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Failed to send feedback. Error: ', err))
}