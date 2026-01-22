import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) { }

    @Post('create-session')
    async createSession(@Body() bookingData: any) {
        try {
            const session = await this.paymentService.createCheckoutSession(bookingData);
            return { id: session.id, url: session.url };
        } catch (error) {
            console.error('Error creating checkout session:', error);
            throw new HttpException(
                'Failed to create payment session',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
