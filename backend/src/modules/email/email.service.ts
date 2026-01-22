import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST', 'smtp.gmail.com'),
      port: this.configService.get<number>('SMTP_PORT', 587),
      secure: this.configService.get<number>('SMTP_PORT', 587) === 465, // true for 465, false for other ports
      auth: {
        user: this.configService.get<string>('SMTP_USER', 'costavisor@gmail.com'),
        pass: this.configService.get<string>('SMTP_PASS'),
      },
    });
  }

  async sendInquiryEmail(inquiryData: any) {
    const { name, email, message, selectedProperty } = inquiryData;

    const mailOptions = {
      from: `"CostaVisor Presupuestos" <presupuesto@costavisor.com>`,
      to: 'reservas.costavisor@outlook.com',
      subject: `Nueva Consulta: ${selectedProperty || 'General'}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}\nPropiedad/Servicio: ${selectedProperty || 'N/A'}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1a2a44;">
          <h2 style="color: #c9a35d;">Nueva Consulta recibida</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background: #f4f6f9; padding: 15px; border-left: 4px solid #c9a35d;">
            ${message}
          </div>
          <p><strong>Propiedad/Servicio interesado:</strong> ${selectedProperty || 'General'}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">Enviado desde el sitio web de CostaVisor</p>
        </div>
      `,
    };

    return await this.transporter.sendMail(mailOptions);
  }

  async sendBookingConfirmation(bookingData: any) {
    const { name, email, experience, date, deposit, total } = bookingData;

    const mailOptions = {
      from: `"CostaVisor Presupuestos" <presupuesto@costavisor.com>`,
      to: 'reservas.costavisor@outlook.com', // Also notify CostaVisor
      cc: email, // CC the customer
      subject: `Confirmación de Reserva: ${experience}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1a2a44;">
          <h2 style="color: #c9a35d;">Confirmación de Reserva</h2>
          <p>Hola ${name}, gracias por confiar en CostaVisor.</p>
          <p>Hemos recibido tu solicitud de reserva para:</p>
          <div style="background: #f4f6f9; padding: 15px; border-left: 4px solid #c9a35d; margin: 20px 0;">
            <p><strong>Experiencia:</strong> ${experience}</p>
            <p><strong>Fecha:</strong> ${date}</p>
            <p><strong>Fianza abonada (20%):</strong> ${deposit}€</p>
            <p><strong>Resto a pagar a la llegada:</strong> ${total - deposit}€</p>
            <p><strong>Total:</strong> ${total}€</p>
          </div>
          <p>Nos pondremos en contacto contigo en breve para ultimar los detalles.</p>
          <hr />
          <p style="font-size: 12px; color: #666;">Este es un mensaje automático, por favor no responda directamente.</p>
        </div>
      `,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}
