import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'

import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(
    private http: HttpClient
    ) {}

  ngOnInit() {
    this.fetchPost();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http.post<{name: string}>(
      "https://comisionfederal-188703.firebaseio.com/recipes.json",
      postData
    ).subscribe(responseData =>{

    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPost();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPost(){
    this.http
    .get<{[key: string] : Post}>('https://comisionfederal-188703.firebaseio.com/recipes.json')
    .pipe(
      map(responseData => {
      const postsArray: Post[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
        postsArray.push({...responseData[key], id: key });
        }
      }
      return postsArray;
    })
    )
    .subscribe(posts => {

    });
  }
}
