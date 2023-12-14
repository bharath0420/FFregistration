import { Test, TestingModule } from '@nestjs/testing';
import { ERegistrationController } from './e-registration.controller';
import { ERegistrationService } from './e-registration.service';

describe('ERegistrationController', () => {
  let controller: ERegistrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ERegistrationController],
      providers: [ERegistrationService],
    }).compile();

    controller = module.get<ERegistrationController>(ERegistrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
