import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingController } from './booking.controller';
import { EmailModule } from '../email/email.module';
import { Booking } from './booking.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Booking]),
        EmailModule
    ],
    controllers: [BookingController],
})
export class BookingModule { }
