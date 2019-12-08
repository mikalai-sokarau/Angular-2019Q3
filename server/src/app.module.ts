import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [AuthModule, CoursesModule],
  controllers: [],
  providers: []
})
export class AppModule {}
