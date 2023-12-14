import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ERegistrationService } from './e-registration.service';
import { CreateERegistrationDto } from './dto/create-e-registration.dto';
import { UpdateERegistrationDto } from './dto/update-e-registration.dto';

@Controller('e-registration')
export class ERegistrationController {
  constructor(private readonly eRegistrationService: ERegistrationService) {}

  @Post()
  create(@Body() createERegistrationDto: CreateERegistrationDto) {
    return this.eRegistrationService.create(createERegistrationDto);
  }

  @Get()
  findAll() {
    return this.eRegistrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eRegistrationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateERegistrationDto: UpdateERegistrationDto) {
    return this.eRegistrationService.update(+id, updateERegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eRegistrationService.remove(+id);
  }
}
