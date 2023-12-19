import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { LocationModule } from './location/location.module';
import { CatsModule } from './cats/cats.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [TodoModule, LocationModule, CatsModule, CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
