import { Injectable } from '@nestjs/common';
import { CreateERegistrationDto } from './dto/create-e-registration.dto';
import { UpdateERegistrationDto } from './dto/update-e-registration.dto';

@Injectable()
export class ERegistrationService {
  create(createERegistrationDto: CreateERegistrationDto) {
    return 'This action adds a new eRegistration';
  }

  findAll() {
    return `This action returns all eRegistration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eRegistration`;
  }

  update(id: number, updateERegistrationDto: UpdateERegistrationDto) {
    return `This action updates a #${id} eRegistration`;
  }

  remove(id: number) {
    return `This action removes a #${id} eRegistration`;
  }
}
