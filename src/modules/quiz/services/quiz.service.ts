import { Injectable } from "@nestjs/common";
import { QuizRepository } from "../repositories/quiz.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { createQuizDto} from "../../dto/createQuiz.dto";
import { Quiz } from "../entities/quiz.entity";
import { FindOneOptions } from "typeorm";

function listofnumbers(){
    return [1,2,3,4];
}

@Injectable()
export class QuizService{
    constructor(@InjectRepository(Quiz)private quizRepository:QuizRepository){
    }
      getAllQuiz():Array<number>{
        return listofnumbers();
    }
    async getQuizByID(quizId:number):Promise<Quiz>{
        const findOneOptions: FindOneOptions<Quiz> = {
            where: { id: quizId},
            relations: ['questions'],
          };
        return await this.quizRepository.findOne(findOneOptions);
      }
    async createQuiz(quiz:createQuizDto){
        var k:Quiz;
        k=await this.quizRepository.save(quiz);
        return k;
        
        
    }
}