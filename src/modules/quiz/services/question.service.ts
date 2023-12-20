import { Injectable } from "@nestjs/common";
import { createQuestionDTO } from "../../dto/createQuestion.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { QuestionRepository } from "../entities/question.repository";
import { Question } from "../entities/question.entity";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuestionService{
    constructor(@InjectRepository(Question) private questionRepository:QuestionRepository){

    }
    async createQuestion(question:createQuestionDTO,quiz:Quiz):Promise<Question>{
        const newQuestion=await this.questionRepository.save({question:question.question});
        quiz.questions=[newQuestion,...quiz.questions];await quiz.save();
        return newQuestion;
    }

}