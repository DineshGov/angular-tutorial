import { Component, OnInit } from '@angular/core';
import {Tweet} from '../tweet';
import { TweetService } from '../tweet.service';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
    username: string;
    tweets: Tweet[];

    constructor(private tweetService: TweetService) { }

    getTweets(): void {
        this.tweets = this.tweetService.getTweets();
    }

    ngOnInit() {
        this.getTweets();
    }

    onSave(tweetText: HTMLInputElement, username: string) {
        /*const date = new Date();
        const tweetAuthor = 'Dinesh';*/
        const newTweet = {};
        newTweet.created_at = new Date();
        newTweet.id = this.tweets.length + 1;
        newTweet.text = tweetText;
        newTweet.user = username;
        newTweet.nbrLike = 0;

        this.tweets.push(newTweet);

        console.log(this.tweets);
    }

}
