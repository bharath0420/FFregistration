import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ERegistrationModule } from './e-registration/e-registration.module';
import { EmailService } from './email/email.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({
    envFilePath: '.env',
    
  }),
    TypeOrmModule.forRoot({
type: 'mysql',
host: process.env.DATABASE_HOST,
port: 3306,
username: process.env.DATABASE_USER,
password: process.env.DATABASE_PASSWORD,
database: process.env.DATABASE_NAME,
synchronize: false,
autoLoadEntities: false,}),
ERegistrationModule],
  controllers: [AppController],
  providers: [AppService, EmailService],
})
export class AppModule {}
