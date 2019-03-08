import { Component, OnInit } from '@angular/core';
import { TweetComponent } from "../tweet/tweet.component";

@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.less']
})

export class TweetDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
