import {Component, OnInit, ViewChild} from '@angular/core';
import {Tweet} from '../tweet';
import { TweetService } from '../tweet.service';
import { UserBoxComponent } from "../user-box/user-box.component";

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
    @ViewChild(UserBoxComponent)
    user: {};
    tweets: Tweet[];

    constructor(private tweetService: TweetService) { }

    getTweets(): void {
        this.tweets = this.tweetService.getTweets();
    }

    ngOnInit() {
        this.getTweets();
    }

    onSave(tweetText: HTMLInputElement, user: object) {
        /*const date = new Date();
        const tweetAuthor = 'Dinesh';*/
        const newTweet = {};
        newTweet.created_at = new Date();
        newTweet.id = this.tweets.length + 1;
        newTweet.text = tweetText;
        newTweet.user = user.name;
        newTweet.nbrLike = 0;

        this.tweets.push(newTweet);

        console.log(this.tweets);
    }

}
