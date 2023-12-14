import { PartialType } from '@nestjs/mapped-types';
import { CreateERegistrationDto } from './create-e-registration.dto';

export class UpdateERegistrationDto extends PartialType(CreateERegistrationDto) {}
