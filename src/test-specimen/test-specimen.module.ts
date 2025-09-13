import { Module } from '@nestjs/common';
import { TestSpecimenService } from './test-specimen.service';
import { TestSpecimenController } from './test-specimen.controller';


@Module({
  controllers: [TestSpecimenController],
  providers: [TestSpecimenService],
})
export class TestSpecimenModule {}
