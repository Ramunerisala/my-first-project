import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizRepository } from './repositories/quiz.repository';
import { Quiz } from './entities/quiz.entity';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { Question } from './entities/question.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Quiz,Question])],
    controllers:[QuizController,QuestionController],
    providers:[QuizService,QuestionService],
})
export class QuizModule {}
