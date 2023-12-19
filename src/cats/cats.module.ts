// cats.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { LoggerMiddleware } from './logger.middleware';
import { Cat } from './entities/cat.entity';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService, LoggerMiddleware],
})
export class CatsModule {}
