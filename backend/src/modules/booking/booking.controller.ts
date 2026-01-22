import { Controller, Post, Body, HttpException, HttpStatus, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailService } from '../email/email.service';
import { Booking } from './booking.entity';

@Controller('booking')
export class BookingController {
    constructor(
        @InjectRepository(Booking)
        private bookingRepository: Repository<Booking>,
        private readonly emailService: EmailService
    ) { }

    @Post()
    async handleBooking(@Body() bookingData: any) {
        try {
            const total = parseFloat(bookingData.total);
            const expectedDeposit = Math.round(total * 0.2);

            // Save to DB
            const booking = this.bookingRepository.create({
                ...bookingData,
                deposit: expectedDeposit,
                total: total,
                status: 'pending'
            });
            await this.bookingRepository.save(booking);

            // Send Email
            await this.emailService.sendBookingConfirmation({
                ...bookingData,
                deposit: expectedDeposit,
            });

            return {
                success: true,
                message: 'Booking request sent successfully',
                depositToPay: expectedDeposit,
                balanceRemaining: total - expectedDeposit
            };
        } catch (error) {
            console.error('Error handling booking:', error);
            throw new HttpException(
                'Failed to process booking',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    @Get()
    async getAllBookings() {
        return this.bookingRepository.find({ order: { createdAt: 'DESC' } });
    }
}
