import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuizController } from './modules/quiz/controllers/quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './modules/quiz/entities/quiz.entity';
import * as path from 'path';

@Module({
 imports: [QuizModule,TypeOrmModule.forRoot({
  type:'mysql',
  host:'localhost',
  port:3306,
  username:'root',
  password:'ndsrp@369',
  database:'quiz',
  entities: [path.join(__dirname, "**/*.entity{.ts,.js}")],
  synchronize:true,
 })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
