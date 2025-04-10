import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-container',
  imports: [CommonModule, FormsModule],
  templateUrl:'./question-container.component.html',
  styleUrl: './question-container.component.scss'
})
export class QuestionContainerComponent {

  @Input() showQuestions: any;
  mathsShow: boolean = true;

  ngOnInit() {
    
  }
}



