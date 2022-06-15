import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPosts();
  }

  onCreatePost(postData: Post) {
    this.http.post<{name: string }>("", postData)
    .subscribe((responseData) => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }

  private getPosts() {
    this.http.get<{[key: string]: Post}>('')
    .pipe(
      map(responseData => {
      const postArray: Post[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
        postArray.push({...responseData[key], id: key})
        }
      }
      return postArray;
    }))
    .subscribe(posts =>{
      this.loadedPosts = posts;
    });
  }
}
