import { IsNotEmpty, Length } from "class-validator";


export class createQuestionDTO{
    @IsNotEmpty({message:"Question should not be empty"})
    @Length(3,255)
    question:string;
    @IsNotEmpty({message:"Quiz ID should not be empty"})
    quizId:number;
}