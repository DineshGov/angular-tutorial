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



}
