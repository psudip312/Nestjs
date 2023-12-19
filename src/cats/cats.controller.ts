// cats.controller.ts
import { Controller, Get, Post, Body, Use } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { LoggerMiddleware } from './logger.middleware';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @Use(LoggerMiddleware) // Apply middleware to the findAll method
  findAll(): string[] {
    return this.catsService.findAll();
  }

  @Post()
  @Use(LoggerMiddleware) // Apply middleware to the create method
  create(@Body() createCatDto: CreateCatDto): string {
    this.catsService.create(createCatDto);
    return `Cat ${createCatDto.name} created`;
  }
}
