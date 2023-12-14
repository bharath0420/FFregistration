import { Test, TestingModule } from '@nestjs/testing';
import { ERegistrationService } from './e-registration.service';

describe('ERegistrationService', () => {
  let service: ERegistrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ERegistrationService],
    }).compile();

    service = module.get<ERegistrationService>(ERegistrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
