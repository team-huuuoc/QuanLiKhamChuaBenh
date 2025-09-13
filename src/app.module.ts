import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { NurseModule } from './nurse/nurse.module';
import { MedicalRecordModule } from './medical-record/medical-record.module';
import { TestResultModule } from './test-result/test-result.module';
import { TestCategoryModule } from './test-category/test-category.module';
import { TestTypeModule } from './test-type/test-type.module';
import { TestSpecimenModule } from './test-specimen/test-specimen.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    PatientModule,
    DoctorModule,
    NurseModule,
    MedicalRecordModule,
    TestResultModule,
    TestCategoryModule,
    TestTypeModule,
    TestSpecimenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
