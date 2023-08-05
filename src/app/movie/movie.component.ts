import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  type ='';
  id='';
  url='';
  movies:any;
  movie:any;
  constructor(private route:ActivatedRoute, private http:HttpClient){}
  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if(this.type === 'trending'){
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
      console.log("hi ..........",this.url);
    }
    if(this.type === 'theatre'){
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
      console.log("hi ..........",this.url);
    }
    if(this.type === 'popular'){
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
      console.log("hi ..........",this.url);
    }
    this.getMovie();
  }

  getMovie(){
this.http.get(this.url).subscribe((movies)=>{
  this.movies = movies;
  console.log("hi from getMovie to tje mmm ..........",this.movies);
  let index = this.movies.findIndex(
    (movie: { id : string }) => movie.id == this.id
    );
    if(index > -1){
      this.movie = this.movies[index];
      console.log(this.movie);
    }
});
  }


}
