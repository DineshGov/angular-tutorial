import {Component, Input, OnInit} from '@angular/core';

import {Tweet} from '../tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.less']
})
export class TweetComponent implements OnInit {

  @Input()
  tweet: Tweet;

  constructor() { }

  ngOnInit() {
  }

    onLike(tweet: object , like: HTMLInputElement, unlike: HTMLInputElement) {
        if(tweet.nbrLike <= 0) {
            tweet.nbrLike = 1;

            like.className = 'fas fa-heart';

            like.style.color = 'red';
            unlike.style.color = 'black';
        }
    }

    onDislike(tweet: object , like: HTMLInputElement, unlike: HTMLInputElement) {
        if(tweet.nbrLike >= 0){
            tweet.nbrLike = -1;

            like.className = 'far fa-heart';

            unlike.style.color = 'red';
            like.style.color = 'black';
        }
    }

    onHover(heart: HTMLInputElement) {
        heart.style.cursor = 'pointer';
    }

}
