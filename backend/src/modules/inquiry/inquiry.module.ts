import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InquiryController } from './inquiry.controller';
import { EmailModule } from '../email/email.module';
import { Inquiry } from './inquiry.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Inquiry]),
        EmailModule
    ],
    controllers: [InquiryController],
})
export class InquiryModule { }
