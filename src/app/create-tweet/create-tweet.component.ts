import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Tweet} from '../tweet';
import {TweetService} from "../tweet.service";
import {UserService} from "../user.service";


@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.less']
})
export class CreateTweetComponent implements OnInit {
  public user: User;
  public tweet: Tweet;
  constructor(
      private UserService: UserService,
      private tweetService: TweetService
  ) {  }

  ngOnInit() {
      this.userService.user.subscribe(user => {
      this.user = user;
    })
  }

    onSave(tweetText: HTMLInputElement, user: object) {
        console.log(this.userService);
        const newTweet = {};
        newTweet.created_at = new Date();
        newTweet.id = this.tweets.length + 1;
        newTweet.text = tweetText;
        newTweet.user = user.name;
        newTweet.nbrLike = 0;

        this.tweetService.save(newTweet);

        console.log(this.tweets);
    }

}
