import { Controller, Post, Body, HttpException, HttpStatus, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmailService } from '../email/email.service';
import { Inquiry } from './inquiry.entity';

@Controller('inquiry')
export class InquiryController {
    constructor(
        @InjectRepository(Inquiry)
        private inquiryRepository: Repository<Inquiry>,
        private readonly emailService: EmailService
    ) { }

    @Post()
    async handleInquiry(@Body() inquiryData: any) {
        try {
            // Save to DB
            const inquiry = this.inquiryRepository.create(inquiryData);
            await this.inquiryRepository.save(inquiry);

            // Send Email
            await this.emailService.sendInquiryEmail(inquiryData);

            return { success: true, message: 'Inquiry sent successfully' };
        } catch (error) {
            console.error('Error sending inquiry:', error);
            throw new HttpException(
                'Failed to send inquiry',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    @Get()
    async getAllInquiries() {
        return this.inquiryRepository.find({ order: { createdAt: 'DESC' } });
    }
}
