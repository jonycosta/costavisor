const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.resend.com',
    port: 587,
    secure: false,
    auth: {
        user: 'resend',
        pass: 're_XJuZXEgx_BY8jpXvjm81kXnAbR3gDVHLY',
    },
});

const mailOptions = {
    from: '"CostaVisor Official" <presupuesto@costavisor.com>',
    to: 'reservas.costavisor@outlook.com',
    subject: 'Test de Verificación de Dominio',
    text: '¡Enhorabuena! El dominio costavisor.com ya está verificado y enviando correos oficiales.',
    html: '<h1>¡Éxito!</h1><p>Este correo confirma que <b>presupuesto@costavisor.com</b> está funcionando correctamente desde Resend.</p>',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});
