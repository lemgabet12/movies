import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
[x: string]: any;
  searchTitle = '';
  movieApiUrl = '';
  movieData = {
    title: '',
    description: '',
    BoxOffice: '',
    imageUrl: '',
  };
  readAPI(URL: string) {
    return this.http.get<any>(URL);
  }
  constructor(private http: HttpClient) {
    

  }
  searchMovie()
{
  const search = encodeURIComponent(this.searchTitle).trim();
  console.log("rechrche du film" + search);
  this.movieApiUrl = 'https://www.omdbapi.com/?i=tt3896198&apikey=a6f58373&t=' + search;
  this.readAPI( this.movieApiUrl)
  .subscribe((data) => {
  console.log(data);
  this.movieData.title = data['Title'];
  this.movieData.description = data['Plot'];
  this.movieData.BoxOffice = data['BoxOffice'];
  this.movieData.imageUrl = data['Poster'];
});
}
}
