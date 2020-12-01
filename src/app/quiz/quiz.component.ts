import { questions } from './../questions';
import { feedback } from './../feedback';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  feedback = [];
  questions=[]; // blank array,
  feedbackValues: any=[];
  displayedColumns: string[] = ['id', 'question_name', 'Ratings'];

  constructor(private dataService: DataService) {
    
   }

  ngOnInit(): void {
    this.dataService.feedbackRequest().subscribe((data: any[]) => {
      console.log(data);
      this.questions = data;
     });
  }
 public saveFeedback () {   
   var filteredValues = this.feedbackValues.filter(function (el) {
    return el != null;
  });
  console.log('inside', filteredValues)
 }
}
