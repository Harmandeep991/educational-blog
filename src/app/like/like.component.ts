import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  likesCounter = 100;
  clicked = false;
  ngOnInit(): void {
  }

  public like () {
    console.log('sss', this);
    this.clicked = !this.clicked;
    if(this.likesCounter <= 100) {
      this.likesCounter = this.likesCounter+1;
    } else {
      this.likesCounter = this.likesCounter-1;
    }
    
  }
//  likes-counter=100;
}
