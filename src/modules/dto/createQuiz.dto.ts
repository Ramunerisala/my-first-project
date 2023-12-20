import { IsNotEmpty, Length } from "class-validator";

export class createQuizDto{

@IsNotEmpty({message:"Quiz should have a title"})
@Length(3,255)
title: string;
@IsNotEmpty({message:"Quiz should have description"})
@Length(3)
description:string;


}