import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-maker-container',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-maker-container.component.html',
  styleUrl: './task-maker-container.component.scss'
})
export class TaskMakerContainerComponent {
   
  @Output() QuestionsList = new EventEmitter();

    constructor(public router: Router){
  
    }
  
    // declaratio 
  
  
  
    sno:number=0;
    num1: number | undefined;
    num2: number | undefined;
    operator: string='';
    Questions: Questions[] = []
  
    mathsShow:boolean = true
    scienceShow: boolean = false
    englishShow: boolean=false
  
    
    ngOnInit() {
      let queData:any = localStorage.getItem("Questions");
      if(queData) {
        this.Questions = JSON.parse(queData);
      }
    }
  
    createQuestion(){
      if (!this.num1 || !this.num2 || !this.operator) {
        alert("Please Fill all Input Fields.");
        return;
      }
  
      let questionData = {
        sno: this.Questions.length + 1,
        num1: this.num1,
        num2: this.num2,
        operator: this.operator,
        ans: this.answerForQuestion(this.num1, this.num2, this.operator),
      };
  
      console.log("questionData", questionData)
  
      this.Questions.push(questionData);
      localStorage.setItem("Questions", JSON.stringify(this.Questions));
      this.QuestionsList.emit(this.Questions)
    
      this.clearInputData()
  
  
    }
  
    clearInputData() {
      this.num1 = undefined
      this.num2 = undefined
      this.operator = ""
    }
  
  
    answerForQuestion(num1: number, num2: number, sign: string) {
      if (sign == '+') {
        return num1+num2 
      } 
      else if (sign == '-') {
        return num1-num2 
      } 
      else if (sign == '*') {
        return num1*num2 
      }
      else {
        return num1/num2 
      }
    }
  
    clearQuestions(){
      this.Questions = []  
      localStorage.removeItem("Questions");
     this.QuestionsList.emit(this.Questions)
      
  
    }



  
    subjectLoad(sub: string) {
      if(sub == "maths") {
        this.mathsShow = true
        this.scienceShow = false
      } else if (sub == "science") {
        this.mathsShow = false
        this.scienceShow = true
      } else {
        this.mathsShow = false
        this.scienceShow = false
        this.englishShow = true
      }
    }
  
    navHomePage(){
      this.router.navigateByUrl('home')
    }
  
  }
  
  export interface Questions {
    sno: number,
    num1: number,
    num2: number,
    operator: string,
    ans: any,
    answer?:any
  }
  
  


  

