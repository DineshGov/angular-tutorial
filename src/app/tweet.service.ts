import { Injectable } from '@angular/core';
import { Tweet } from './tweet';

@Injectable({
    providedIn: 'root'
})
export class TweetService {

    tweets: Tweet[] = [
        {
            created_at: 'Wed Apr 05 12:30:12 +0000 2017',
            id: 1,
            text: 'Je mets les pieds où je veux, Little John… et c\'est souvent dans la gueule.',
            user: 'James Braddock',
            nbrLike: 0
        },
        {
            created_at: 'Thu Apr 06 15:24:15 +0000 2017',
            id: 2,
            text: 'Qui a deux pouces et qui s\'en fout ? Bob Kelso !',
            user: 'Bob kelso',
            nbrLike: 0
        },
    ];

    constructor() { }

    getTweets() {
        return this.tweets;
    }
}