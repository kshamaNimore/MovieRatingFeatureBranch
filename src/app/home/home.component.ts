import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  theaterMovies:any;   
  alltimePopular:any;
  constructor(private http:HttpClient, private router:Router){}
  ngOnInit(): void { 
    this.getTrendingMovies();  
    this.gettheaterMovies();
    this.getallTimepopularMovies();

  }
  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies)=>{
      this.trendingMovies = movies;
      console.log(this.trendingMovies);
    });    
  }

  gettheaterMovies(){
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies)=>{
      this.theaterMovies = movies;
      console.log(this.theaterMovies);
    });      
  }

  getallTimepopularMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies)=>{
      this.alltimePopular = movies;
      console.log(this.alltimePopular);
    });    
  }

  goToMovie(type:string, id:string){
    console.log("from goTomovise ..........", type, id);
    this.router.navigate(['movie', type, id]);
      
  }
}
