import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { createQuestionDTO } from "../../dto/createQuestion.dto";
import { QuestionService } from "../services/question.service";
import { Question } from "../entities/question.entity";
import { QuizService } from "../services/quiz.service";


@Controller('/question')
export class QuestionController{
    constructor(private questionService:QuestionService,private quizService:QuizService){}
    @Post('')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body()question:createQuestionDTO):Promise<Question>{
        const quiz= await this.quizService.getQuizByID(question.quizId);
        console.log(quiz);
        return await this.questionService.createQuestion(question,quiz);
    }
}