import { Module } from '@nestjs/common';
import { ERegistrationService } from './e-registration.service';
import { ERegistrationController } from './e-registration.controller';

@Module({
  controllers: [ERegistrationController],
  providers: [ERegistrationService],
})
export class ERegistrationModule {}
