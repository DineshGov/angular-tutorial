import { Component, OnInit } from '@angular/core';
import {Tweet} from '../tweet';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.less']
})
export class TimelineComponent implements OnInit {
    username: string;
    tweets: Tweet[] = [
        {
            created_at: 'Wed Apr 05 12:30:12 +0000 2017',
            id: 1,
            text: 'Je mets les pieds où je veux, Little John… et c\'est souvent dans la gueule.',
            user: 'James Braddock',
            nbrLike: 0,
        },
        {
            created_at: 'Thu Apr 06 15:24:15 +0000 2017',
            id: 2,
            text: 'Qui a deux pouces et qui s\'en fout ? Bob Kelso !',
            user: 'Bob kelso',
            nbrLike: 0,
        },
    ];

    constructor() { }

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

    ngOnInit() {
    }

}
