import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
    private stripe: Stripe;

    constructor(private configService: ConfigService) {
        this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY', ''), {
            apiVersion: '2025-01-27.acacia' as any,
        });
    }

    async createCheckoutSession(bookingData: any) {
        const { experience, deposit, email } = bookingData;

        const session = await this.stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email: email,
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: `Fianza: ${experience}`,
                            description: 'Reserva de experiencia exclusiva con CostaVisor',
                        },
                        unit_amount: Math.round(deposit * 100), // Stripe uses cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${this.configService.get<string>('FRONTEND_URL', 'http://localhost:3000')}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${this.configService.get<string>('FRONTEND_URL', 'http://localhost:3000')}/cancel`,
        });

        return session;
    }
}
