import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [TodoModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
