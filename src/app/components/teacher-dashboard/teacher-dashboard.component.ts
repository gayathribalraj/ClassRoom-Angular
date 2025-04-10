import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';
import { QuestionContainerComponent } from '../question-container/question-container.component';
import { TaskMakerContainerComponent } from '../task-maker-container/task-maker-container.component';

@Component({
  selector: 'app-teacher-login',
  imports: [CommonModule, FormsModule,MenuComponent,QuestionContainerComponent,TaskMakerContainerComponent],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.scss'
})

export class TeacherLoginComponent {
  
  Questions: any;
  ngOnInit() {

    // let queData:any = localStorage.getItem("Questions");
    // if(queData) {
    //   this.Questions = JSON.parse(queData);
    // }
  }

  /*
    @Desc        To Create Questions List
    @Params      none
    @Return      
    @author      Gayathri
    @CreatedOn   08/04/2025
  */
  // createQuestion(){
  //   try{
  //     if (!this.num1 || !this.num2 || !this.operator) {
  //       alert("Please Fill all Input Fields.");
  //       return;
  //     }
  
  //     let questionData = {
  //       sno: this.Questions.length + 1,
  //       num1: this.num1,
  //       num2: this.num2,
  //       operator: this.operator,
  //       ans: this.answerForQuestion(this.num1, this.num2, this.operator),
  //     };
  
  //     console.log("questionData", questionData)
  
  //     this.Questions.push(questionData);
  //     localStorage.setItem("Questions", JSON.stringify(this.Questions));
  
  //     this.clearInputData()
  //   }
  //   catch(error) {
  //     console.log("error-createQuestion", error)
  //   }
  // }
   
  // clearInputData() {
  //   this.num1 = undefined
  //   this.num2 = undefined
  //   this.operator = ""
  // }

  // answerForQuestion(num1: number, num2: number, sign: string) {
  //   if (sign == '+') {
  //     return num1+num2 
  //   } 
  //   else if (sign == '-') {
  //     return num1-num2 
  //   } 
  //   else if (sign == '*') {
  //     return num1*num2 
  //   }
  //   else {
  //     return num1/num2 
  //   }
  // }

  // clearQuestions(){
  //   this.Questions = []  
  //   localStorage.removeItem("Questions");

  // }

  passQuestions(data: any) {
    console.log("emitting data", data)
    this.Questions = data
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
